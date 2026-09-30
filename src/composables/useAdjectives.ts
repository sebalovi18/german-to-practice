import { ref } from 'vue'

import { adjectives } from '@/data/adjectives'

import type { GermanAdjective } from '@/interfaces/GermanAdjectives'

export function useAdjectives () {
  // ----------------------------------------
  // GET RANDOM ADJECTIVE
  // ----------------------------------------
  const getRandomAdjective = (sourceAdjectives: GermanAdjective[] = adjectives): GermanAdjective => {
    if (!sourceAdjectives.length) {
      throw new Error('No adjectives available to generate a random adjective')
    }

    const adjectivesQuantity = sourceAdjectives.length

    const randomAdjective = sourceAdjectives[Math.floor(Math.random() * adjectivesQuantity)]!

    return randomAdjective
  }

  // ----------------------------------------
  // GET RANDOM ADJECTIVES
  // ----------------------------------------
  type GetRandomAdjectivesParams = {
    n?: number
    excludeAdjectives?: GermanAdjective[]
    sourceAdjectives?: GermanAdjective[]
  }

  const getRandomAdjectives = (params: GetRandomAdjectivesParams = {}): GermanAdjective[] => {
    const {
      n = 5,
      excludeAdjectives = [],
      sourceAdjectives = adjectives
    } = params

    const excludedAdjectiveIds = new Set(excludeAdjectives.map(adjective => adjective.id))

    if (n > sourceAdjectives.length - excludedAdjectiveIds.size) {
      throw new Error('Not enough adjectives to generate random adjectives')
    }

    const randomAdjectives = new Map<string, GermanAdjective>()

    while (randomAdjectives.size < n) {
      const adjective = getRandomAdjective(sourceAdjectives)

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
  const getRandomAdjectiveBasedOnHistory = (sourceAdjectives: GermanAdjective[] = adjectives): GermanAdjective => {
    const availableAdjectives = sourceAdjectives.filter(adjective => !localRandomAdjectivesIds.value.has(adjective.id))

    if (!availableAdjectives.length) {
      localRandomAdjectivesIds.value.clear()

      return getRandomAdjective(sourceAdjectives)
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
