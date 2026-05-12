import { verbs } from '@/data/verbs'
import type { GermanVerb } from '@/interfaces/GermanVerbs'

export function useVerbs () {
  const getRandomVerbs = (n?: number): GermanVerb[] => {
    const randomVerbs = verbs.sort(() => Math.random() - 0.5)

    if (!n) {
      return randomVerbs
    }

    return randomVerbs.slice(0, n)
  }

  return {
    getRandomVerbs
  }

}
