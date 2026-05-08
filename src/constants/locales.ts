export const DEFAULT_LOCALE = 'en'
export const SUPPORTED_LOCALES = [
  'en',
  'de',
  'es',
  'tr'
] as const

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

export const isSupportedLocale = (locale: string | null): locale is SupportedLocale => (
  SUPPORTED_LOCALES.includes(locale as SupportedLocale)
)
