import { ref } from 'vue'

import { nouns } from '@/data/learningCatalogs'

import type { GermanNoun } from '@/interfaces/GermanNoun'

export function useNouns () {
  // ----------------------------------------
  // GET RANDOM NOUN
  // ----------------------------------------
  const getRandomNoun = (sourceNouns: GermanNoun[] = nouns): GermanNoun => {
    if (!sourceNouns.length) {
      throw new Error('No nouns available to generate a random noun')
    }

    const nounsQuantity = sourceNouns.length

    const randomNoun = sourceNouns[Math.floor(Math.random() * nounsQuantity)]!

    return randomNoun
  }

  // ----------------------------------------
  // GET RANDOM NOUNS
  // ----------------------------------------
  type GetRandomNounsParams = {
    n?: number
    excludeNouns?: GermanNoun[]
    sourceNouns?: GermanNoun[]
  }

  const getRandomNouns = (params: GetRandomNounsParams = {}): GermanNoun[] => {
    const {
      n = 5,
      excludeNouns = [],
      sourceNouns = nouns
    } = params

    const excludedNounIds = new Set(excludeNouns.map(noun => noun.id))

    if (n && n > sourceNouns.length - excludedNounIds.size) {
      throw new Error('Not enough nouns to generate random nouns')
    }

    const randomNouns = new Map<string, GermanNoun>()

    while (randomNouns.size < (n ?? sourceNouns.length - excludedNounIds.size)) {
      const noun = getRandomNoun(sourceNouns)

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
  const getRandomNounBasedOnHistory = (sourceNouns: GermanNoun[] = nouns): GermanNoun => {
    const availableNouns = sourceNouns.filter(noun => !localRandomNounsIds.value.has(noun.id))

    if (!availableNouns.length) {
      localRandomNounsIds.value.clear()

      return getRandomNoun(sourceNouns)
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
