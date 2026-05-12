import type { Language } from './Language'

export interface GermanAdjective {
  id: string
  type: 'adjective'
  adjective: string
  comparative: string
  superlative: string
  translations: Record<Language, string>
  levels?: string[]
  categories?: string[]
}
