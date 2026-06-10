import { ref } from 'vue'

import { verbs } from '@/data/verbs'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

export function useVerbs () {
  // ----------------------------------------
  // GET RANDOM VERB
  // ----------------------------------------
  const getRandomVerb = (): GermanVerb => {
    const verbsQuantity = verbs.length

    const randomVerb = verbs[Math.floor(Math.random() * verbsQuantity)]!

    return randomVerb
  }

  // ----------------------------------------
  // GET RANDOM VERBS
  // ----------------------------------------
  type GetRandomVerbsParams = {
    n?: number
    excludeVerbs?: GermanVerb[]
  }

  const getRandomVerbs = (params: GetRandomVerbsParams = {}): GermanVerb[] => {
    const {
      n = 5,
      excludeVerbs = []
    } = params

    // ----------------------------------------
    // EXCLUDED VERB IDs
    // ----------------------------------------
    const excludedVerbIds = new Set(excludeVerbs.map(verb => verb.id))

    if (n > verbs.length - excludedVerbIds.size) {
      throw new Error('Not enough verbs to generate random verbs')
    }

    // ----------------------------------------
    // RANDOM VERBS
    // ----------------------------------------
    const randomVerbs = new Map<string, GermanVerb>()

    while (randomVerbs.size < n) {
      const verb = getRandomVerb()

      if (excludedVerbIds.has(verb.id)) continue
      if (randomVerbs.has(verb.id)) continue

      randomVerbs.set(verb.id, verb)
    }

    return Array.from(randomVerbs.values())
  }

  // ----------------------------------------
  // GET RANDOM VERB BASED ON HISTORY
  // ----------------------------------------
  const localRandomVerbsIds = ref<Set<string>>(new Set())
  const getRandomVerbBasedOnHistory = (): GermanVerb => {
    const availableVerbs = verbs.filter(verb => !localRandomVerbsIds.value.has(verb.id))

    if (!availableVerbs.length) {
      localRandomVerbsIds.value.clear()

      return getRandomVerb()
    }

    const randomVerb = availableVerbs[Math.floor(Math.random() * availableVerbs.length)]!

    localRandomVerbsIds.value.add(randomVerb.id)

    return randomVerb
  }

  return {
    getRandomVerbs,
    getRandomVerbBasedOnHistory
  }

}
