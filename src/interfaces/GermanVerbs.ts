import type { Language } from './Language'

export interface GermanVerb {
  id: string
  type: 'verb'
  infinitive: string
  preteritum: string
  perfekt: string
  translations: Record<Language, string>
  auxiliary?: 'haben' | 'sein'
  levels?: string[]
  categories?: string[]
}
