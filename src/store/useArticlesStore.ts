import { defineStore } from 'pinia'

import { useStorage } from '@vueuse/core'

import type { HistoryArticle } from '@/interfaces/HistoryArticles'
import type { GermanNoun } from '@/interfaces/GermanNoun'

export const useArticlesStore = defineStore('articles', () => {
  const articlesHistory = useStorage<Map<string, HistoryArticle>>(
    'articlesHistory',
    new Map(),
    localStorage,
    {
      mergeDefaults: true,
      onError: (error) => {
        console.error('Local storage articles history error:', error)
      }
    }
  )

  const addArticleToHistory = (noun: GermanNoun, success: boolean) => {
    const articleHistory = articlesHistory.value.get(noun.id)

    if (!articleHistory) {
      articlesHistory.value.set(noun.id, {
        ...noun,
        successAttempts: success ? 1 : 0,
        failedAttempts: success ? 0 : 1,
        totalAttempts: 1
      })

      return
    }

    if (success) {
      articleHistory.successAttempts++
    } else {
      articleHistory.failedAttempts++
    }

    articleHistory.totalAttempts++
  }

  const resetArticlesHistory = () => {
    articlesHistory.value.clear()
  }

  return {
    articlesHistory,
    addArticleToHistory,
    resetArticlesHistory
  }
})
