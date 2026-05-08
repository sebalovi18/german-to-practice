import type { GermanArticle } from './GermanArticle'
import type { Language } from './Language'

export type GermanNoun = {
  id: string
  type: 'noun'
  article: GermanArticle
  singular: string
  plural: string
  translations: Record<Language, string>
  level?: string
  category?: string
}
