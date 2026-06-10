import { defineStore } from 'pinia'

import { ref } from 'vue'

import { useStorage } from '@vueuse/core'

import type { HistoryVerb } from '@/interfaces/HistoryVerbs'
import type { GermanVerb } from '@/interfaces/GermanVerbs'

export const useVerbsStore = defineStore('verbs', () => {
  const verbsHistory = useStorage<Map<string, HistoryVerb>>(
    'verbsHistory',
    new Map(),
    localStorage,
    {
      mergeDefaults: true,
      onError: (error) => {
        console.error('Local storage verbs history error:', error)
      }
    }
  )

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
