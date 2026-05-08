export const DEFAULT_FONT_CLASS = 'font-Eater'

export const fonts = [
  {
    label: 'Audiowide',
    className: 'font-Audiowide'
  },
  {
    label: 'Bitcount',
    className: 'font-Bitcount'
  },
  {
    label: 'Bitcount Grid Double Ink',
    className: 'font-Bitcount-Grid-Double-Ink'
  },
  {
    label: 'Cinzel',
    className: 'font-Cinzel'
  },
  {
    label: 'Eater',
    className: 'font-Eater'
  },
  {
    label: 'Fontdiner Swanky',
    className: 'font-Fontdiner-Swanky'
  },
  {
    label: 'Londrina Shadow',
    className: 'font-Londrina-Shadow'
  },
  {
    label: 'Luckiest Guy',
    className: 'font-Luckiest-Guy'
  },
  {
    label: 'Monoton',
    className: 'font-Monoton'
  },
  {
    label: 'Press Start 2P',
    className: 'font-Press-Start-2P'
  }
] as const

export type FontClass = typeof fonts[number]['className']

export const isFontClass = (fontClass: string | null): fontClass is FontClass => (
  fonts.some((font) => font.className === fontClass)
)
