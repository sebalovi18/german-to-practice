import type { GermanNoun } from './GermanNoun'

export interface HistoryArticle extends GermanNoun {
  successAttempts: number
  failedAttempts: number
  totalAttempts: number
}
