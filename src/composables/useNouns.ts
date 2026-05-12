import { nouns } from '@/data/nouns'
import type { GermanNoun } from '@/interfaces/GermanNoun'

export function useNouns () {
  const getRandomNouns = (n?: number): GermanNoun[] => {
    const randomNouns = nouns.sort(() => Math.random() - 0.5)

    if (!n) {
      return randomNouns
    }

    return randomNouns.slice(0, n)
  }

  return {
    getRandomNouns
  }

}
