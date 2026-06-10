import type { GermanNoun } from './GermanNoun'

export interface HistoryNoun extends GermanNoun {
  successAttempts: number
  failedAttempts: number
  totalAttempts: number
}
