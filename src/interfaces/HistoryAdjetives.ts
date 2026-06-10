import type { GermanAdjective } from './GermanAdjetives'
import type { HistoryStats } from './HistoryStats'

export interface HistoryAdjective extends GermanAdjective, HistoryStats {}
