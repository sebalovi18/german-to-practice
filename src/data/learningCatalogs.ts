import { adjectives as baseAdjectives } from './adjectives'
import {
  mergeEssentialAdjectives,
  mergeEssentialNouns,
  mergeEssentialVerbs,
  mergeEssentialVocabulary
} from './essentialVocabulary'
import { nouns as baseNouns } from './nouns'
import { verbs as baseVerbs } from './verbs'
import { vocabulary as baseVocabulary } from './vocabulary'
import {
  a21RemainingNouns,
  a21RemainingVerbs,
  a21RemainingAdjectives,
  a21RemainingVocabulary
} from './a21RemainingVocabulary'
import type { Category } from './categories'

const normalize = (value: string) => value.replaceAll('|', '').toLocaleLowerCase('de-DE').trim()

function mergeWords<T extends {
  categories: Category[],
  levels?: string[]
}> (base: T[], additions: T[], key: (word: T) => string): T[] {
  const result = new Map(base.map(word => [normalize(key(word)), word]))

  additions.forEach(word => {
    const id = normalize(key(word))
    const existing = result.get(id)
    result.set(id, existing ? {
      ...existing,
      categories: [...new Set([...existing.categories, ...word.categories])],
      levels: [...new Set([...(existing.levels ?? []), ...(word.levels ?? [])])]
    } : word)
  })

  return [...result.values()]
}

export const nouns = mergeWords(mergeEssentialNouns(baseNouns), a21RemainingNouns, word => `${word.article} ${word.value}`)
export const verbs = mergeWords(mergeEssentialVerbs(baseVerbs), a21RemainingVerbs, word => word.infinitive)
export const adjectives = mergeWords(mergeEssentialAdjectives(baseAdjectives), a21RemainingAdjectives, word => word.adjective)
// Keep every book occurrence (lesson/page provenance), but do not repeat it as an essential entry.
export const vocabulary = mergeEssentialVocabulary([...baseVocabulary, ...a21RemainingVocabulary])
