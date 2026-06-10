import { defineStore } from 'pinia'

import { useStorage } from '@vueuse/core'

import type { HistoryAdjective } from '@/interfaces/HistoryAdjetives'
import type { GermanAdjective } from '@/interfaces/GermanAdjetives'

export const useAdjectivesStore = defineStore('adjectives', () => {
  const adjectivesHistory = useStorage<Map<string, HistoryAdjective>>(
    'adjectivesHistory',
    new Map(),
    localStorage,
    {
      mergeDefaults: true,
      onError: (error) => {
        console.error('Local storage adjectives history error:', error)
      }
    }
  )

  const addAdjectiveToHistory = (adjective: GermanAdjective, success: boolean) => {
    const adjectiveHistory = adjectivesHistory.value.get(adjective.id)

    if (!adjectiveHistory) {
      adjectivesHistory.value.set(adjective.id, {
        ...adjective,
        successAttempts: success ? 1 : 0,
        failedAttempts: success ? 0 : 1,
        totalAttempts: 1
      })

      return
    }

    if (success) {
      adjectiveHistory.successAttempts++
    } else {
      adjectiveHistory.failedAttempts++
    }

    adjectiveHistory.totalAttempts++
  }

  const resetAdjectivesHistory = () => {
    adjectivesHistory.value.clear()
  }

  return {
    adjectivesHistory,
    addAdjectiveToHistory,
    resetAdjectivesHistory
  }
})
