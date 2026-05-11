import type { Language } from './Language'

export interface GermanAdjetive {
  id: string
  type: 'adjetive'
  translations: Record<Language, string>
  levels?: string[]
  categories?: string[]
}
