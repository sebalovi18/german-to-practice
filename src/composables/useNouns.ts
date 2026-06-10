import { ref } from 'vue'

import { nouns } from '@/data/nouns'

import type { GermanNoun } from '@/interfaces/GermanNoun'

export function useNouns () {
  // ----------------------------------------
  // GET RANDOM NOUN
  // ----------------------------------------
  const getRandomNoun = (): GermanNoun => {
    const nounsQuantity = nouns.length

    const randomNoun = nouns[Math.floor(Math.random() * nounsQuantity)]!

    return randomNoun
  }

  // ----------------------------------------
  // GET RANDOM NOUNS
  // ----------------------------------------
  type GetRandomNounsParams = {
    n?: number
    excludeNouns?: GermanNoun[]
  }

  const getRandomNouns = (params: GetRandomNounsParams = {}): GermanNoun[] => {
    const {
      n = 5,
      excludeNouns = []
    } = params

    const excludedNounIds = new Set(excludeNouns.map(noun => noun.id))

    if (n && n > nouns.length - excludedNounIds.size) {
      throw new Error('Not enough nouns to generate random nouns')
    }

    const randomNouns = new Map<string, GermanNoun>()

    while (randomNouns.size < (n ?? nouns.length - excludedNounIds.size)) {
      const noun = getRandomNoun()

      if (excludedNounIds.has(noun.id)) continue
      if (randomNouns.has(noun.id)) continue

      randomNouns.set(noun.id, noun)
    }

    return Array.from(randomNouns.values())
  }

  // ----------------------------------------
  // GET RANDOM NOUN BASED ON HISTORY
  // ----------------------------------------
  const localRandomNounsIds = ref<Set<string>>(new Set())
  const getRandomNounBasedOnHistory = (): GermanNoun => {
    const availableNouns = nouns.filter(noun => !localRandomNounsIds.value.has(noun.id))

    if (!availableNouns.length) {
      localRandomNounsIds.value.clear()

      return getRandomNoun()
    }

    const randomNoun = availableNouns[Math.floor(Math.random() * availableNouns.length)]!

    localRandomNounsIds.value.add(randomNoun.id)

    return randomNoun
  }

  return {
    getRandomNouns,
    getRandomNounBasedOnHistory
  }

}
