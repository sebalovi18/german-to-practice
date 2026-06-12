import type { GermanAdjective } from './GermanAdjectives'
import type { HistoryStats } from './HistoryStats'

export interface HistoryAdjective extends GermanAdjective, HistoryStats {}
