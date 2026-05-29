import { defineStore } from 'pinia'

import { ref } from 'vue'

import type { HistoryVerb } from '@/interfaces/HistoryVerbs'
import type { GermanVerb } from '@/interfaces/GermanVerbs'

export const useVerbsStore = defineStore('verbs', () => {
  const verbsHistory = ref<Map<string, HistoryVerb>>(new Map())

  const addVerbToHistory = (verb: GermanVerb, success: boolean) => {
    const verbHistory = verbsHistory.value.get(verb.id)

    if (!verbHistory) {
      verbsHistory.value.set(verb.id, {
        ...verb,
        successAttempts: success ? 1 : 0,
        failedAttempts: success ? 0 : 1,
        totalAttempts: 1
      })

      return
    }

    if (success) {
      verbHistory.successAttempts++
    } else {
      verbHistory.failedAttempts++
    }

    verbHistory.totalAttempts++
  }

  const resetVerbsHistory = () => {
    verbsHistory.value.clear()
  }

  return {
    verbsHistory,
    addVerbToHistory,
    resetVerbsHistory
  }
})
