import { defineStore } from 'pinia'

import { useStorage } from '@vueuse/core'

import type { HistoryNoun } from '@/interfaces/HistoryNouns'
import type { GermanNoun } from '@/interfaces/GermanNoun'

export const useNounsStore = defineStore('nouns', () => {
  const nounsHistory = useStorage<Map<string, HistoryNoun>>(
    'nounsHistory',
    new Map(),
    localStorage,
    {
      mergeDefaults: true,
      onError: (error) => {
        console.error('Local storage nouns history error:', error)
      }
    }
  )

  const addNounToHistory = (noun: GermanNoun, success: boolean) => {
    const nounHistory = nounsHistory.value.get(noun.id)

    if (!nounHistory) {
      nounsHistory.value.set(noun.id, {
        ...noun,
        successAttempts: success ? 1 : 0,
        failedAttempts: success ? 0 : 1,
        totalAttempts: 1
      })

      return
    }

    if (success) {
      nounHistory.successAttempts++
    } else {
      nounHistory.failedAttempts++
    }

    nounHistory.totalAttempts++
  }

  const resetNounsHistory = () => {
    nounsHistory.value.clear()
  }

  return {
    nounsHistory,
    addNounToHistory,
    resetNounsHistory
  }
})
