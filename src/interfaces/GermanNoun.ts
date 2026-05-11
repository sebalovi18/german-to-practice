import type { GermanArticle } from './GermanArticle'
import type { Language } from './Language'

export interface GermanNoun {
  id: string
  type: 'noun'
  article: GermanArticle
  singular: string
  plural: string
  translations: Record<Language, string>
  levels?: string[]
  categories?: string[]
}
