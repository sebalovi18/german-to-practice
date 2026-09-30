import { CATEGORIES } from '@/data/categories'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

export const verbs: GermanVerb[] = [
  {
    id: 'abholen',
    type: 'verb',
    infinitive: 'ab|holen',
    preteritum: 'holte ab',
    perfekt: 'abgeholt',
    translations: {
      en: 'pick up',
      es: 'recoger'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'anrufen',
    type: 'verb',
    infinitive: 'an|rufen',
    preteritum: 'rief an',
    perfekt: 'angerufen',
    translations: {
      en: 'call',
      es: 'llamar por teléfono'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'arbeiten',
    type: 'verb',
    infinitive: 'arbeiten',
    preteritum: 'arbeitete',
    perfekt: 'gearbeitet',
    translations: {
      en: 'work',
      es: 'trabajar'
    },
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'aufräumen',
    type: 'verb',
    infinitive: 'auf|räumen',
    preteritum: 'räumte auf',
    perfekt: 'aufgeräumt',
    translations: {
      en: 'tidy up',
      es: 'ordenar'
    },
    categories: [CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'aufstehen',
    type: 'verb',
    infinitive: 'auf|stehen',
    preteritum: 'stand auf',
    perfekt: 'aufgestanden',
    translations: {
      en: 'get up',
      es: 'levantarse'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TIME]
  },
  {
    id: 'backen',
    type: 'verb',
    infinitive: 'backen',
    preteritum: 'backte',
    perfekt: 'gebacken',
    translations: {
      en: 'bake',
      es: 'hornear'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'bleiben',
    type: 'verb',
    infinitive: 'bleiben',
    preteritum: 'blieb',
    perfekt: 'geblieben',
    translations: {
      en: 'stay',
      es: 'quedarse'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
  },
  {
    id: 'brauchen',
    type: 'verb',
    infinitive: 'brauchen',
    preteritum: 'brauchte',
    perfekt: 'gebraucht',
    translations: {
      en: 'need',
      es: 'necesitar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'buchstabieren',
    type: 'verb',
    infinitive: 'buchstabieren',
    preteritum: 'buchstabierte',
    perfekt: 'buchstabiert',
    translations: {
      en: 'spell',
      es: 'deletrear'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'denken',
    type: 'verb',
    infinitive: 'denken',
    preteritum: 'dachte',
    perfekt: 'gedacht',
    translations: {
      en: 'think',
      es: 'pensar'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
  },
  {
    id: 'duschen',
    type: 'verb',
    infinitive: 'duschen',
    preteritum: 'duschte',
    perfekt: 'geduscht',
    translations: {
      en: 'shower',
      es: 'ducharse'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'einkaufen',
    type: 'verb',
    infinitive: 'ein|kaufen',
    preteritum: 'kaufte ein',
    perfekt: 'eingekauft',
    translations: {
      en: 'go shopping',
      es: 'ir de compras'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'essen',
    type: 'verb',
    infinitive: 'essen',
    preteritum: 'aß',
    perfekt: 'gegessen',
    translations: {
      en: 'eat',
      es: 'comer'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN]
  },
  {
    id: 'fahren',
    type: 'verb',
    infinitive: 'fahren',
    preteritum: 'fuhr',
    perfekt: 'gefahren',
    translations: {
      en: 'go by vehicle',
      es: 'ir en vehículo'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'fehlen',
    type: 'verb',
    infinitive: 'fehlen',
    preteritum: 'fehlte',
    perfekt: 'gefehlt',
    translations: {
      en: 'be missing',
      es: 'faltar'
    },
    categories: [CATEGORIES.HEALTH, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'fernsehen',
    type: 'verb',
    infinitive: 'fern|sehen',
    preteritum: 'sah fern',
    perfekt: 'ferngesehen',
    translations: {
      en: 'watch TV',
      es: 'ver la TV'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LEISURE, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'finden',
    type: 'verb',
    infinitive: 'finden',
    preteritum: 'fand',
    perfekt: 'gefunden',
    translations: {
      en: 'find',
      es: 'encontrar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'fotografieren',
    type: 'verb',
    infinitive: 'fotografieren',
    preteritum: 'fotografierte',
    perfekt: 'fotografiert',
    translations: {
      en: 'photograph',
      es: 'fotografiar'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
  },
  {
    id: 'frühstücken',
    type: 'verb',
    infinitive: 'frühstücken',
    preteritum: 'frühstückte',
    perfekt: 'gefrühstückt',
    translations: {
      en: 'have breakfast',
      es: 'desayunar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'geben',
    type: 'verb',
    infinitive: 'geben',
    preteritum: 'gab',
    perfekt: 'gegeben',
    translations: {
      en: 'give',
      es: 'dar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'gehen',
    type: 'verb',
    infinitive: 'gehen',
    preteritum: 'ging',
    perfekt: 'gegangen',
    translations: {
      en: 'go',
      es: 'ir'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'spazierengehen',
    type: 'verb',
    infinitive: 'spazieren gehen',
    preteritum: 'ging spazieren',
    perfekt: 'spazieren gegangen',
    translations: {
      en: 'go for a walk',
      es: 'ir a pasear'
    },
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS, CATEGORIES.TRANSPORTATION]
  },
  {
    id: 'gewinnen',
    type: 'verb',
    infinitive: 'gewinnen',
    preteritum: 'gewann',
    perfekt: 'gewonnen',
    translations: {
      en: 'win',
      es: 'ganar'
    },
    categories: [CATEGORIES.SPORTS]
  },
  {
    id: 'glauben',
    type: 'verb',
    infinitive: 'glauben',
    preteritum: 'glaubte',
    perfekt: 'geglaubt',
    translations: {
      en: 'believe',
      es: 'creer'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
  },
  {
    id: 'haben',
    type: 'verb',
    infinitive: 'haben',
    preteritum: 'hatte',
    perfekt: 'gehabt',
    translations: {
      en: 'have',
      es: 'tener'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'hassen',
    type: 'verb',
    infinitive: 'hassen',
    preteritum: 'hasste',
    perfekt: 'gehasst',
    translations: {
      en: 'hate',
      es: 'odiar'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'heiraten',
    type: 'verb',
    infinitive: 'heiraten',
    preteritum: 'heiratete',
    perfekt: 'geheiratet',
    translations: {
      en: 'marry',
      es: 'casarse'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'heißen',
    type: 'verb',
    infinitive: 'heißen',
    preteritum: 'hieß',
    perfekt: 'geheißen',
    translations: {
      en: 'be called',
      es: 'llamarse'
    },
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'hören',
    type: 'verb',
    infinitive: 'hören',
    preteritum: 'hörte',
    perfekt: 'gehört',
    translations: {
      en: 'hear',
      es: 'oír'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.MUSIC]
  },
  {
    id: 'kaufen',
    type: 'verb',
    infinitive: 'kaufen',
    preteritum: 'kaufte',
    perfekt: 'gekauft',
    translations: {
      en: 'buy',
      es: 'comprar'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'kochen',
    type: 'verb',
    infinitive: 'kochen',
    preteritum: 'kochte',
    perfekt: 'gekocht',
    translations: {
      en: 'cook',
      es: 'cocinar'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
  },
  {
    id: 'kommen',
    type: 'verb',
    infinitive: 'kommen',
    preteritum: 'kam',
    perfekt: 'gekommen',
    translations: {
      en: 'come',
      es: 'venir'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'können',
    type: 'verb',
    infinitive: 'können',
    preteritum: 'konnte',
    perfekt: 'gekonnt',
    translations: {
      en: 'can',
      es: 'poder'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'kosten',
    type: 'verb',
    infinitive: 'kosten',
    preteritum: 'kostete',
    perfekt: 'gekostet',
    translations: {
      en: 'cost',
      es: 'costar'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
  },
  {
    id: 'leben',
    type: 'verb',
    infinitive: 'leben',
    preteritum: 'lebte',
    perfekt: 'gelebt',
    translations: {
      en: 'live',
      es: 'vivir'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'lernen',
    type: 'verb',
    infinitive: 'lernen',
    preteritum: 'lernte',
    perfekt: 'gelernt',
    translations: {
      en: 'learn',
      es: 'aprender'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'lesen',
    type: 'verb',
    infinitive: 'lesen',
    preteritum: 'las',
    perfekt: 'gelesen',
    translations: {
      en: 'read',
      es: 'leer'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'lieben',
    type: 'verb',
    infinitive: 'lieben',
    preteritum: 'liebte',
    perfekt: 'geliebt',
    translations: {
      en: 'love',
      es: 'amar'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'machen',
    type: 'verb',
    infinitive: 'machen',
    preteritum: 'machte',
    perfekt: 'gemacht',
    translations: {
      en: 'do',
      es: 'hacer'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'malen',
    type: 'verb',
    infinitive: 'malen',
    preteritum: 'malte',
    perfekt: 'gemalt',
    translations: {
      en: 'paint',
      es: 'pintar'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
  },
  {
    id: 'möchten',
    type: 'verb',
    infinitive: 'möchten',
    preteritum: 'wollte',
    perfekt: 'gewollt',
    translations: {
      en: 'would like',
      es: 'querer'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
  },
  {
    id: 'mögen',
    type: 'verb',
    infinitive: 'mögen',
    preteritum: 'mochte',
    perfekt: 'gemocht',
    translations: {
      en: 'like',
      es: 'gustar'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
  },
  {
    id: 'nähen',
    type: 'verb',
    infinitive: 'nähen',
    preteritum: 'nähte',
    perfekt: 'genäht',
    translations: {
      en: 'sew',
      es: 'coser'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.CLOTHING, CATEGORIES.LEISURE]
  },
  {
    id: 'nehmen',
    type: 'verb',
    infinitive: 'nehmen',
    preteritum: 'nahm',
    perfekt: 'genommen',
    translations: {
      en: 'take',
      es: 'tomar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'putzen',
    type: 'verb',
    infinitive: 'putzen',
    preteritum: 'putzte',
    perfekt: 'geputzt',
    translations: {
      en: 'clean',
      es: 'limpiar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.HEALTH]
  },
  {
    id: 'rausgehen',
    type: 'verb',
    infinitive: 'raus|gehen',
    preteritum: 'ging raus',
    perfekt: 'rausgegangen',
    translations: {
      en: 'go out',
      es: 'salir'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION]
  },
  {
    id: 'rechnen',
    type: 'verb',
    infinitive: 'rechnen',
    preteritum: 'rechnete',
    perfekt: 'gerechnet',
    translations: {
      en: 'calculate',
      es: 'calcular'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.NUMBERS]
  },
  {
    id: 'regnen',
    type: 'verb',
    infinitive: 'regnen',
    preteritum: 'regnete',
    perfekt: 'geregnet',
    translations: {
      en: 'rain',
      es: 'llover'
    },
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'reisen',
    type: 'verb',
    infinitive: 'reisen',
    preteritum: 'reiste',
    perfekt: 'gereist',
    translations: {
      en: 'travel',
      es: 'viajar'
    },
    categories: [CATEGORIES.LEISURE, CATEGORIES.TRAVEL]
  },
  {
    id: 'sagen',
    type: 'verb',
    infinitive: 'sagen',
    preteritum: 'sagte',
    perfekt: 'gesagt',
    translations: {
      en: 'say',
      es: 'decir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'schauen',
    type: 'verb',
    infinitive: 'schauen',
    preteritum: 'schaute',
    perfekt: 'geschaut',
    translations: {
      en: 'look',
      es: 'mirar'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
  },
  {
    id: 'scheinen',
    type: 'verb',
    infinitive: 'scheinen',
    preteritum: 'schien',
    perfekt: 'geschienen',
    translations: {
      en: 'shine',
      es: 'brillar'
    },
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'schlafen',
    type: 'verb',
    infinitive: 'schlafen',
    preteritum: 'schlief',
    perfekt: 'geschlafen',
    translations: {
      en: 'sleep',
      es: 'dormir'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD, CATEGORIES.TIME]
  },
  {
    id: 'schneien',
    type: 'verb',
    infinitive: 'schneien',
    preteritum: 'schneite',
    perfekt: 'geschneit',
    translations: {
      en: 'snow',
      es: 'nevar'
    },
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
  },
  {
    id: 'schwimmen',
    type: 'verb',
    infinitive: 'schwimmen',
    preteritum: 'schwamm',
    perfekt: 'geschwommen',
    translations: {
      en: 'swim',
      es: 'nadar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.LEISURE, CATEGORIES.SPORTS]
  },
  {
    id: 'sein',
    type: 'verb',
    infinitive: 'sein',
    preteritum: 'war',
    perfekt: 'gewesen',
    translations: {
      en: 'be',
      es: 'ser/estar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'singen',
    type: 'verb',
    infinitive: 'singen',
    preteritum: 'sang',
    perfekt: 'gesungen',
    translations: {
      en: 'sing',
      es: 'cantar'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
  },
  {
    id: 'spielen',
    type: 'verb',
    infinitive: 'spielen',
    preteritum: 'spielte',
    perfekt: 'gespielt',
    translations: {
      en: 'play',
      es: 'jugar'
    },
    categories: [CATEGORIES.LEISURE, CATEGORIES.MUSIC, CATEGORIES.SPORTS]
  },
  {
    id: 'sprechen',
    type: 'verb',
    infinitive: 'sprechen',
    preteritum: 'sprach',
    perfekt: 'gesprochen',
    translations: {
      en: 'speak',
      es: 'hablar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'stimmen',
    type: 'verb',
    infinitive: 'stimmen',
    preteritum: 'stimmte',
    perfekt: 'gestimmt',
    translations: {
      en: 'be correct',
      es: 'ser correcto'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'studieren',
    type: 'verb',
    infinitive: 'studieren',
    preteritum: 'studierte',
    perfekt: 'studiert',
    translations: {
      en: 'study',
      es: 'estudiar'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PERSONAL_INFO, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'suchen',
    type: 'verb',
    infinitive: 'suchen',
    preteritum: 'suchte',
    perfekt: 'gesucht',
    translations: {
      en: 'look for',
      es: 'buscar'
    },
    categories: [CATEGORIES.SHOPPING]
  },
  {
    id: 'tanzen',
    type: 'verb',
    infinitive: 'tanzen',
    preteritum: 'tanzte',
    perfekt: 'getanzt',
    translations: {
      en: 'dance',
      es: 'bailar'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
  },
  {
    id: 'telefonieren',
    type: 'verb',
    infinitive: 'telefonieren',
    preteritum: 'telefonierte',
    perfekt: 'telefoniert',
    translations: {
      en: 'talk on the phone',
      es: 'hablar por teléfono'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'trainieren',
    type: 'verb',
    infinitive: 'trainieren',
    preteritum: 'trainierte',
    perfekt: 'trainiert',
    translations: {
      en: 'train',
      es: 'entrenar'
    },
    categories: [CATEGORIES.HEALTH, CATEGORIES.SPORTS]
  },
  {
    id: 'treffen',
    type: 'verb',
    infinitive: 'treffen',
    preteritum: 'traf',
    perfekt: 'getroffen',
    translations: {
      en: 'meet',
      es: 'quedar con alguien'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.LEISURE, CATEGORIES.PEOPLE]
  },
  {
    id: 'trinken',
    type: 'verb',
    infinitive: 'trinken',
    preteritum: 'trank',
    perfekt: 'getrunken',
    translations: {
      en: 'drink',
      es: 'beber'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.DRINK]
  },
  {
    id: 'werden',
    type: 'verb',
    infinitive: 'werden',
    preteritum: 'wurde',
    perfekt: 'geworden',
    translations: {
      en: 'become',
      es: 'volverse'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'wohnen',
    type: 'verb',
    infinitive: 'wohnen',
    preteritum: 'wohnte',
    perfekt: 'gewohnt',
    translations: {
      en: 'reside',
      es: 'vivir'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'wollen',
    type: 'verb',
    infinitive: 'wollen',
    preteritum: 'wollte',
    perfekt: 'gewollt',
    translations: {
      en: 'want',
      es: 'querer'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'anfangen',
    type: 'verb',
    infinitive: 'an|fangen',
    preteritum: 'fing an',
    perfekt: 'angefangen',
    translations: {
      en: 'begin',
      es: 'empezar'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.DATES, CATEGORIES.TIME]
  },
  {
    id: 'ankommen',
    type: 'verb',
    infinitive: 'an|kommen',
    preteritum: 'kam an',
    perfekt: 'angekommen',
    translations: {
      en: 'arrive',
      es: 'llegar'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TIME, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'aufmachen',
    type: 'verb',
    infinitive: 'auf|machen',
    preteritum: 'machte auf',
    perfekt: 'aufgemacht',
    translations: {
      en: 'open',
      es: 'abrir'
    },
    categories: [CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'aussteigen',
    type: 'verb',
    infinitive: 'aus|steigen',
    preteritum: 'stieg aus',
    perfekt: 'ausgestiegen',
    translations: {
      en: 'get off / exit',
      es: 'bajarse / salir'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'bekommen',
    type: 'verb',
    infinitive: 'bekommen',
    preteritum: 'bekam',
    perfekt: 'bekommen',
    translations: {
      en: 'get / receive',
      es: 'recibir'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.SHOPPING]
  },
  {
    id: 'bestellen',
    type: 'verb',
    infinitive: 'bestellen',
    preteritum: 'bestellte',
    perfekt: 'bestellt',
    translations: {
      en: 'order',
      es: 'pedir'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'besuchen',
    type: 'verb',
    infinitive: 'besuchen',
    preteritum: 'besuchte',
    perfekt: 'besucht',
    translations: {
      en: 'visit',
      es: 'visitar'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.LOCATIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'bezahlen',
    type: 'verb',
    infinitive: 'bezahlen',
    preteritum: 'bezahlte',
    perfekt: 'bezahlt',
    translations: {
      en: 'pay',
      es: 'pagar'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
  },
  {
    id: 'bringen',
    type: 'verb',
    infinitive: 'bringen',
    preteritum: 'brachte',
    perfekt: 'gebracht',
    translations: {
      en: 'bring',
      es: 'traer'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'einladen',
    type: 'verb',
    infinitive: 'ein|laden',
    preteritum: 'lud ein',
    perfekt: 'eingeladen',
    translations: {
      en: 'invite',
      es: 'invitar'
    },
    categories: [CATEGORIES.FAMILY]
  },
  {
    id: 'einschlafen',
    type: 'verb',
    infinitive: 'ein|schlafen',
    preteritum: 'schlief ein',
    perfekt: 'eingeschlafen',
    translations: {
      en: 'fall asleep',
      es: 'quedarse dormido'
    },
    categories: [CATEGORIES.TIME]
  },
  {
    id: 'einsteigen',
    type: 'verb',
    infinitive: 'ein|steigen',
    preteritum: 'stieg ein',
    perfekt: 'eingestiegen',
    translations: {
      en: 'get in / board',
      es: 'subirse / entrar'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'empfehlen',
    type: 'verb',
    infinitive: 'empfehlen',
    preteritum: 'empfahl',
    perfekt: 'empfohlen',
    translations: {
      en: 'recommend',
      es: 'recomendar'
    },
    categories: [CATEGORIES.SHOPPING]
  },
  {
    id: 'entschuldigen',
    type: 'verb',
    infinitive: 'entschuldigen',
    preteritum: 'entschuldigte',
    perfekt: 'entschuldigt',
    translations: {
      en: 'apologize / excuse',
      es: 'disculparse / disculpar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS]
  },
  {
    id: 'erzählen',
    type: 'verb',
    infinitive: 'erzählen',
    preteritum: 'erzählte',
    perfekt: 'erzählt',
    translations: {
      en: 'tell / narrate',
      es: 'contar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'fliegen',
    type: 'verb',
    infinitive: 'fliegen',
    preteritum: 'flog',
    perfekt: 'geflogen',
    translations: {
      en: 'fly',
      es: 'volar'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'gefallen',
    type: 'verb',
    infinitive: 'gefallen',
    preteritum: 'gefiel',
    perfekt: 'gefallen',
    translations: {
      en: 'please / be liked',
      es: 'gustar'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
  },
  {
    id: 'joggen',
    type: 'verb',
    infinitive: 'joggen',
    preteritum: 'joggte',
    perfekt: 'gejoggt',
    translations: {
      en: 'jog',
      es: 'hacer jogging'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.LEISURE, CATEGORIES.SPORTS]
  },
  {
    id: 'kennen',
    type: 'verb',
    infinitive: 'kennen',
    preteritum: 'kannte',
    perfekt: 'gekannt',
    translations: {
      en: 'know',
      es: 'conocer'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PEOPLE]
  },
  {
    id: 'laufen',
    type: 'verb',
    infinitive: 'laufen',
    preteritum: 'lief',
    perfekt: 'gelaufen',
    translations: {
      en: 'run / walk',
      es: 'correr / andar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.SPORTS, CATEGORIES.TRANSPORTATION]
  },
  {
    id: 'mitbringen',
    type: 'verb',
    infinitive: 'mit|bringen',
    preteritum: 'brachte mit',
    perfekt: 'mitgebracht',
    translations: {
      en: 'bring along',
      es: 'traer'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'notieren',
    type: 'verb',
    infinitive: 'notieren',
    preteritum: 'notierte',
    perfekt: 'notiert',
    translations: {
      en: 'note down',
      es: 'anotar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'schreiben',
    type: 'verb',
    infinitive: 'schreiben',
    preteritum: 'schrieb',
    perfekt: 'geschrieben',
    translations: {
      en: 'write',
      es: 'escribir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'sehen',
    type: 'verb',
    infinitive: 'sehen',
    preteritum: 'sah',
    perfekt: 'gesehen',
    translations: {
      en: 'see',
      es: 'ver'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.COMMUNICATION]
  },
  {
    id: 'sparen',
    type: 'verb',
    infinitive: 'sparen',
    preteritum: 'sparte',
    perfekt: 'gespart',
    translations: {
      en: 'save',
      es: 'ahorrar'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
  },
  {
    id: 'tun',
    type: 'verb',
    infinitive: 'tun',
    preteritum: 'tat',
    perfekt: 'getan',
    translations: {
      en: 'do',
      es: 'hacer'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'umziehen',
    type: 'verb',
    infinitive: 'um|ziehen',
    preteritum: 'zog um',
    perfekt: 'umgezogen',
    translations: {
      en: 'move house / change clothes',
      es: 'mudarse / cambiarse de ropa'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
  },
  {
    id: 'vergessen',
    type: 'verb',
    infinitive: 'vergessen',
    preteritum: 'vergaß',
    perfekt: 'vergessen',
    translations: {
      en: 'forget',
      es: 'olvidar'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
  },
  {
    id: 'verkaufen',
    type: 'verb',
    infinitive: 'verkaufen',
    preteritum: 'verkaufte',
    perfekt: 'verkauft',
    translations: {
      en: 'sell',
      es: 'vender'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'verlassen',
    type: 'verb',
    infinitive: 'verlassen',
    preteritum: 'verließ',
    perfekt: 'verlassen',
    translations: {
      en: 'leave',
      es: 'dejar / abandonar'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
  },
  {
    id: 'verlieren',
    type: 'verb',
    infinitive: 'verlieren',
    preteritum: 'verlor',
    perfekt: 'verloren',
    translations: {
      en: 'lose',
      es: 'perder'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.SHOPPING]
  },
  {
    id: 'versuchen',
    type: 'verb',
    infinitive: 'versuchen',
    preteritum: 'versuchte',
    perfekt: 'versucht',
    translations: {
      en: 'try',
      es: 'intentar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'waschen',
    type: 'verb',
    infinitive: 'waschen',
    preteritum: 'wusch',
    perfekt: 'gewaschen',
    translations: {
      en: 'wash',
      es: 'lavar'
    },
    categories: [CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'wissen',
    type: 'verb',
    infinitive: 'wissen',
    preteritum: 'wusste',
    perfekt: 'gewusst',
    translations: {
      en: 'know',
      es: 'saber'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'zumachen',
    type: 'verb',
    infinitive: 'zu|machen',
    preteritum: 'machte zu',
    perfekt: 'zugemacht',
    translations: {
      en: 'close',
      es: 'cerrar'
    },
    categories: [CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'abfahren',
    type: 'verb',
    infinitive: 'ab|fahren',
    preteritum: 'fuhr ab',
    perfekt: 'abgefahren',
    translations: {
      en: 'depart',
      es: 'salir'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'ansehen',
    type: 'verb',
    infinitive: 'an|sehen',
    preteritum: 'sah an',
    perfekt: 'angesehen',
    translations: {
      en: 'look at',
      es: 'mirar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.LEISURE]
  },
  {
    id: 'beschreiben',
    type: 'verb',
    infinitive: 'beschreiben',
    preteritum: 'beschrieb',
    perfekt: 'beschrieben',
    translations: {
      en: 'describe',
      es: 'describir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'erklären',
    type: 'verb',
    infinitive: 'erklären',
    preteritum: 'erklärte',
    perfekt: 'erklärt',
    translations: {
      en: 'explain',
      es: 'explicar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'fragen',
    type: 'verb',
    infinitive: 'fragen',
    preteritum: 'fragte',
    perfekt: 'gefragt',
    translations: {
      en: 'ask',
      es: 'preguntar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'funktionieren',
    type: 'verb',
    infinitive: 'funktionieren',
    preteritum: 'funktionierte',
    perfekt: 'funktioniert',
    translations: {
      en: 'function',
      es: 'funcionar'
    },
    categories: [CATEGORIES.PROFESSIONS, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'kommentieren',
    type: 'verb',
    infinitive: 'kommentieren',
    preteritum: 'kommentierte',
    perfekt: 'kommentiert',
    translations: {
      en: 'comment',
      es: 'comentar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'mitmachen',
    type: 'verb',
    infinitive: 'mit|machen',
    preteritum: 'machte mit',
    perfekt: 'mitgemacht',
    translations: {
      en: 'participate',
      es: 'participar'
    },
    categories: [CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'reparieren',
    type: 'verb',
    infinitive: 'reparieren',
    preteritum: 'reparierte',
    perfekt: 'repariert',
    translations: {
      en: 'repair',
      es: 'reparar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'umsteigen',
    type: 'verb',
    infinitive: 'um|steigen',
    preteritum: 'stieg um',
    perfekt: 'umgestiegen',
    translations: {
      en: 'change (transport)',
      es: 'hacer transbordo'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'leidtun',
    type: 'verb',
    infinitive: 'leid|tun',
    preteritum: 'tat leid',
    perfekt: 'leidgetan',
    translations: {
      en: 'feel / regret',
      es: 'sentir / lamentar'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'antworten',
    type: 'verb',
    infinitive: 'antworten',
    preteritum: 'antwortete',
    perfekt: 'geantwortet',
    translations: {
      en: 'reply',
      es: 'responder'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'danken',
    type: 'verb',
    infinitive: 'danken',
    preteritum: 'dankte',
    perfekt: 'gedankt',
    translations: {
      en: 'give thanks',
      es: 'dar las gracias'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PEOPLE]
  },
  {
    id: 'gehören',
    type: 'verb',
    infinitive: 'gehören',
    preteritum: 'gehörte',
    perfekt: 'gehört',
    translations: {
      en: 'belong',
      es: 'pertenecer'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PEOPLE]
  },
  {
    id: 'helfen',
    type: 'verb',
    infinitive: 'helfen',
    preteritum: 'half',
    perfekt: 'geholfen',
    translations: {
      en: 'help',
      es: 'ayudar'
    },
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'vermieten',
    type: 'verb',
    infinitive: 'vermieten',
    preteritum: 'vermietete',
    perfekt: 'vermietet',
    translations: {
      en: 'rent',
      es: 'alquilar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.MONEY, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'zahlen',
    type: 'verb',
    infinitive: 'zahlen',
    preteritum: 'zahlte',
    perfekt: 'gezahlt',
    translations: {
      en: 'pay',
      es: 'pagar'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
  },
  {
    id: 'ausdrucken',
    type: 'verb',
    infinitive: 'aus|drucken',
    preteritum: 'druckte aus',
    perfekt: 'ausgedruckt',
    translations: {
      en: 'print',
      es: 'imprimir'
    },
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'ausfüllen',
    type: 'verb',
    infinitive: 'aus|füllen',
    preteritum: 'füllte aus',
    perfekt: 'ausgefüllt',
    translations: {
      en: 'fill',
      es: 'rellenar'
    },
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'müssen',
    type: 'verb',
    infinitive: 'müssen',
    preteritum: 'musste',
    perfekt: 'gemusst',
    translations: {
      en: 'have to / duty',
      es: 'tener que / deber'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION]
  },
  {
    id: 'schicken',
    type: 'verb',
    infinitive: 'schicken',
    preteritum: 'schickte',
    perfekt: 'geschickt',
    translations: {
      en: 'send',
      es: 'enviar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'unterschreiben',
    type: 'verb',
    infinitive: 'unterschreiben',
    preteritum: 'unterschrieb',
    perfekt: 'unterschrieben',
    translations: {
      en: 'sign',
      es: 'firmar'
    },
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'verstehen',
    type: 'verb',
    infinitive: 'verstehen',
    preteritum: 'verstand',
    perfekt: 'verstanden',
    translations: {
      en: 'understand',
      es: 'entender'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'dürfen',
    type: 'verb',
    infinitive: 'dürfen',
    preteritum: 'durfte',
    perfekt: 'gedurft',
    translations: {
      en: 'be able / have permission',
      es: 'poder / tener permiso'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION]
  },
  {
    id: 'rauchen',
    type: 'verb',
    infinitive: 'rauchen',
    preteritum: 'rauchte',
    perfekt: 'geraucht',
    translations: {
      en: 'smoke',
      es: 'fumar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH]
  },
  {
    id: 'erlauben',
    type: 'verb',
    infinitive: 'erlauben',
    preteritum: 'erlaubte',
    perfekt: 'erlaubt',
    translations: {
      en: 'allow',
      es: 'permitir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.WORK]
  },
  {
    id: 'aufpassen',
    type: 'verb',
    infinitive: 'auf|passen',
    preteritum: 'passte auf',
    perfekt: 'aufgepasst',
    translations: {
      en: 'pay attention / be careful',
      es: 'prestar atención / tener cuidado'
    },
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE]
  },
  {
    id: 'grillen',
    type: 'verb',
    infinitive: 'grillen',
    preteritum: 'grillte',
    perfekt: 'gegrillt',
    translations: {
      en: 'make a barbecue',
      es: 'hacer una barbacoa'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN, CATEGORIES.LEISURE]
  },
  {
    id: 'lachen',
    type: 'verb',
    infinitive: 'lachen',
    preteritum: 'lachte',
    perfekt: 'gelacht',
    translations: {
      en: 'laugh',
      es: 'reír'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS, CATEGORIES.LEISURE, CATEGORIES.PEOPLE]
  },
  {
    id: 'schließen',
    type: 'verb',
    infinitive: 'schließen',
    preteritum: 'schloss',
    perfekt: 'geschlossen',
    translations: {
      en: 'close',
      es: 'cerrar'
    },
    categories: [CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'tragen',
    type: 'verb',
    infinitive: 'tragen',
    preteritum: 'trug',
    perfekt: 'getragen',
    translations: {
      en: 'carry',
      es: 'llevar'
    },
    categories: [CATEGORIES.CLOTHING]
  },
  {
    id: 'baden',
    type: 'verb',
    infinitive: 'baden',
    preteritum: 'badete',
    perfekt: 'gebadet',
    translations: {
      en: 'bathe',
      es: 'bañarse'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH]
  },
  {
    id: 'wandern',
    type: 'verb',
    infinitive: 'wandern',
    preteritum: 'wanderte',
    perfekt: 'gewandert',
    translations: {
      en: 'go hiking',
      es: 'hacer senderismo'
    },
    categories: [CATEGORIES.LEISURE, CATEGORIES.NATURE, CATEGORIES.SPORTS]
  },
  {
    id: 'beantragen',
    type: 'verb',
    infinitive: 'beantragen',
    preteritum: 'beantragte',
    perfekt: 'beantragt',
    translations: {
      en: 'request',
      es: 'solicitar'
    },
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.PROFESSIONS, CATEGORIES.TRAVEL, CATEGORIES.WORK]
  },
  {
    id: 'bewegen',
    type: 'verb',
    infinitive: 'bewegen',
    preteritum: 'bewegte',
    perfekt: 'bewegt',
    translations: {
      en: 'move',
      es: 'mover'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.SPORTS]
  },
  {
    id: 'zeigen',
    type: 'verb',
    infinitive: 'zeigen',
    preteritum: 'zeigte',
    perfekt: 'gezeigt',
    translations: {
      en: 'show',
      es: 'mostrar'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'anmachen',
    type: 'verb',
    infinitive: 'an|machen',
    preteritum: 'machte an',
    perfekt: 'angemacht',
    translations: {
      en: 'turn on',
      es: 'encender'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'ausmachen',
    type: 'verb',
    infinitive: 'aus|machen',
    preteritum: 'machte aus',
    perfekt: 'ausgemacht',
    translations: {
      en: 'turn off',
      es: 'apagar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'holen',
    type: 'verb',
    infinitive: 'holen',
    preteritum: 'holte',
    perfekt: 'geholt',
    translations: {
      en: 'fetch / fetch',
      es: 'ir a buscar / traer'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
  },
  {
    id: 'öffnen',
    type: 'verb',
    infinitive: 'öffnen',
    preteritum: 'öffnete',
    perfekt: 'geöffnet',
    translations: {
      en: 'open',
      es: 'abrir'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
  },
  {
    id: 'wehtun',
    type: 'verb',
    infinitive: 'weh|tun',
    preteritum: 'tat weh',
    perfekt: 'wehgetan',
    translations: {
      en: 'hurt',
      es: 'doler'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH]
  },
  {
    id: 'wünschen',
    type: 'verb',
    infinitive: 'wünschen',
    preteritum: 'wünschte',
    perfekt: 'gewünscht',
    translations: {
      en: 'wish',
      es: 'desear'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'halten',
    type: 'verb',
    infinitive: 'halten',
    preteritum: 'hielt',
    perfekt: 'gehalten',
    translations: {
      en: 'keep / sustain',
      es: 'mantener / sostener'
    },
    categories: [CATEGORIES.SPORTS]
  },
  {
    id: 'sollen',
    type: 'verb',
    infinitive: 'sollen',
    preteritum: 'sollte',
    perfekt: 'gesollt',
    translations: {
      en: 'duty',
      es: 'deber'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION]
  },
  {
    id: 'kühlen',
    type: 'verb',
    infinitive: 'kühlen',
    preteritum: 'kühlte',
    perfekt: 'gekühlt',
    translations: {
      en: 'cool',
      es: 'enfriar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN, CATEGORIES.WEATHER]
  },
  {
    id: 'sitzen',
    type: 'verb',
    infinitive: 'sitzen',
    preteritum: 'saß',
    perfekt: 'gesessen',
    translations: {
      en: 'be sitting',
      es: 'estar sentado/a'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'drücken',
    type: 'verb',
    infinitive: 'drücken',
    preteritum: 'drückte',
    perfekt: 'gedrückt',
    translations: {
      en: 'press',
      es: 'presionar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'liegen',
    type: 'verb',
    infinitive: 'liegen',
    preteritum: 'lag',
    perfekt: 'gelegen',
    translations: {
      en: 'be lying down',
      es: 'estar tumbado/a'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'stören',
    type: 'verb',
    infinitive: 'stören',
    preteritum: 'störte',
    perfekt: 'gestört',
    translations: {
      en: 'bother',
      es: 'molestar'
    },
    categories: [CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD]
  },
  {
    id: 'krankschreiben',
    type: 'verb',
    infinitive: 'krank|schreiben',
    preteritum: 'schrieb krank',
    perfekt: 'krankgeschrieben',
    translations: {
      en: 'give medical leave',
      es: 'dar la baja médica'
    },
    categories: [CATEGORIES.HEALTH, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'informieren',
    type: 'verb',
    infinitive: 'informieren',
    preteritum: 'informierte',
    perfekt: 'informiert',
    translations: {
      en: 'inform',
      es: 'informar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'anziehen',
    type: 'verb',
    infinitive: 'an|ziehen',
    preteritum: 'zog an',
    perfekt: 'angezogen',
    translations: {
      en: 'put on/dress',
      es: 'ponerse / vestir'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.HEALTH, CATEGORIES.HOUSEHOLD, CATEGORIES.PEOPLE]
  },
  {
    id: 'beginnen',
    type: 'verb',
    infinitive: 'beginnen',
    preteritum: 'begann',
    perfekt: 'begonnen',
    translations: {
      en: 'start',
      es: 'comenzar'
    },
    categories: [CATEGORIES.DATES, CATEGORIES.PROFESSIONS, CATEGORIES.TIME, CATEGORIES.WORK]
  },
  {
    id: 'bitten',
    type: 'verb',
    infinitive: 'bitten',
    preteritum: 'bat',
    perfekt: 'gebeten',
    translations: {
      en: 'ask / beg',
      es: 'pedir / rogar'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'mitkommen',
    type: 'verb',
    infinitive: 'mit|kommen',
    preteritum: 'kam mit',
    perfekt: 'mitgekommen',
    translations: {
      en: 'come with someone',
      es: 'venir con alguien'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'aussehen',
    type: 'verb',
    infinitive: 'aus|sehen',
    preteritum: 'sah aus',
    perfekt: 'ausgesehen',
    translations: {
      en: 'seem / have appearance',
      es: 'parecer / tener aspecto'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.CLOTHING, CATEGORIES.PEOPLE]
  },
  {
    id: 'ausgeben',
    type: 'verb',
    infinitive: 'aus|geben',
    preteritum: 'gab aus',
    perfekt: 'ausgegeben',
    translations: {
      en: 'spend',
      es: 'gastar'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.SHOPPING]
  },
  {
    id: 'warten',
    type: 'verb',
    infinitive: 'warten',
    preteritum: 'wartete',
    perfekt: 'gewartet',
    translations: {
      en: 'wait',
      es: 'esperar'
    },
    categories: [CATEGORIES.TIME]
  },
  {
    id: 'meinen',
    type: 'verb',
    infinitive: 'meinen',
    preteritum: 'meinte',
    perfekt: 'gemeint',
    translations: {
      en: 'opine / want to say',
      es: 'opinar / querer decir'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'ausfallen',
    type: 'verb',
    infinitive: 'aus|fallen',
    preteritum: 'fiel aus',
    perfekt: 'ausgefallen',
    translations: {
      en: 'cancel',
      es: 'cancelarse'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.PROFESSIONS, CATEGORIES.TIME, CATEGORIES.WORK]
  },
  {
    id: 'hoffen',
    type: 'verb',
    infinitive: 'hoffen',
    preteritum: 'hoffte',
    perfekt: 'gehofft',
    translations: {
      en: 'wait/hope',
      es: 'esperar / tener esperanza'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.HEALTH]
  },
  {
    id: 'eingeben',
    type: 'verb',
    infinitive: 'ein|geben',
    preteritum: 'gab ein',
    perfekt: 'eingegeben',
    translations: {
      en: 'introduce',
      es: 'introducir'
    },
    categories: [CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'versprechen',
    type: 'verb',
    infinitive: 'versprechen',
    preteritum: 'versprach',
    perfekt: 'versprochen',
    translations: {
      en: 'promise',
      es: 'prometer'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EMOTIONS]
  },
  {
    id: 'buchen',
    type: 'verb',
    infinitive: 'buchen',
    preteritum: 'buchte',
    perfekt: 'gebucht',
    translations: {
      en: 'reserve',
      es: 'reservar'
    },
    categories: [CATEGORIES.MONEY, CATEGORIES.TRAVEL]
  },
  {
    id: 'herunterladen',
    type: 'verb',
    infinitive: 'herunter|laden',
    preteritum: 'lud herunter',
    perfekt: 'heruntergeladen',
    translations: {
      en: 'download',
      es: 'descargar'
    },
    categories: [CATEGORIES.PROFESSIONS, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'installieren',
    type: 'verb',
    infinitive: 'installieren',
    preteritum: 'installierte',
    perfekt: 'installiert',
    translations: {
      en: 'install',
      es: 'instalar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.PROFESSIONS, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'speichern',
    type: 'verb',
    infinitive: 'speichern',
    preteritum: 'speicherte',
    perfekt: 'gespeichert',
    translations: {
      en: 'save',
      es: 'guardar'
    },
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.PROFESSIONS, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'schneiden',
    type: 'verb',
    infinitive: 'schneiden',
    preteritum: 'schnitt',
    perfekt: 'geschnitten',
    translations: {
      en: 'cut',
      es: 'cortar'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN]
  },
  {
    id: 'feiern',
    type: 'verb',
    infinitive: 'feiern',
    preteritum: 'feierte',
    perfekt: 'gefeiert',
    translations: {
      en: 'celebrate',
      es: 'celebrar'
    },
    categories: [CATEGORIES.LEISURE]
  },
  {
    id: 'benutzen',
    type: 'verb',
    infinitive: 'benutzen',
    preteritum: 'benutzte',
    perfekt: 'benutzt',
    translations: {
      en: 'use',
      es: 'usar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.PROFESSIONS, CATEGORIES.TECHNOLOGY, CATEGORIES.WORK]
  },
  {
    id: 'passen',
    type: 'verb',
    infinitive: 'passen',
    preteritum: 'passte',
    perfekt: 'gepasst',
    translations: {
      en: 'fit/be suitable',
      es: 'encajar / ser adecuado'
    },
    categories: [CATEGORIES.CLOTHING, CATEGORIES.SHOPPING]
  },
  {
    id: 'schmecken',
    type: 'verb',
    infinitive: 'schmecken',
    preteritum: 'schmeckte',
    perfekt: 'geschmeckt',
    translations: {
      en: 'know/have taste',
      es: 'saber / tener sabor'
    },
    categories: [CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.KITCHEN]
  },
  {
    id: 'reden',
    type: 'verb',
    infinitive: 'reden',
    preteritum: 'redete',
    perfekt: 'geredet',
    translations: {
      en: 'talk',
      es: 'hablar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'bedeuten',
    type: 'verb',
    infinitive: 'bedeuten',
    preteritum: 'bedeutete',
    perfekt: 'bedeutet',
    translations: {
      en: 'mean',
      es: 'significar'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'einpacken',
    type: 'verb',
    infinitive: 'ein|packen',
    preteritum: 'packte ein',
    perfekt: 'eingepackt',
    translations: {
      en: 'pack',
      es: 'empacar / guardar'
    },
    categories: [CATEGORIES.TRAVEL]
  },
  {
    id: 'passieren',
    type: 'verb',
    infinitive: 'passieren',
    preteritum: 'passierte',
    perfekt: 'passiert',
    translations: {
      en: 'happen',
      es: 'pasar / suceder'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'kriegen',
    type: 'verb',
    infinitive: 'kriegen',
    preteritum: 'kriegte',
    perfekt: 'gekriegt',
    translations: {
      en: 'get / receive',
      es: 'recibir / conseguir'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'mieten',
    type: 'verb',
    infinitive: 'mieten',
    preteritum: 'mietete',
    perfekt: 'gemietet',
    translations: {
      en: 'rent',
      es: 'alquilar'
    },
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.MONEY]
  },
  {
    id: 'kennenlernen',
    type: 'verb',
    infinitive: 'kennen|lernen',
    preteritum: 'lernte kennen',
    perfekt: 'kennengelernt',
    translations: {
      en: 'meet / get to know',
      es: 'conocer'
    },
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
  },
  {
    id: 'erleben',
    type: 'verb',
    infinitive: 'erleben',
    preteritum: 'erlebte',
    perfekt: 'erlebt',
    translations: {
      en: 'experience',
      es: 'vivir / experimentar'
    },
    categories: [CATEGORIES.LEISURE, CATEGORIES.TRAVEL]
  },
  {
    id: 'weggehen',
    type: 'verb',
    infinitive: 'weg|gehen',
    preteritum: 'ging weg',
    perfekt: 'weggegangen',
    translations: {
      en: 'leave / go away',
      es: 'irse / marcharse'
    },
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
  },
  {
    id: 'verbieten',
    type: 'verb',
    infinitive: 'verbieten',
    preteritum: 'verbot',
    perfekt: 'verboten',
    translations: {
      en: 'forbid / prohibit',
      es: 'prohibir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.WORK]
  },
  {
    id: 'verpassen',
    type: 'verb',
    infinitive: 'verpassen',
    preteritum: 'verpasste',
    perfekt: 'verpasst',
    translations: {
      en: 'miss',
      es: 'perder'
    },
    categories: [CATEGORIES.TRAVEL]
  },
  {
    id: 'vermissen',
    type: 'verb',
    infinitive: 'vermissen',
    preteritum: 'vermisste',
    perfekt: 'vermisst',
    translations: {
      en: 'miss',
      es: 'extrañar / echar de menos'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'beenden',
    type: 'verb',
    infinitive: 'beenden',
    preteritum: 'beendete',
    perfekt: 'beendet',
    translations: {
      en: 'finish / end',
      es: 'terminar / finalizar'
    },
    categories: [CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'verschieben',
    type: 'verb',
    infinitive: 'verschieben',
    preteritum: 'verschob',
    perfekt: 'verschoben',
    translations: {
      en: 'postpone / move',
      es: 'posponer / aplazar'
    },
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
  },
  {
    id: 'schaffen',
    type: 'verb',
    infinitive: 'schaffen',
    preteritum: 'schaffte',
    perfekt: 'geschafft',
    translations: {
      en: 'manage / accomplish',
      es: 'lograr / conseguir'
    },
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'schenken',
    type: 'verb',
    infinitive: 'schenken',
    preteritum: 'schenkte',
    perfekt: 'geschenkt',
    translations: {
      en: 'give as a gift',
      es: 'regalar'
    },
    categories: [CATEGORIES.FOOD]
  },
  {
    id: 'loben',
    type: 'verb',
    infinitive: 'loben',
    preteritum: 'lobte',
    perfekt: 'gelobt',
    translations: {
      en: 'praise / compliment',
      es: 'elogiar / felicitar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PEOPLE]
  },
  {
    id: 'ablehnen',
    type: 'verb',
    infinitive: 'ab|lehnen',
    preteritum: 'lehnte ab',
    perfekt: 'abgelehnt',
    translations: {
      en: 'decline / reject',
      es: 'rechazar'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'weinen',
    type: 'verb',
    infinitive: 'weinen',
    preteritum: 'weinte',
    perfekt: 'geweint',
    translations: {
      en: 'cry',
      es: 'llorar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'überraschen',
    type: 'verb',
    infinitive: 'überraschen',
    preteritum: 'überraschte',
    perfekt: 'überrascht',
    translations: {
      en: 'surprise',
      es: 'sorprender'
    },
    categories: [CATEGORIES.EMOTIONS, CATEGORIES.PEOPLE]
  },
  {
    id: 'reinkommen',
    type: 'verb',
    infinitive: 'rein|kommen',
    preteritum: 'kam rein',
    perfekt: 'reingekommen',
    translations: {
      en: 'come in',
      es: 'entrar'
    },
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION]
  },
  {
    id: 'riechen',
    type: 'verb',
    infinitive: 'riechen',
    preteritum: 'roch',
    perfekt: 'gerochen',
    translations: {
      en: 'smell',
      es: 'oler'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.DRINK, CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN]
  },
  {
    id: 'klettern',
    type: 'verb',
    infinitive: 'klettern',
    preteritum: 'kletterte',
    perfekt: 'geklettert',
    translations: {
      en: 'climb',
      es: 'escalar / trepar'
    },
    categories: [CATEGORIES.LEISURE, CATEGORIES.NATURE, CATEGORIES.SPORTS]
  },
  {
    id: 'vorschlagen',
    type: 'verb',
    infinitive: 'vor|schlagen',
    preteritum: 'schlug vor',
    perfekt: 'vorgeschlagen',
    translations: {
      en: 'suggest / propose',
      es: 'proponer / sugerir'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'zustimmen',
    type: 'verb',
    infinitive: 'zu|stimmen',
    preteritum: 'stimmte zu',
    perfekt: 'zugestimmt',
    translations: {
      en: 'agree / consent',
      es: 'estar de acuerdo / aceptar'
    },
    categories: [CATEGORIES.COMMUNICATION]
  },
  {
    id: 'springen',
    type: 'verb',
    infinitive: 'springen',
    preteritum: 'sprang',
    perfekt: 'gesprungen',
    translations: {
      en: 'jump',
      es: 'saltar'
    },
    categories: [CATEGORIES.BODY, CATEGORIES.LEISURE, CATEGORIES.SPORTS]
  },
  {
    id: 'basteln',
    type: 'verb',
    infinitive: 'basteln',
    preteritum: 'bastelte',
    perfekt: 'gebastelt',
    translations: {
      en: 'do crafts / make things',
      es: 'hacer manualidades'
    },
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
  },
  {
    id: 'abwaschen',
    type: 'verb',
    infinitive: 'ab|waschen',
    preteritum: 'wusch ab',
    perfekt: 'abgewaschen',
    translations: {
      en: 'wash up / do the dishes',
      es: 'lavar los platos'
    },
    categories: [CATEGORIES.FOOD, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
  },
  {
    id: 'herausfinden',
    type: 'verb',
    infinitive: 'heraus|finden',
    preteritum: 'fand heraus',
    perfekt: 'herausgefunden',
    translations: {
      en: 'find out',
      es: 'averiguar / descubrir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION]
  },
  {
    id: 'rausfinden',
    type: 'verb',
    infinitive: 'raus|finden',
    preteritum: 'fand raus',
    perfekt: 'rausgefunden',
    translations: {
      en: 'find out',
      es: 'averiguar / descubrir'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION]
  },
  {
    id: 'kämpfen',
    type: 'verb',
    infinitive: 'kämpfen',
    preteritum: 'kämpfte',
    perfekt: 'gekämpft',
    translations: {
      en: 'fight / compete',
      es: 'luchar / competir'
    },
    categories: [CATEGORIES.SPORTS]
  },
  {
    id: 'werfen',
    type: 'verb',
    infinitive: 'werfen',
    preteritum: 'warf',
    perfekt: 'geworfen',
    translations: {
      en: 'throw',
      es: 'lanzar / tirar'
    },
    categories: [CATEGORIES.SPORTS]
  },
  {
    id: 'interessieren',
    type: 'verb',
    infinitive: 'sich interessieren',
    preteritum: 'interessierte sich',
    perfekt: 'interessiert',
    translations: {
      en: 'be interested',
      es: 'interesarse'
    },
    categories: [CATEGORIES.EMOTIONS]
  },
  {
    id: 'vorstellen',
    type: 'verb',
    infinitive: 'sich vor|stellen',
    preteritum: 'stellte sich vor',
    perfekt: 'vorgestellt',
    translations: {
      en: 'introduce oneself',
      es: 'presentarse'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
  },
  {
    id: 'dauern',
    type: 'verb',
    infinitive: 'dauern',
    preteritum: 'dauerte',
    perfekt: 'gedauert',
    translations: {
      en: 'last / take',
      es: 'durar'
    },
    categories: [CATEGORIES.DATES, CATEGORIES.NUMBERS, CATEGORIES.TIME]
  },
  {
    id: 'gründen',
    type: 'verb',
    infinitive: 'gründen',
    preteritum: 'gründete',
    perfekt: 'gegründet',
    translations: {
      en: 'found / establish',
      es: 'fundar / crear'
    },
    categories: [CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  },
  {
    id: 'weiterhelfen',
    type: 'verb',
    infinitive: 'weiter|helfen',
    preteritum: 'half weiter',
    perfekt: 'weitergeholfen',
    translations: {
      en: 'help further / assist',
      es: 'ayudar / orientar'
    },
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PEOPLE, CATEGORIES.WORK]
  },
  {
    id: 'ändern',
    type: 'verb',
    infinitive: 'sich ändern',
    preteritum: 'änderte sich',
    perfekt: 'geändert',
    translations: {
      en: 'change',
      es: 'cambiar'
    },
    categories: [CATEGORIES.ABSTRACT]
  },
  {
    id: 'üben',
    type: 'verb',
    infinitive: 'üben',
    preteritum: 'übte',
    perfekt: 'geübt',
    translations: {
      en: 'practise',
      es: 'practicar'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
  },
  {
    id: 'nachschauen',
    type: 'verb',
    infinitive: 'nach|schauen',
    preteritum: 'schaute nach',
    perfekt: 'nachgeschaut',
    translations: {
      en: 'look up / check',
      es: 'consultar / buscar'
    },
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.TECHNOLOGY]
  },
  {
    id: 'planen',
    type: 'verb',
    infinitive: 'planen',
    preteritum: 'plante',
    perfekt: 'geplant',
    translations: {
      en: 'plan',
      es: 'planificar'
    },
    categories: [CATEGORIES.DATES, CATEGORIES.TIME, CATEGORIES.WORK]
  },
  {
    id: 'bewerten',
    type: 'verb',
    infinitive: 'bewerten',
    preteritum: 'bewertete',
    perfekt: 'bewertet',
    translations: {
      en: 'rate / evaluate',
      es: 'valorar / evaluar'
    },
    categories: [CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
  }
]
