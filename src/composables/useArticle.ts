import type { GermanNoun } from '@/interfaces/GermanNoun'

export type GermanArticleVariant = 'masculine' | 'feminine' | 'neuter' | 'plural'

const articleVariantColors: Record<GermanArticleVariant, string> = {
  masculine: 'blue',
  feminine: 'pink',
  neuter: 'gray',
  plural: 'green'
}

export function useArticles () {
  const getArticleVariant = (noun: GermanNoun): GermanArticleVariant | undefined => {
    if (noun.plural_id === null) return 'plural'
    if (noun.article === 'der') return 'masculine'
    if (noun.article === 'die') return 'feminine'
    if (noun.article === 'das') return 'neuter'

    return
  }

  const getArticleColor = (noun: GermanNoun): string | undefined => {
    const articleVariant = getArticleVariant(noun)

    if (!articleVariant) return

    return articleVariantColors[articleVariant]
  }

  return {
    getArticleVariant,
    getArticleColor
  }
}
