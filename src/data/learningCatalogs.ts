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

export const nouns = mergeEssentialNouns(baseNouns)
export const verbs = mergeEssentialVerbs(baseVerbs)
export const adjectives = mergeEssentialAdjectives(baseAdjectives)
export const vocabulary = mergeEssentialVocabulary(baseVocabulary)
