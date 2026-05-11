import type { Language } from './Language'

export interface GermanVerb {
  id: string
  type: 'verb'
  translations: Record<Language, string>
  levels?: string[]
  categories?: string[]
}
