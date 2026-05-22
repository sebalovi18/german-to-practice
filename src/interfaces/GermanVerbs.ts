import type { Language } from './Language'
import type { Category } from '@/data/categories'

export interface GermanVerb {
  id: string
  type: 'verb'
  infinitive: string
  preteritum: string
  perfekt: string
  translations: Record<Language, string>
  auxiliary?: 'haben' | 'sein'
  levels?: string[]
  categories?: Category[]
}
