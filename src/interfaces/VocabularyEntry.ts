import type { Language } from './Language'

export interface VocabularyEntry {
  id: string
  level: 'A1.1' | 'A1.2' | 'A2.1'
  lesson: string
  page: number
  sheet: number
  kind: string
  german: string
  forms: string | null
  translations: Record<Language, string>
  example: string | null
}
