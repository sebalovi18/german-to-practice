import { CATEGORIES } from '@/data/categories'

import type { GermanAdjective } from '@/interfaces/GermanAdjectives'

export const adjectives: GermanAdjective[] = [
  {
    id: 'alt',
    type: 'adjective',
    adjective: 'alt',
    comparative: 'älter',
    superlative: 'am ältesten',
    translations: {
      en: 'old',
      es: 'viejo'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.FAMILY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO, CATEGORIES.TIME]
  },
  {
    id: 'billig',
    type: 'adjective',
    adjective: 'billig',
    comparative: 'billiger',
    superlative: 'am billigsten',
    translations: {
      en: 'cheap',
      es: 'barato'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'dick',
    type: 'adjective',
    adjective: 'dick',
    comparative: 'dicker',
    superlative: 'am dicksten',
    translations: {
      en: 'thick',
      es: 'grueso'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE]
  },
  {
    id: 'dunkel',
    type: 'adjective',
    adjective: 'dunkel',
    comparative: 'dunkler',
    superlative: 'am dunkelsten',
    translations: {
      en: 'dark',
      es: 'oscuro'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.ARTS, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'fertig',
    type: 'adjective',
    adjective: 'fertig',
    comparative: 'fertiger',
    superlative: 'am fertigsten',
    translations: {
      en: 'ready',
      es: 'listo'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.HOUSEHOLD, CATEGORIES.WORK]
  },
  {
    id: 'frei',
    type: 'adjective',
    adjective: 'frei',
    comparative: 'freier',
    superlative: 'am freiesten',
    translations: {
      en: 'free',
      es: 'libre'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.HOUSEHOLD, CATEGORIES.LEISURE, CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL, CATEGORIES.WORK]
  },
  {
    id: 'groß',
    type: 'adjective',
    adjective: 'groß',
    comparative: 'größer',
    superlative: 'am größten',
    translations: {
      en: 'big',
      es: 'grande'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'gut',
    type: 'adjective',
    adjective: 'gut',
    comparative: 'besser',
    superlative: 'am besten',
    translations: {
      en: 'good',
      es: 'bueno'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.EMOTIONS, CATEGORIES.WORK]
  },
  {
    id: 'hart',
    type: 'adjective',
    adjective: 'hart',
    comparative: 'härter',
    superlative: 'am härtesten',
    translations: {
      en: 'hard',
      es: 'duro'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'hässlich',
    type: 'adjective',
    adjective: 'hässlich',
    comparative: 'hässlicher',
    superlative: 'am hässlichsten',
    translations: {
      en: 'ugly',
      es: 'feo'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.PEOPLE]
  },
  {
    id: 'heiß',
    type: 'adjective',
    adjective: 'heiß',
    comparative: 'heißer',
    superlative: 'am heißesten',
    translations: {
      en: 'hot',
      es: 'caliente'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'hell',
    type: 'adjective',
    adjective: 'hell',
    comparative: 'heller',
    superlative: 'am hellsten',
    translations: {
      en: 'bright',
      es: 'claro'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.ARTS, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'jung',
    type: 'adjective',
    adjective: 'jung',
    comparative: 'jünger',
    superlative: 'am jüngsten',
    translations: {
      en: 'young',
      es: 'joven'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO, CATEGORIES.TIME]
  },
  {
    id: 'kalt',
    type: 'adjective',
    adjective: 'kalt',
    comparative: 'kälter',
    superlative: 'am kältesten',
    translations: {
      en: 'cold',
      es: 'frío'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'kaputt',
    type: 'adjective',
    adjective: 'kaputt',
    comparative: 'kaputter',
    superlative: 'am kaputtesten',
    translations: {
      en: 'broken',
      es: 'roto'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'klein',
    type: 'adjective',
    adjective: 'klein',
    comparative: 'kleiner',
    superlative: 'am kleinsten',
    translations: {
      en: 'small',
      es: 'pequeño'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'kurz',
    type: 'adjective',
    adjective: 'kurz',
    comparative: 'kürzer',
    superlative: 'am kürzesten',
    translations: {
      en: 'short',
      es: 'corto'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.TIME]
  },
  {
    id: 'lang',
    type: 'adjective',
    adjective: 'lang',
    comparative: 'länger',
    superlative: 'am längsten',
    translations: {
      en: 'long',
      es: 'largo'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.TIME]
  },
  {
    id: 'langsam',
    type: 'adjective',
    adjective: 'langsam',
    comparative: 'langsamer',
    superlative: 'am langsamsten',
    translations: {
      en: 'slow',
      es: 'lento'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.SPORTS, CATEGORIES.TIME, CATEGORIES.TRANSPORTATION]
  },
  {
    id: 'müde',
    type: 'adjective',
    adjective: 'müde',
    comparative: 'müder',
    superlative: 'am müdesten',
    translations: {
      en: 'tired',
      es: 'cansado'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH]
  },
  {
    id: 'neu',
    type: 'adjective',
    adjective: 'neu',
    comparative: 'neuer',
    superlative: 'am neuesten',
    translations: {
      en: 'new',
      es: 'nuevo'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'sauber',
    type: 'adjective',
    adjective: 'sauber',
    comparative: 'sauberer',
    superlative: 'am saubersten',
    translations: {
      en: 'clean',
      es: 'limpio'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.LOCATIONS]
  },
  {
    id: 'schlecht',
    type: 'adjective',
    adjective: 'schlecht',
    comparative: 'schlechter',
    superlative: 'am schlechtesten',
    translations: {
      en: 'bad',
      es: 'malo'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.EMOTIONS, CATEGORIES.WORK]
  },
  {
    id: 'schmutzig',
    type: 'adjective',
    adjective: 'schmutzig',
    comparative: 'schmutziger',
    superlative: 'am schmutzigsten',
    translations: {
      en: 'dirty',
      es: 'sucio'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.LOCATIONS]
  },
  {
    id: 'schnell',
    type: 'adjective',
    adjective: 'schnell',
    comparative: 'schneller',
    superlative: 'am schnellsten',
    translations: {
      en: 'fast',
      es: 'rápido'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.SPORTS, CATEGORIES.TIME, CATEGORIES.TRANSPORTATION]
  },
  {
    id: 'schön',
    type: 'adjective',
    adjective: 'schön',
    comparative: 'schöner',
    superlative: 'am schönsten',
    translations: {
      en: 'beautiful',
      es: 'hermoso'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.ARTS, CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.LEISURE, CATEGORIES.LOCATIONS, CATEGORIES.NATURE, CATEGORIES.PEOPLE, CATEGORIES.WEATHER]
  },
  {
    id: 'schwach',
    type: 'adjective',
    adjective: 'schwach',
    comparative: 'schwächer',
    superlative: 'am schwächsten',
    translations: {
      en: 'weak',
      es: 'débil'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.SPORTS]
  },
  {
    id: 'stark',
    type: 'adjective',
    adjective: 'stark',
    comparative: 'stärker',
    superlative: 'am stärksten',
    translations: {
      en: 'strong',
      es: 'fuerte'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.SPORTS]
  },
  {
    id: 'teuer',
    type: 'adjective',
    adjective: 'teuer',
    comparative: 'teurer',
    superlative: 'am teuersten',
    translations: {
      en: 'expensive',
      es: 'caro'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'toll',
    type: 'adjective',
    adjective: 'toll',
    comparative: 'toller',
    superlative: 'am tollsten',
    translations: {
      en: 'great',
      es: 'genial'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.LEISURE]
  },
  {
    id: 'traurig',
    type: 'adjective',
    adjective: 'traurig',
    comparative: 'trauriger',
    superlative: 'am traurigsten',
    translations: {
      en: 'sad',
      es: 'triste'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.EMOTIONS, CATEGORIES.HEALTH, CATEGORIES.PEOPLE]
  },
  {
    id: 'weit',
    type: 'adjective',
    adjective: 'weit',
    comparative: 'weiter',
    superlative: 'am weitesten',
    translations: {
      en: 'far',
      es: 'lejano'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'wütend',
    type: 'adjective',
    adjective: 'wütend',
    comparative: 'wütender',
    superlative: 'am wütendsten',
    translations: {
      en: 'angry',
      es: 'enojado'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.EMOTIONS, CATEGORIES.HEALTH, CATEGORIES.PEOPLE]
  },
  {
    id: 'arbeitslos',
    type: 'adjective',
    adjective: 'arbeitslos',
    comparative: 'arbeitsloser',
    superlative: 'am arbeitslosesten',
    translations: {
      en: 'unemployed',
      es: 'desempleado'
    },
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'blau',
    type: 'adjective',
    adjective: 'blau',
    comparative: 'blauer',
    superlative: 'am blauesten',
    translations: {
      en: 'blue',
      es: 'azul'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'braun',
    type: 'adjective',
    adjective: 'braun',
    comparative: 'brauner',
    superlative: 'am braunsten',
    translations: {
      en: 'brown',
      es: 'marrón'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'doof',
    type: 'adjective',
    adjective: 'doof',
    comparative: 'doofer',
    superlative: 'am doofsten',
    translations: {
      en: 'stupid',
      es: 'tonto'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'frisch',
    type: 'adjective',
    adjective: 'frisch',
    comparative: 'frischer',
    superlative: 'am frischesten',
    translations: {
      en: 'fresh',
      es: 'fresco'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN, CATEGORIES.NATURE]
  },
  {
    id: 'gelb',
    type: 'adjective',
    adjective: 'gelb',
    comparative: 'gelber',
    superlative: 'am gelbsten',
    translations: {
      en: 'yellow',
      es: 'amarillo'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'geschieden',
    type: 'adjective',
    adjective: 'geschieden',
    comparative: 'geschiedener',
    superlative: 'am geschiedensten',
    translations: {
      en: 'divorced',
      es: 'divorciado'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'grau',
    type: 'adjective',
    adjective: 'grau',
    comparative: 'grauer',
    superlative: 'am grauesten',
    translations: {
      en: 'gray',
      es: 'gris'
    },
    categories: [CATEGORIES.CLOTHING, CATEGORIES.WEATHER]
  },
  {
    id: 'grün',
    type: 'adjective',
    adjective: 'grün',
    comparative: 'grüner',
    superlative: 'am grünsten',
    translations: {
      en: 'green',
      es: 'verde'
    },
    categories: [CATEGORIES.CLOTHING, CATEGORIES.NATURE]
  },
  {
    id: 'interessant',
    type: 'adjective',
    adjective: 'interessant',
    comparative: 'interessanter',
    superlative: 'am interessantesten',
    translations: {
      en: 'interesting',
      es: 'interesante'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.LEISURE]
  },
  {
    id: 'lecker',
    type: 'adjective',
    adjective: 'lecker',
    comparative: 'leckerer',
    superlative: 'am leckersten',
    translations: {
      en: 'delicious',
      es: 'delicioso'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'lila',
    type: 'adjective',
    adjective: 'lila',
    comparative: 'lilafarbener',
    superlative: 'am lilafarbensten',
    translations: {
      en: 'purple',
      es: 'morado'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'lustig',
    type: 'adjective',
    adjective: 'lustig',
    comparative: 'lustiger',
    superlative: 'am lustigsten',
    translations: {
      en: 'funny',
      es: 'divertido'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.LEISURE, CATEGORIES.PEOPLE]
  },
  {
    id: 'nett',
    type: 'adjective',
    adjective: 'nett',
    comparative: 'netter',
    superlative: 'am nettesten',
    translations: {
      en: 'nice',
      es: 'amable'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS, CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
  },
  {
    id: 'richtig',
    type: 'adjective',
    adjective: 'richtig',
    comparative: 'richtiger',
    superlative: 'am richtigsten',
    translations: {
      en: 'correct',
      es: 'correcto'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'rosa',
    type: 'adjective',
    adjective: 'rosa',
    comparative: 'rosafarbener',
    superlative: 'am rosafarbensten',
    translations: {
      en: 'pink',
      es: 'rosa'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'rot',
    type: 'adjective',
    adjective: 'rot',
    comparative: 'röter',
    superlative: 'am rötesten',
    translations: {
      en: 'red',
      es: 'rojo'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'schwarz',
    type: 'adjective',
    adjective: 'schwarz',
    comparative: 'schwärzer',
    superlative: 'am schwärzesten',
    translations: {
      en: 'black',
      es: 'negro'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'spät',
    type: 'adjective',
    adjective: 'spät',
    comparative: 'später',
    superlative: 'am spätesten',
    translations: {
      en: 'late',
      es: 'tarde'
    },
    categories: [CATEGORIES.TIME]
  },
  {
    id: 'super',
    type: 'adjective',
    adjective: 'super',
    comparative: 'superer',
    superlative: 'am supersten',
    translations: {
      en: 'super',
      es: 'súper'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS]
  },
  {
    id: 'vegan',
    type: 'adjective',
    adjective: 'vegan',
    comparative: 'veganer',
    superlative: 'am vegansten',
    translations: {
      en: 'vegan',
      es: 'vegano'
    },
    categories: [CATEGORIES.FOOD]
  },
  {
    id: 'vegetarisch',
    type: 'adjective',
    adjective: 'vegetarisch',
    comparative: 'vegetarischer',
    superlative: 'am vegetarischsten',
    translations: {
      en: 'vegetarian',
      es: 'vegetariano'
    },
    categories: [CATEGORIES.FOOD]
  },
  {
    id: 'verheiratet',
    type: 'adjective',
    adjective: 'verheiratet',
    comparative: 'verheirateter',
    superlative: 'am verheiratetsten',
    translations: {
      en: 'married',
      es: 'casado'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'verwitwet',
    type: 'adjective',
    adjective: 'verwitwet',
    comparative: 'verwitweter',
    superlative: 'am verwitwetsten',
    translations: {
      en: 'widowed',
      es: 'viudo'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'warm',
    type: 'adjective',
    adjective: 'warm',
    comparative: 'wärmer',
    superlative: 'am wärmsten',
    translations: {
      en: 'warm',
      es: 'cálido'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'weiß',
    type: 'adjective',
    adjective: 'weiß',
    comparative: 'weißer',
    superlative: 'am weißesten',
    translations: {
      en: 'white',
      es: 'blanco'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'wichtig',
    type: 'adjective',
    adjective: 'wichtig',
    comparative: 'wichtiger',
    superlative: 'am wichtigsten',
    translations: {
      en: 'important',
      es: 'importante'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'beruflich',
    type: 'adjective',
    adjective: 'beruflich',
    comparative: 'beruflicher',
    superlative: 'am beruflichsten',
    translations: {
      en: 'professional / work-related',
      es: 'profesional / laboral'
    },
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'einfach',
    type: 'adjective',
    adjective: 'einfach',
    comparative: 'einfacher',
    superlative: 'am einfachsten',
    translations: {
      en: 'easy / simple',
      es: 'fácil / simple'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.WORK]
  },
  {
    id: 'geboren',
    type: 'adjective',
    adjective: 'geboren',
    comparative: 'geborener',
    superlative: 'am geborensten',
    translations: {
      en: 'born',
      es: 'nacido'
    },
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'herzlich',
    type: 'adjective',
    adjective: 'herzlich',
    comparative: 'herzlicher',
    superlative: 'am herzlichsten',
    translations: {
      en: 'warm / cordial',
      es: 'cordial / afectuoso'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PEOPLE]
  },
  {
    id: 'komisch',
    type: 'adjective',
    adjective: 'komisch',
    comparative: 'komischer',
    superlative: 'am komischsten',
    translations: {
      en: 'strange / funny',
      es: 'raro / gracioso'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'kostenlos',
    type: 'adjective',
    adjective: 'kostenlos',
    comparative: 'kostenloser',
    superlative: 'am kostenlosesten',
    translations: {
      en: 'free of charge',
      es: 'gratis'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'langweilig',
    type: 'adjective',
    adjective: 'langweilig',
    comparative: 'langweiliger',
    superlative: 'am langweiligsten',
    translations: {
      en: 'boring',
      es: 'aburrido'
    },
    categories: [CATEGORIES.LEISURE]
  },
  {
    id: 'nötig',
    type: 'adjective',
    adjective: 'nötig',
    comparative: 'nötiger',
    superlative: 'am nötigsten',
    translations: {
      en: 'necessary',
      es: 'necesario'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HEALTH, CATEGORIES.WORK]
  },
  {
    id: 'praktisch',
    type: 'adjective',
    adjective: 'praktisch',
    comparative: 'praktischer',
    superlative: 'am praktischsten',
    translations: {
      en: 'practical',
      es: 'práctico'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD, CATEGORIES.SHOPPING, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'privat',
    type: 'adjective',
    adjective: 'privat',
    comparative: 'privater',
    superlative: 'am privatesten',
    translations: {
      en: 'private',
      es: 'privado'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO, CATEGORIES.TRAVEL]
  },
  {
    id: 'willkommen',
    type: 'adjective',
    adjective: 'willkommen',
    comparative: 'willkommener',
    superlative: 'am willkommensten',
    translations: {
      en: 'welcome',
      es: 'bienvenido'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'wunderbar',
    type: 'adjective',
    adjective: 'wunderbar',
    comparative: 'wunderbarer',
    superlative: 'am wunderbarsten',
    translations: {
      en: 'wonderful',
      es: 'maravilloso'
    },
    categories: [CATEGORIES.LEISURE]
  },
  {
    id: 'zufrieden',
    type: 'adjective',
    adjective: 'zufrieden',
    comparative: 'zufriedener',
    superlative: 'am zufriedensten',
    translations: {
      en: 'satisfied',
      es: 'satisfecho'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.WORK]
  },
  {
    id: 'früh',
    type: 'adjective',
    adjective: 'früh',
    comparative: 'früher',
    superlative: 'am frühesten',
    translations: {
      en: 'early',
      es: 'temprano'
    },
    categories: [CATEGORIES.TIME]
  },
  {
    id: 'möbliert',
    type: 'adjective',
    adjective: 'möbliert',
    comparative: 'möblierter',
    superlative: 'am möbliertesten',
    translations: {
      en: 'furnished',
      es: 'amueblado'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
  },
  {
    id: 'öffentlich',
    type: 'adjective',
    adjective: 'öffentlich',
    comparative: 'öffentlicher',
    superlative: 'am öffentlichsten',
    translations: {
      en: 'public',
      es: 'público'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'glücklich',
    type: 'adjective',
    adjective: 'glücklich',
    comparative: 'glücklicher',
    superlative: 'am glücklichsten',
    translations: {
      en: 'happy',
      es: 'feliz'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'mutig',
    type: 'adjective',
    adjective: 'mutig',
    comparative: 'mutiger',
    superlative: 'am mutigsten',
    translations: {
      en: 'brave / courageous',
      es: 'valiente'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'ängstlich',
    type: 'adjective',
    adjective: 'ängstlich',
    comparative: 'ängstlicher',
    superlative: 'am ängstlichsten',
    translations: {
      en: 'fearful / anxious',
      es: 'miedoso/a / temeroso/a'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'pessimistisch',
    type: 'adjective',
    adjective: 'pessimistisch',
    comparative: 'pessimistischer',
    superlative: 'am pessimistischsten',
    translations: {
      en: 'pessimistic',
      es: 'pesimista'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'optimistisch',
    type: 'adjective',
    adjective: 'optimistisch',
    comparative: 'optimistischer',
    superlative: 'am optimistischsten',
    translations: {
      en: 'optimistic',
      es: 'optimista'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'intelligent',
    type: 'adjective',
    adjective: 'intelligent',
    comparative: 'intelligenter',
    superlative: 'am intelligentesten',
    translations: {
      en: 'intelligent',
      es: 'inteligente'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'schwanger',
    type: 'adjective',
    adjective: 'schwanger',
    comparative: '—',
    superlative: '—',
    translations: {
      en: 'pregnant',
      es: 'embarazada'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.FAMILY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'sympathisch',
    type: 'adjective',
    adjective: 'sympathisch',
    comparative: 'sympathischer',
    superlative: 'am sympathischsten',
    translations: {
      en: 'likeable / nice',
      es: 'simpático/a'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS, CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
  },
  {
    id: 'fleißig',
    type: 'adjective',
    adjective: 'fleißig',
    comparative: 'fleißiger',
    superlative: 'am fleißigsten',
    translations: {
      en: 'hard-working / diligent',
      es: 'trabajador/a / aplicado/a'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'voll',
    type: 'adjective',
    adjective: 'voll',
    comparative: 'voller',
    superlative: 'am vollsten',
    translations: {
      en: 'full / complete',
      es: 'lleno/a / completo/a'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'sicher',
    type: 'adjective',
    adjective: 'sicher',
    comparative: 'sicherer',
    superlative: 'am sichersten',
    translations: {
      en: 'sure / certain / safe',
      es: 'seguro/a'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS, CATEGORIES.WORK]
  },
  {
    id: 'sinnlos',
    type: 'adjective',
    adjective: 'sinnlos',
    comparative: 'sinnloser',
    superlative: 'am sinnlosesten',
    translations: {
      en: 'pointless / meaningless',
      es: 'sin sentido'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
  },
  {
    id: 'stressig',
    type: 'adjective',
    adjective: 'stressig',
    comparative: 'stressiger',
    superlative: 'am stressigsten',
    translations: {
      en: 'stressful',
      es: 'estresante'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.HEALTH, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'ordentlich',
    type: 'adjective',
    adjective: 'ordentlich',
    comparative: 'ordentlicher',
    superlative: 'am ordentlichsten',
    translations: {
      en: 'neat / proper',
      es: 'arreglado/a / apropiado/a'
    },
    categories: [CATEGORIES.CLOTHING, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'offen',
    type: 'adjective',
    adjective: 'offen',
    comparative: 'offener',
    superlative: 'am offensten',
    translations: {
      en: 'open / unanswered',
      es: 'abierto/a / pendiente'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION]
  },
  {
    id: 'wach',
    type: 'adjective',
    adjective: 'wach',
    comparative: 'wacher',
    superlative: 'am wachsten',
    translations: {
      en: 'awake',
      es: 'despierto/a'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE]
  },
  {
    id: 'verliebt',
    type: 'adjective',
    adjective: 'verliebt',
    comparative: '—',
    superlative: '—',
    translations: {
      en: 'in love',
      es: 'enamorado/a'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'scharf',
    type: 'adjective',
    adjective: 'scharf',
    comparative: 'schärfer',
    superlative: 'am schärfsten',
    translations: {
      en: 'spicy / sharp',
      es: 'picante / afilado'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'süß',
    type: 'adjective',
    adjective: 'süß',
    comparative: 'süßer',
    superlative: 'am süßesten',
    translations: {
      en: 'sweet',
      es: 'dulce'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'salzig',
    type: 'adjective',
    adjective: 'salzig',
    comparative: 'salziger',
    superlative: 'am salzigsten',
    translations: {
      en: 'salty',
      es: 'salado/a'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'bitter',
    type: 'adjective',
    adjective: 'bitter',
    comparative: 'bitterer',
    superlative: 'am bittersten',
    translations: {
      en: 'bitter',
      es: 'amargo/a'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'satt',
    type: 'adjective',
    adjective: 'satt',
    comparative: '—',
    superlative: '—',
    translations: {
      en: 'full / not hungry',
      es: 'lleno/a / satisfecho/a'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN]
  },
  {
    id: 'fantastisch',
    type: 'adjective',
    adjective: 'fantastisch',
    comparative: 'fantastischer',
    superlative: 'am fantastischsten',
    translations: {
      en: 'fantastic',
      es: 'fantástico/a'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'getrennt',
    type: 'adjective',
    adjective: 'getrennt',
    comparative: '—',
    superlative: '—',
    translations: {
      en: 'separate / separately',
      es: 'separado/a / por separado'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'einverstanden',
    type: 'adjective',
    adjective: 'einverstanden',
    comparative: '—',
    superlative: '—',
    translations: {
      en: 'agreed / in agreement',
      es: 'de acuerdo'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS]
  },
  {
    id: 'gemütlich',
    type: 'adjective',
    adjective: 'gemütlich',
    comparative: 'gemütlicher',
    superlative: 'am gemütlichsten',
    translations: {
      en: 'cosy / comfortable',
      es: 'acogedor/a'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.HOUSEHOLD, CATEGORIES.LEISURE, CATEGORIES.LOCATIONS]
  },
  {
    id: 'anstrengend',
    type: 'adjective',
    adjective: 'anstrengend',
    comparative: 'anstrengender',
    superlative: 'am anstrengendsten',
    translations: {
      en: 'strenuous / exhausting',
      es: 'agotador/a / exigente'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.HEALTH, CATEGORIES.LEISURE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL, CATEGORIES.WORK]
  },
  {
    id: 'hübsch',
    type: 'adjective',
    adjective: 'hübsch',
    comparative: 'hübscher',
    superlative: 'am hübschesten',
    translations: {
      en: 'pretty',
      es: 'bonito/a / guapo/a'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.CLOTHING]
  },
  {
    id: 'geeignet',
    type: 'adjective',
    adjective: 'geeignet',
    comparative: 'geeigneter',
    superlative: 'am geeignetsten',
    translations: {
      en: 'suitable',
      es: 'adecuado/a'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.CLOTHING, CATEGORIES.EDUCATION, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.SPORTS, CATEGORIES.TRAVEL, CATEGORIES.WORK]
  },
  {
    id: 'sportlich',
    type: 'adjective',
    adjective: 'sportlich',
    comparative: 'sportlicher',
    superlative: 'am sportlichsten',
    translations: {
      en: 'sporty / athletic',
      es: 'deportivo/a'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.LEISURE, CATEGORIES.PERSONAL_INFO, CATEGORIES.SPORTS]
  },
  {
    id: 'beliebt',
    type: 'adjective',
    adjective: 'beliebt',
    comparative: 'beliebter',
    superlative: 'am beliebtesten',
    translations: {
      en: 'popular',
      es: 'popular'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.LEISURE, CATEGORIES.SHOPPING, CATEGORIES.WORK]
  },
  {
    id: 'leer',
    type: 'adjective',
    adjective: 'leer',
    comparative: 'leerer',
    superlative: 'am leersten',
    translations: {
      en: 'empty / flat',
      es: 'vacío/a / descargado/a'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.LOCATIONS, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'unfreundlich',
    type: 'adjective',
    adjective: 'unfreundlich',
    comparative: 'unfreundlicher',
    superlative: 'am unfreundlichsten',
    translations: {
      en: 'unfriendly',
      es: 'antipático/a / poco amable'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PEOPLE, CATEGORIES.WORK]
  },
  {
    id: 'stolz',
    type: 'adjective',
    adjective: 'stolz',
    comparative: 'stolzer',
    superlative: 'am stolzesten',
    translations: {
      en: 'proud',
      es: 'orgulloso/a'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE, CATEGORIES.WORK]
  },
  {
    id: 'prima',
    type: 'adjective',
    adjective: 'prima',
    comparative: '—',
    superlative: '—',
    translations: {
      en: 'great / excellent',
      es: 'estupendo/a / excelente'
    },
    categories: [CATEGORIES.ABSTRACT]
  }
]
