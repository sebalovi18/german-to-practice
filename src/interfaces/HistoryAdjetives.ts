import type { GermanAdjective } from './GermanAdjetives'

export interface HistoryAdjective extends GermanAdjective {
  successAttempts: number
  failedAttempts: number
  totalAttempts: number
}
