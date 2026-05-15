import type { GermanArticle } from './GermanArticle'
import type { Language } from './Language'

export interface GermanNoun {
  id: string
  type: 'noun'
  article: GermanArticle
  value: string
  singular_id: string | null
  plural_id: string | null
  translations: Record<Language, string>
  translationArticles: Record<Language, string | null>
  levels: string[]
  categories: string[]
}
