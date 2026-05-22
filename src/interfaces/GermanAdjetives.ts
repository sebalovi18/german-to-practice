import type { Language } from './Language'
import type { Category } from '@/data/categories'

export interface GermanAdjective {
  id: string
  type: 'adjective'
  adjective: string
  comparative: string
  superlative: string
  translations: Record<Language, string>
  levels?: string[]
  categories?: Category[]
}
