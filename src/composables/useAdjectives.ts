import { adjectives } from '@/data/adjectives'
import type { GermanAdjective } from '@/interfaces/GermanAdjetives'

export function useAdjectives () {
  const getRandomAdjectives = (n?: number): GermanAdjective[] => {
    const randomAdjectives = adjectives.sort(() => Math.random() - 0.5)

    if (!n) {
      return randomAdjectives
    }

    return randomAdjectives.slice(0, n)
  }

  return {
    getRandomAdjectives
  }

}
