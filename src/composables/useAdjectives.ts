import { ref } from 'vue'

import { adjectives } from '@/data/adjectives'

import type { GermanAdjective } from '@/interfaces/GermanAdjetives'

export function useAdjectives () {
  // ----------------------------------------
  // GET RANDOM ADJECTIVE
  // ----------------------------------------
  const getRandomAdjective = (): GermanAdjective => {
    const adjectivesQuantity = adjectives.length

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectivesQuantity)]!

    return randomAdjective
  }

  // ----------------------------------------
  // GET RANDOM ADJECTIVES
  // ----------------------------------------
  type GetRandomAdjectivesParams = {
    n?: number
    excludeAdjectives?: GermanAdjective[]
  }

  const getRandomAdjectives = (params: GetRandomAdjectivesParams = {}): GermanAdjective[] => {
    const {
      n = 5,
      excludeAdjectives = []
    } = params

    const excludedAdjectiveIds = new Set(excludeAdjectives.map(adjective => adjective.id))

    if (n > adjectives.length - excludedAdjectiveIds.size) {
      throw new Error('Not enough adjectives to generate random adjectives')
    }

    const randomAdjectives = new Map<string, GermanAdjective>()

    while (randomAdjectives.size < n) {
      const adjective = getRandomAdjective()

      if (excludedAdjectiveIds.has(adjective.id)) continue
      if (randomAdjectives.has(adjective.id)) continue

      randomAdjectives.set(adjective.id, adjective)
    }

    return Array.from(randomAdjectives.values())
  }

  // ----------------------------------------
  // GET RANDOM ADJECTIVE BASED ON HISTORY
  // ----------------------------------------
  const localRandomAdjectivesIds = ref<Set<string>>(new Set())
  const getRandomAdjectiveBasedOnHistory = (): GermanAdjective => {
    const availableAdjectives = adjectives.filter(adjective => !localRandomAdjectivesIds.value.has(adjective.id))

    if (!availableAdjectives.length) {
      localRandomAdjectivesIds.value.clear()

      return getRandomAdjective()
    }

    const randomAdjective = availableAdjectives[Math.floor(Math.random() * availableAdjectives.length)]!

    localRandomAdjectivesIds.value.add(randomAdjective.id)

    return randomAdjective
  }

  return {
    getRandomAdjectives,
    getRandomAdjectiveBasedOnHistory
  }

}
