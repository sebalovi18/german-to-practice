import type { GermanVerb } from './GermanVerbs'

export interface HistoryVerb extends GermanVerb {
  successAttempts: number
  failedAttempts: number
  totalAttempts: number
}
