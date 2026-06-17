import type { GermanNoun } from '@/interfaces/GermanNoun'

export const nouns: GermanNoun[] = [
  {
    id: 'abendessen',
    type: 'noun',
    article: 'das',
    value: 'Abendessen',
    singular_id: null,
    plural_id: 'abendessen-plural',
    translations: {
      en: 'dinner',
      de: 'Abendessen',
      es: 'cena',
      tr: 'akşam yemeği',
      te: 'విందు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'abendessen-plural',
    type: 'noun',
    article: 'die',
    value: 'Abendessen',
    singular_id: 'abendessen',
    plural_id: null,
    translations: {
      en: 'dinners',
      de: 'Abendessen',
      es: 'cenas',
      tr: 'akşam yemekleri',
      te: 'విందు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'alter',
    type: 'noun',
    article: 'das',
    value: 'Alter',
    singular_id: null,
    plural_id: 'alter-plural',
    translations: {
      en: 'age',
      de: 'Alter',
      es: 'edad',
      tr: 'yaş',
      te: 'వయస్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'personal-info', 'time']
  },
  {
    id: 'alter-plural',
    type: 'noun',
    article: 'die',
    value: 'Alter',
    singular_id: 'alter',
    plural_id: null,
    translations: {
      en: 'ages',
      de: 'Alter',
      es: 'edades',
      tr: 'yaşlar',
      te: 'వయస్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'personal-info', 'time']
  },
  {
    id: 'anzeige',
    type: 'noun',
    article: 'die',
    value: 'Anzeige',
    singular_id: null,
    plural_id: 'anzeigen',
    translations: {
      en: 'advertisement',
      de: 'Anzeige',
      es: 'anuncio',
      tr: 'ilan',
      te: 'ప్రకటన'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication']
  },
  {
    id: 'anzeigen',
    type: 'noun',
    article: 'die',
    value: 'Anzeigen',
    singular_id: 'anzeige',
    plural_id: null,
    translations: {
      en: 'advertisements',
      de: 'Anzeigen',
      es: 'anuncios',
      tr: 'ilanlar',
      te: 'ప్రకటనలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication']
  },
  {
    id: 'aufzug',
    type: 'noun',
    article: 'der',
    value: 'Aufzug',
    singular_id: null,
    plural_id: 'aufzüge',
    translations: {
      en: 'elevator',
      de: 'Aufzug',
      es: 'ascensor',
      tr: 'asansör',
      te: 'లిఫ్ట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'aufzüge',
    type: 'noun',
    article: 'die',
    value: 'Aufzüge',
    singular_id: 'aufzug',
    plural_id: null,
    translations: {
      en: 'elevators',
      de: 'Aufzüge',
      es: 'ascensores',
      tr: 'asansörler',
      te: 'లిఫ్ట్‌లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'auto',
    type: 'noun',
    article: 'das',
    value: 'Auto',
    singular_id: null,
    plural_id: 'autos',
    translations: {
      en: 'car',
      de: 'Auto',
      es: 'coche',
      tr: 'araba',
      te: 'కారు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'autos',
    type: 'noun',
    article: 'die',
    value: 'Autos',
    singular_id: 'auto',
    plural_id: null,
    translations: {
      en: 'cars',
      de: 'Autos',
      es: 'coches',
      tr: 'arabalar',
      te: 'కారులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'badewanne',
    type: 'noun',
    article: 'die',
    value: 'Badewanne',
    singular_id: null,
    plural_id: 'badewannen',
    translations: {
      en: 'bathtub',
      de: 'Badewanne',
      es: 'bañera',
      tr: 'küvet',
      te: 'స్నానపు తొట్టి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'badewannen',
    type: 'noun',
    article: 'die',
    value: 'Badewannen',
    singular_id: 'badewanne',
    plural_id: null,
    translations: {
      en: 'bathtubs',
      de: 'Badewannen',
      es: 'bañeras',
      tr: 'küvetler',
      te: 'స్నానపు తొట్టెలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'bahnhof',
    type: 'noun',
    article: 'der',
    value: 'Bahnhof',
    singular_id: null,
    plural_id: 'bahnhöfe',
    translations: {
      en: 'train station',
      de: 'Bahnhof',
      es: 'estación de tren',
      tr: 'tren istasyonu',
      te: 'రైల్వే స్టేషన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'locations', 'travel']
  },
  {
    id: 'bahnhöfe',
    type: 'noun',
    article: 'die',
    value: 'Bahnhöfe',
    singular_id: 'bahnhof',
    plural_id: null,
    translations: {
      en: 'train stations',
      de: 'Bahnhöfe',
      es: 'estaciones de tren',
      tr: 'tren istasyonları',
      te: 'రైల్వే స్టేషన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'locations', 'travel']
  },
  {
    id: 'balkon',
    type: 'noun',
    article: 'der',
    value: 'Balkon',
    singular_id: null,
    plural_id: 'balkone',
    translations: {
      en: 'balcony',
      de: 'Balkon',
      es: 'balcón',
      tr: 'balkon',
      te: 'బాల్కనీ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'balkone',
    type: 'noun',
    article: 'die',
    value: 'Balkone',
    singular_id: 'balkon',
    plural_id: null,
    translations: {
      en: 'balconies',
      de: 'Balkone',
      es: 'balcones',
      tr: 'balkonlar',
      te: 'బాల్కనీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'beispiel',
    type: 'noun',
    article: 'das',
    value: 'Beispiel',
    singular_id: null,
    plural_id: 'beispiele',
    translations: {
      en: 'example',
      de: 'Beispiel',
      es: 'ejemplo',
      tr: 'örnek',
      te: 'ఉదాహరణ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'education']
  },
  {
    id: 'beispiele',
    type: 'noun',
    article: 'die',
    value: 'Beispiele',
    singular_id: 'beispiel',
    plural_id: null,
    translations: {
      en: 'examples',
      de: 'Beispiele',
      es: 'ejemplos',
      tr: 'örnekler',
      te: 'ఉదాహరణలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'education']
  },
  {
    id: 'bier',
    type: 'noun',
    article: 'das',
    value: 'Bier',
    singular_id: null,
    plural_id: 'biere',
    translations: {
      en: 'beer',
      de: 'Bier',
      es: 'cerveza',
      tr: 'bira',
      te: 'బీరు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'biere',
    type: 'noun',
    article: 'die',
    value: 'Biere',
    singular_id: 'bier',
    plural_id: null,
    translations: {
      en: 'beers',
      de: 'Biere',
      es: 'cervezas',
      tr: 'biralar',
      te: 'బీరులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'brot',
    type: 'noun',
    article: 'das',
    value: 'Brot',
    singular_id: null,
    plural_id: 'brote',
    translations: {
      en: 'bread',
      de: 'Brot',
      es: 'pan',
      tr: 'ekmek',
      te: 'రొట్టె'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'brote',
    type: 'noun',
    article: 'die',
    value: 'Brote',
    singular_id: 'brot',
    plural_id: null,
    translations: {
      en: 'breads',
      de: 'Brote',
      es: 'panes',
      tr: 'ekmekler',
      te: 'రొట్టెలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'brötchen',
    type: 'noun',
    article: 'das',
    value: 'Brötchen',
    singular_id: null,
    plural_id: 'brötchen-plural',
    translations: {
      en: 'bread roll',
      de: 'Brötchen',
      es: 'panecillo',
      tr: 'küçük ekmek',
      te: 'బన్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'brötchen-plural',
    type: 'noun',
    article: 'die',
    value: 'Brötchen',
    singular_id: 'brötchen',
    plural_id: null,
    translations: {
      en: 'bread rolls',
      de: 'Brötchen',
      es: 'panecillos',
      tr: 'küçük ekmekler',
      te: 'బన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'buch',
    type: 'noun',
    article: 'das',
    value: 'Buch',
    singular_id: null,
    plural_id: 'bücher',
    translations: {
      en: 'book',
      de: 'Buch',
      es: 'libro',
      tr: 'kitap',
      te: 'పుస్తకం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'bäckerei',
    type: 'noun',
    article: 'die',
    value: 'Bäckerei',
    singular_id: null,
    plural_id: 'bäckereien',
    translations: {
      en: 'bakery',
      de: 'Bäckerei',
      es: 'panadería',
      tr: 'fırın',
      te: 'బేకరీ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'shopping']
  },
  {
    id: 'bäckereien',
    type: 'noun',
    article: 'die',
    value: 'Bäckereien',
    singular_id: 'bäckerei',
    plural_id: null,
    translations: {
      en: 'bakeries',
      de: 'Bäckereien',
      es: 'panaderías',
      tr: 'fırınlar',
      te: 'బేకరీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'shopping']
  },
  {
    id: 'bücher',
    type: 'noun',
    article: 'die',
    value: 'Bücher',
    singular_id: 'buch',
    plural_id: null,
    translations: {
      en: 'books',
      de: 'Bücher',
      es: 'libros',
      tr: 'kitaplar',
      te: 'పుస్తకాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'café',
    type: 'noun',
    article: 'das',
    value: 'Café',
    singular_id: null,
    plural_id: 'cafés',
    translations: {
      en: 'café',
      de: 'Café',
      es: 'cafetería',
      tr: 'kafe',
      te: 'కేఫ్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'food']
  },
  {
    id: 'cafés',
    type: 'noun',
    article: 'die',
    value: 'Cafés',
    singular_id: 'café',
    plural_id: null,
    translations: {
      en: 'cafés',
      de: 'Cafés',
      es: 'cafeterías',
      tr: 'kafeler',
      te: 'కేఫ్‌లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'food']
  },
  {
    id: 'computer',
    type: 'noun',
    article: 'der',
    value: 'Computer',
    singular_id: null,
    plural_id: 'computer-plural',
    translations: {
      en: 'computer',
      de: 'Computer',
      es: 'ordenador',
      tr: 'bilgisayar',
      te: 'కంప్యూటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['technology']
  },
  {
    id: 'computer-plural',
    type: 'noun',
    article: 'die',
    value: 'Computer',
    singular_id: 'computer',
    plural_id: null,
    translations: {
      en: 'computers',
      de: 'Computer',
      es: 'ordenadores',
      tr: 'bilgisayarlar',
      te: 'కంప్యూటర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['technology']
  },
  {
    id: 'croissant',
    type: 'noun',
    article: 'das',
    value: 'Croissant',
    singular_id: null,
    plural_id: 'croissants',
    translations: {
      en: 'croissant',
      de: 'Croissant',
      es: 'cruasán',
      tr: 'kruvasan',
      te: 'క్రోసెంట్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'croissants',
    type: 'noun',
    article: 'die',
    value: 'Croissants',
    singular_id: 'croissant',
    plural_id: null,
    translations: {
      en: 'croissants',
      de: 'Croissants',
      es: 'cruasanes',
      tr: 'kruvasanlar',
      te: 'క్రోసెంట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'deutsch',
    type: 'noun',
    article: 'das',
    value: 'Deutsch',
    singular_id: null,
    plural_id: 'deutsch-plural',
    translations: {
      en: 'German',
      de: 'Deutsch',
      es: 'alemán',
      tr: 'Almanca',
      te: 'జర్మన్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language']
  },
  {
    id: 'deutsch-plural',
    type: 'noun',
    article: 'die',
    value: 'Deutsch',
    singular_id: 'deutsch',
    plural_id: null,
    translations: {
      en: 'German',
      de: 'Deutsch',
      es: 'alemán',
      tr: 'Almanca',
      te: 'జర్మన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language']
  },
  {
    id: 'dom',
    type: 'noun',
    article: 'der',
    value: 'Dom',
    singular_id: null,
    plural_id: 'dome',
    translations: {
      en: 'cathedral',
      de: 'Dom',
      es: 'catedral',
      tr: 'katedral',
      te: 'కేథడ్రల్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'dome',
    type: 'noun',
    article: 'die',
    value: 'Dome',
    singular_id: 'dom',
    plural_id: null,
    translations: {
      en: 'cathedrals',
      de: 'Dome',
      es: 'catedrales',
      tr: 'katedraller',
      te: 'కేథడ్రల్స్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'dusche',
    type: 'noun',
    article: 'die',
    value: 'Dusche',
    singular_id: null,
    plural_id: 'duschen',
    translations: {
      en: 'shower',
      de: 'Dusche',
      es: 'ducha',
      tr: 'duş',
      te: 'షవర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'duschen',
    type: 'noun',
    article: 'die',
    value: 'Duschen',
    singular_id: 'dusche',
    plural_id: null,
    translations: {
      en: 'showers',
      de: 'Duschen',
      es: 'duchas',
      tr: 'duşlar',
      te: 'షవర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'ei',
    type: 'noun',
    article: 'das',
    value: 'Ei',
    singular_id: null,
    plural_id: 'eier',
    translations: {
      en: 'egg',
      de: 'Ei',
      es: 'huevo',
      tr: 'yumurta',
      te: 'గుడ్డు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'eier',
    type: 'noun',
    article: 'die',
    value: 'Eier',
    singular_id: 'ei',
    plural_id: null,
    translations: {
      en: 'eggs',
      de: 'Eier',
      es: 'huevos',
      tr: 'yumurtalar',
      te: 'గుడ్డులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'eis',
    type: 'noun',
    article: 'das',
    value: 'Eis',
    singular_id: null,
    plural_id: 'eis-plural',
    translations: {
      en: 'ice cream',
      de: 'Eis',
      es: 'helado',
      tr: 'dondurma',
      te: 'ఐస్ క్రీమ్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'eis-plural',
    type: 'noun',
    article: 'die',
    value: 'Eis',
    singular_id: 'eis',
    plural_id: null,
    translations: {
      en: 'ice creams',
      de: 'Eis',
      es: 'helados',
      tr: 'dondurmalar',
      te: 'ఐస్ క్రీమ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'englisch',
    type: 'noun',
    article: 'das',
    value: 'Englisch',
    singular_id: null,
    plural_id: 'englisch-plural',
    translations: {
      en: 'English',
      de: 'Englisch',
      es: 'inglés',
      tr: 'İngilizce',
      te: 'ఇంగ్లీష్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language']
  },
  {
    id: 'englisch-plural',
    type: 'noun',
    article: 'die',
    value: 'Englisch',
    singular_id: 'englisch',
    plural_id: null,
    translations: {
      en: 'English',
      de: 'Englisch',
      es: 'inglés',
      tr: 'İngilizce',
      te: 'ఇంగ్లీష్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language']
  },
  {
    id: 'essen',
    type: 'noun',
    article: 'das',
    value: 'Essen',
    singular_id: null,
    plural_id: 'essen-plural',
    translations: {
      en: 'food',
      de: 'Essen',
      es: 'comida',
      tr: 'yemek',
      te: 'ఆహారం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'essen-plural',
    type: 'noun',
    article: 'die',
    value: 'Essen',
    singular_id: 'essen',
    plural_id: null,
    translations: {
      en: 'foods',
      de: 'Essen',
      es: 'comidas',
      tr: 'yemekler',
      te: 'ఆహారం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'fahrrad',
    type: 'noun',
    article: 'das',
    value: 'Fahrrad',
    singular_id: null,
    plural_id: 'fahrräder',
    translations: {
      en: 'bicycle',
      de: 'Fahrrad',
      es: 'bicicleta',
      tr: 'bisiklet',
      te: 'సైకిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'fahrräder',
    type: 'noun',
    article: 'die',
    value: 'Fahrräder',
    singular_id: 'fahrrad',
    plural_id: null,
    translations: {
      en: 'bicycles',
      de: 'Fahrräder',
      es: 'bicicletas',
      tr: 'bisikletler',
      te: 'సైకిల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'fernseher',
    type: 'noun',
    article: 'der',
    value: 'Fernseher',
    singular_id: null,
    plural_id: 'fernseher-plural',
    translations: {
      en: 'television',
      de: 'Fernseher',
      es: 'televisor',
      tr: 'televizyon',
      te: 'టెలివిజన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'fernseher-plural',
    type: 'noun',
    article: 'die',
    value: 'Fernseher',
    singular_id: 'fernseher',
    plural_id: null,
    translations: {
      en: 'televisions',
      de: 'Fernseher',
      es: 'televisores',
      tr: 'televizyonlar',
      te: 'టెలివిజన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'feuerzeug',
    type: 'noun',
    article: 'das',
    value: 'Feuerzeug',
    singular_id: null,
    plural_id: 'feuerzeuge',
    translations: {
      en: 'lighter',
      de: 'Feuerzeug',
      es: 'encendedor',
      tr: 'çakmak',
      te: 'లైటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'feuerzeuge',
    type: 'noun',
    article: 'die',
    value: 'Feuerzeuge',
    singular_id: 'feuerzeug',
    plural_id: null,
    translations: {
      en: 'lighters',
      de: 'Feuerzeuge',
      es: 'encendedores',
      tr: 'çakmaklar',
      te: 'లైటర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'fleisch',
    type: 'noun',
    article: 'das',
    value: 'Fleisch',
    singular_id: null,
    plural_id: 'fleisch-plural',
    translations: {
      en: 'meat',
      de: 'Fleisch',
      es: 'carne',
      tr: 'et',
      te: 'మాంసం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'fleisch-plural',
    type: 'noun',
    article: 'die',
    value: 'Fleisch',
    singular_id: 'fleisch',
    plural_id: null,
    translations: {
      en: 'meats',
      de: 'Fleisch',
      es: 'carnes',
      tr: 'etler',
      te: 'మాంసం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'foto',
    type: 'noun',
    article: 'das',
    value: 'Foto',
    singular_id: null,
    plural_id: 'fotos',
    translations: {
      en: 'photo',
      de: 'Foto',
      es: 'foto',
      tr: 'fotoğraf',
      te: 'ఫోటో'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts']
  },
  {
    id: 'fotos',
    type: 'noun',
    article: 'die',
    value: 'Fotos',
    singular_id: 'foto',
    plural_id: null,
    translations: {
      en: 'photos',
      de: 'Fotos',
      es: 'fotos',
      tr: 'fotoğraflar',
      te: 'ఫోటోలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts']
  },
  {
    id: 'französisch',
    type: 'noun',
    article: 'das',
    value: 'Französisch',
    singular_id: null,
    plural_id: 'französisch-plural',
    translations: {
      en: 'French',
      de: 'Französisch',
      es: 'francés',
      tr: 'Fransızca',
      te: 'ఫ్రెంచ్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language']
  },
  {
    id: 'französisch-plural',
    type: 'noun',
    article: 'die',
    value: 'Französisch',
    singular_id: 'französisch',
    plural_id: null,
    translations: {
      en: 'French',
      de: 'Französisch',
      es: 'francés',
      tr: 'Fransızca',
      te: 'ఫ్రెంచ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language']
  },
  {
    id: 'frühstück',
    type: 'noun',
    article: 'das',
    value: 'Frühstück',
    singular_id: null,
    plural_id: 'frühstücke',
    translations: {
      en: 'breakfast',
      de: 'Frühstück',
      es: 'desayuno',
      tr: 'kahvaltı',
      te: 'అల్పాహారం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'frühstücke',
    type: 'noun',
    article: 'die',
    value: 'Frühstücke',
    singular_id: 'frühstück',
    plural_id: null,
    translations: {
      en: 'breakfasts',
      de: 'Frühstücke',
      es: 'desayunos',
      tr: 'kahvaltılar',
      te: 'అల్పాహారంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'garten',
    type: 'noun',
    article: 'der',
    value: 'Garten',
    singular_id: null,
    plural_id: 'gärten',
    translations: {
      en: 'garden',
      de: 'Garten',
      es: 'jardín',
      tr: 'bahçe',
      te: 'తోట'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'nature']
  },
  {
    id: 'gemüse',
    type: 'noun',
    article: 'das',
    value: 'Gemüse',
    singular_id: null,
    plural_id: 'gemüse-plural',
    translations: {
      en: 'vegetables',
      de: 'Gemüse',
      es: 'verdura',
      tr: 'sebze',
      te: 'కూరగాయలు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'gemüse-plural',
    type: 'noun',
    article: 'die',
    value: 'Gemüse',
    singular_id: 'gemüse',
    plural_id: null,
    translations: {
      en: 'vegetables',
      de: 'Gemüse',
      es: 'verduras',
      tr: 'sebzeler',
      te: 'కూరగాయలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'getränk',
    type: 'noun',
    article: 'das',
    value: 'Getränk',
    singular_id: null,
    plural_id: 'getränke',
    translations: {
      en: 'drink',
      de: 'Getränk',
      es: 'bebida',
      tr: 'içecek',
      te: 'పానీయం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'getränke',
    type: 'noun',
    article: 'die',
    value: 'Getränke',
    singular_id: 'getränk',
    plural_id: null,
    translations: {
      en: 'drinks',
      de: 'Getränke',
      es: 'bebidas',
      tr: 'içecekler',
      te: 'పానీయంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'grad',
    type: 'noun',
    article: 'das',
    value: 'Grad',
    singular_id: null,
    plural_id: 'grad-plural',
    translations: {
      en: 'degree',
      de: 'Grad',
      es: 'grado',
      tr: 'derece',
      te: 'డిగ్రీ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers', 'weather']
  },
  {
    id: 'grad-plural',
    type: 'noun',
    article: 'die',
    value: 'Grade',
    singular_id: 'grad',
    plural_id: null,
    translations: {
      en: 'degrees',
      de: 'Grade',
      es: 'grados',
      tr: 'dereceler',
      te: 'డిగ్రీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers', 'weather']
  },
  {
    id: 'gramm',
    type: 'noun',
    article: 'das',
    value: 'Gramm',
    singular_id: null,
    plural_id: 'gramm-plural',
    translations: {
      en: 'gram',
      de: 'Gramm',
      es: 'gramo',
      tr: 'gram',
      te: 'గ్రాము'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'gramm-plural',
    type: 'noun',
    article: 'die',
    value: 'Gramm',
    singular_id: 'gramm',
    plural_id: null,
    translations: {
      en: 'grams',
      de: 'Gramm',
      es: 'gramos',
      tr: 'gramlar',
      te: 'గ్రాము'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'gärten',
    type: 'noun',
    article: 'die',
    value: 'Gärten',
    singular_id: 'garten',
    plural_id: null,
    translations: {
      en: 'gardens',
      de: 'Gärten',
      es: 'jardines',
      tr: 'bahçeler',
      te: 'తోటలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'nature']
  },
  {
    id: 'handy',
    type: 'noun',
    article: 'das',
    value: 'Handy',
    singular_id: null,
    plural_id: 'handys',
    translations: {
      en: 'mobile phone',
      de: 'Handy',
      es: 'móvil',
      tr: 'cep telefonu',
      te: 'మొబైల్ ఫోన్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'household', 'technology']
  },
  {
    id: 'handys',
    type: 'noun',
    article: 'die',
    value: 'Handys',
    singular_id: 'handy',
    plural_id: null,
    translations: {
      en: 'mobile phones',
      de: 'Handys',
      es: 'móviles',
      tr: 'cep telefonları',
      te: 'మొబైల్ ఫోన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'household', 'technology']
  },
  {
    id: 'hauptbahnhof',
    type: 'noun',
    article: 'der',
    value: 'Hauptbahnhof',
    singular_id: null,
    plural_id: 'hauptbahnhöfe',
    translations: {
      en: 'central station',
      de: 'Hauptbahnhof',
      es: 'estación central',
      tr: 'ana tren istasyonu',
      te: 'ప్రధాన రైల్వే స్టేషన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'locations', 'travel']
  },
  {
    id: 'hauptbahnhöfe',
    type: 'noun',
    article: 'die',
    value: 'Hauptbahnhöfe',
    singular_id: 'hauptbahnhof',
    plural_id: null,
    translations: {
      en: 'central stations',
      de: 'Hauptbahnhöfe',
      es: 'estaciones centrales',
      tr: 'ana tren istasyonları',
      te: 'ప్రధాన రైల్వే స్టేషన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'locations', 'travel']
  },
  {
    id: 'heft',
    type: 'noun',
    article: 'das',
    value: 'Heft',
    singular_id: null,
    plural_id: 'hefte',
    translations: {
      en: 'notebook',
      de: 'Heft',
      es: 'cuaderno',
      tr: 'defter',
      te: 'నోట్‌బుక్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'hefte',
    type: 'noun',
    article: 'die',
    value: 'Hefte',
    singular_id: 'heft',
    plural_id: null,
    translations: {
      en: 'notebooks',
      de: 'Hefte',
      es: 'cuadernos',
      tr: 'defterler',
      te: 'నోట్‌బుక్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'heizung',
    type: 'noun',
    article: 'die',
    value: 'Heizung',
    singular_id: null,
    plural_id: 'heizungen',
    translations: {
      en: 'heating',
      de: 'Heizung',
      es: 'calefacción',
      tr: 'ısıtma',
      te: 'హీటింగ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'heizungen',
    type: 'noun',
    article: 'die',
    value: 'Heizungen',
    singular_id: 'heizung',
    plural_id: null,
    translations: {
      en: 'heatings',
      de: 'Heizungen',
      es: 'calefacciones',
      tr: 'ısıtmalar',
      te: 'హీటింగ్‌లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'herd',
    type: 'noun',
    article: 'der',
    value: 'Herd',
    singular_id: null,
    plural_id: 'herde',
    translations: {
      en: 'stove',
      de: 'Herd',
      es: 'estufa',
      tr: 'ocak',
      te: 'పొయ్యి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'herde',
    type: 'noun',
    article: 'die',
    value: 'Herde',
    singular_id: 'herd',
    plural_id: null,
    translations: {
      en: 'stoves',
      de: 'Herde',
      es: 'estufas',
      tr: 'ocaklar',
      te: 'పొయ్యిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'herkunftsland',
    type: 'noun',
    article: 'das',
    value: 'Herkunftsland',
    singular_id: null,
    plural_id: 'herkunftsländer',
    translations: {
      en: 'country of origin',
      de: 'Herkunftsland',
      es: 'país de origen',
      tr: 'menşe ülke',
      te: 'స్వదేశం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'personal-info', 'travel']
  },
  {
    id: 'herkunftsländer',
    type: 'noun',
    article: 'die',
    value: 'Herkunftsländer',
    singular_id: 'herkunftsland',
    plural_id: null,
    translations: {
      en: 'countries of origin',
      de: 'Herkunftsländer',
      es: 'países de origen',
      tr: 'menşe ülkeler',
      te: 'స్వదేశంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'personal-info', 'travel']
  },
  {
    id: 'hobby',
    type: 'noun',
    article: 'das',
    value: 'Hobby',
    singular_id: null,
    plural_id: 'hobbys',
    translations: {
      en: 'hobby',
      de: 'Hobby',
      es: 'pasatiempo',
      tr: 'hobi',
      te: 'అభిరుచి'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'hobbys',
    type: 'noun',
    article: 'die',
    value: 'Hobbys',
    singular_id: 'hobby',
    plural_id: null,
    translations: {
      en: 'hobbies',
      de: 'Hobbys',
      es: 'pasatiempos',
      tr: 'hobiler',
      te: 'అభిరుచిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'hotel',
    type: 'noun',
    article: 'das',
    value: 'Hotel',
    singular_id: null,
    plural_id: 'hotels',
    translations: {
      en: 'hotel',
      de: 'Hotel',
      es: 'hotel',
      tr: 'otel',
      te: 'హోటల్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'hotels',
    type: 'noun',
    article: 'die',
    value: 'Hotels',
    singular_id: 'hotel',
    plural_id: null,
    translations: {
      en: 'hotels',
      de: 'Hotels',
      es: 'hoteles',
      tr: 'oteller',
      te: 'హోటళ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'internet',
    type: 'noun',
    article: 'das',
    value: 'Internet',
    singular_id: null,
    plural_id: 'internet-plural',
    translations: {
      en: 'internet',
      de: 'Internet',
      es: 'internet',
      tr: 'internet',
      te: 'ఇంటర్నెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['technology']
  },
  {
    id: 'internet-plural',
    type: 'noun',
    article: 'die',
    value: 'Internet',
    singular_id: 'internet',
    plural_id: null,
    translations: {
      en: 'internets',
      de: 'Internet',
      es: 'internetes',
      tr: 'internetler',
      te: 'ఇంటర్నెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['technology']
  },
  {
    id: 'jahr',
    type: 'noun',
    article: 'das',
    value: 'Jahr',
    singular_id: null,
    plural_id: 'jahre',
    translations: {
      en: 'year',
      de: 'Jahr',
      es: 'año',
      tr: 'yıl',
      te: 'సంవత్సరం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'jahre',
    type: 'noun',
    article: 'die',
    value: 'Jahre',
    singular_id: 'jahr',
    plural_id: null,
    translations: {
      en: 'years',
      de: 'Jahre',
      es: 'años',
      tr: 'yıllar',
      te: 'సంవత్సరంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'keller',
    type: 'noun',
    article: 'der',
    value: 'Keller',
    singular_id: null,
    plural_id: 'keller-plural',
    translations: {
      en: 'cellar',
      de: 'Keller',
      es: 'sótano',
      tr: 'bodrum',
      te: 'నేలమాళిగ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'keller-plural',
    type: 'noun',
    article: 'die',
    value: 'Keller',
    singular_id: 'keller',
    plural_id: null,
    translations: {
      en: 'cellars',
      de: 'Keller',
      es: 'sótanos',
      tr: 'bodrumlar',
      te: 'నేలమాళిగలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'kilo',
    type: 'noun',
    article: 'das',
    value: 'Kilo',
    singular_id: null,
    plural_id: 'kilo-plural',
    translations: {
      en: 'kilo',
      de: 'Kilo',
      es: 'kilo',
      tr: 'kilo',
      te: 'కిలో'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'kilo-plural',
    type: 'noun',
    article: 'die',
    value: 'Kilos',
    singular_id: 'kilo',
    plural_id: null,
    translations: {
      en: 'kilos',
      de: 'Kilos',
      es: 'kilos',
      tr: 'kilolar',
      te: 'కిలోలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'kilogramm',
    type: 'noun',
    article: 'das',
    value: 'Kilogramm',
    singular_id: null,
    plural_id: 'kilogramm-plural',
    translations: {
      en: 'kilogram',
      de: 'Kilogramm',
      es: 'kilogramo',
      tr: 'kilogram',
      te: 'కిలోగ్రాము'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'kilogramm-plural',
    type: 'noun',
    article: 'die',
    value: 'Kilogramm',
    singular_id: 'kilogramm',
    plural_id: null,
    translations: {
      en: 'kilograms',
      de: 'Kilogramm',
      es: 'kilogramos',
      tr: 'kilogramlar',
      te: 'కిలోగ్రాము'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'kind',
    type: 'noun',
    article: 'das',
    value: 'Kind',
    singular_id: null,
    plural_id: 'kinder',
    translations: {
      en: 'child',
      de: 'Kind',
      es: 'niño',
      tr: 'çocuk',
      te: 'బిడ్డ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'family', 'people']
  },
  {
    id: 'kinder',
    type: 'noun',
    article: 'die',
    value: 'Kinder',
    singular_id: 'kind',
    plural_id: null,
    translations: {
      en: 'children',
      de: 'Kinder',
      es: 'niños',
      tr: 'çocuklar',
      te: 'పిల్లలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'family', 'people']
  },
  {
    id: 'klavier',
    type: 'noun',
    article: 'das',
    value: 'Klavier',
    singular_id: null,
    plural_id: 'klaviere',
    translations: {
      en: 'piano',
      de: 'Klavier',
      es: 'piano',
      tr: 'piyano',
      te: 'పియానో'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'klaviere',
    type: 'noun',
    article: 'die',
    value: 'Klaviere',
    singular_id: 'klavier',
    plural_id: null,
    translations: {
      en: 'pianos',
      de: 'Klaviere',
      es: 'pianos',
      tr: 'piyanolar',
      te: 'పియానోలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'krankenhaus',
    type: 'noun',
    article: 'das',
    value: 'Krankenhaus',
    singular_id: null,
    plural_id: 'krankenhäuser',
    translations: {
      en: 'hospital',
      de: 'Krankenhaus',
      es: 'hospital',
      tr: 'hastane',
      te: 'ఆసుపత్రి'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'locations', 'work']
  },
  {
    id: 'krankenhäuser',
    type: 'noun',
    article: 'die',
    value: 'Krankenhäuser',
    singular_id: 'krankenhaus',
    plural_id: null,
    translations: {
      en: 'hospitals',
      de: 'Krankenhäuser',
      es: 'hospitales',
      tr: 'hastaneler',
      te: 'ఆసుపత్రిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'locations', 'work']
  },
  {
    id: 'kühlschrank',
    type: 'noun',
    article: 'der',
    value: 'Kühlschrank',
    singular_id: null,
    plural_id: 'kühlschränke',
    translations: {
      en: 'fridge',
      de: 'Kühlschrank',
      es: 'nevera',
      tr: 'buzdolabı',
      te: 'రిఫ్రిజిరేటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'kühlschränke',
    type: 'noun',
    article: 'die',
    value: 'Kühlschränke',
    singular_id: 'kühlschrank',
    plural_id: null,
    translations: {
      en: 'fridges',
      de: 'Kühlschränke',
      es: 'neveras',
      tr: 'buzdolapları',
      te: 'రిఫ్రిజిరేటర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'lebensmittel',
    type: 'noun',
    article: 'das',
    value: 'Lebensmittel',
    singular_id: null,
    plural_id: 'lebensmittel-plural',
    translations: {
      en: 'groceries',
      de: 'Lebensmittel',
      es: 'alimentos',
      tr: 'gıda maddeleri',
      te: 'కిరాణా సామగ్రి'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'shopping']
  },
  {
    id: 'lebensmittel-plural',
    type: 'noun',
    article: 'die',
    value: 'Lebensmittel',
    singular_id: 'lebensmittel',
    plural_id: null,
    translations: {
      en: 'groceries',
      de: 'Lebensmittel',
      es: 'alimentos',
      tr: 'gıda maddeleri',
      te: 'కిరాణా సామగ్రి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'shopping']
  },
  {
    id: 'lieblingsessen',
    type: 'noun',
    article: 'das',
    value: 'Lieblingsessen',
    singular_id: null,
    plural_id: 'lieblingsessen-plural',
    translations: {
      en: 'favorite food',
      de: 'Lieblingsessen',
      es: 'comida favorita',
      tr: 'en sevilen yemek',
      te: 'ఇష్టమైన ఆహారం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'lieblingsessen-plural',
    type: 'noun',
    article: 'die',
    value: 'Lieblingsessen',
    singular_id: 'lieblingsessen',
    plural_id: null,
    translations: {
      en: 'favorite foods',
      de: 'Lieblingsessen',
      es: 'comida favoritas',
      tr: 'en sevilen yemekler',
      te: 'ఇష్టమైన ఆహారం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'lineal',
    type: 'noun',
    article: 'das',
    value: 'Lineal',
    singular_id: null,
    plural_id: 'lineale',
    translations: {
      en: 'ruler',
      de: 'Lineal',
      es: 'regla',
      tr: 'cetvel',
      te: 'స్కేలు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'household']
  },
  {
    id: 'lineale',
    type: 'noun',
    article: 'die',
    value: 'Lineale',
    singular_id: 'lineal',
    plural_id: null,
    translations: {
      en: 'rulers',
      de: 'Lineale',
      es: 'reglas',
      tr: 'cetveller',
      te: 'స్కేలులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'household']
  },
  {
    id: 'miete',
    type: 'noun',
    article: 'die',
    value: 'Miete',
    singular_id: null,
    plural_id: 'mieten',
    translations: {
      en: 'rent',
      de: 'Miete',
      es: 'alquiler',
      tr: 'kira',
      te: 'అద్దె'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'household']
  },
  {
    id: 'mieten',
    type: 'noun',
    article: 'die',
    value: 'Mieten',
    singular_id: 'miete',
    plural_id: null,
    translations: {
      en: 'rents',
      de: 'Mieten',
      es: 'alquileres',
      tr: 'kiralar',
      te: 'అద్దెలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'household']
  },
  {
    id: 'minute',
    type: 'noun',
    article: 'die',
    value: 'Minute',
    singular_id: null,
    plural_id: 'minuten',
    translations: {
      en: 'minute',
      de: 'Minute',
      es: 'minuto',
      tr: 'dakika',
      te: 'నిమిషం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time', 'measurements']
  },
  {
    id: 'minuten',
    type: 'noun',
    article: 'die',
    value: 'Minuten',
    singular_id: 'minute',
    plural_id: null,
    translations: {
      en: 'minutes',
      de: 'Minuten',
      es: 'minutos',
      tr: 'dakikalar',
      te: 'నిమిషాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time', 'measurements']
  },
  {
    id: 'mitbewohner',
    type: 'noun',
    article: 'der',
    value: 'Mitbewohner',
    singular_id: null,
    plural_id: 'mitbewohner-plural',
    translations: {
      en: 'roommate',
      de: 'Mitbewohner',
      es: 'compañero de piso',
      tr: 'ev arkadaşı',
      te: 'రూమ్‌మేట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'mitbewohner-plural',
    type: 'noun',
    article: 'die',
    value: 'Mitbewohner',
    singular_id: 'mitbewohner',
    plural_id: null,
    translations: {
      en: 'roommates',
      de: 'Mitbewohner',
      es: 'compañeros de piso',
      tr: 'ev arkadaşları',
      te: 'రూమ్‌మేట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'mitbewohnerin',
    type: 'noun',
    article: 'die',
    value: 'Mitbewohnerin',
    singular_id: null,
    plural_id: 'mitbewohnerinnen',
    translations: {
      en: 'roommate',
      de: 'Mitbewohnerin',
      es: 'compañera de piso',
      tr: 'ev arkadaşı',
      te: 'రూమ్‌మేట్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'mitbewohnerinnen',
    type: 'noun',
    article: 'die',
    value: 'Mitbewohnerinnen',
    singular_id: 'mitbewohnerin',
    plural_id: null,
    translations: {
      en: 'roommates',
      de: 'Mitbewohnerinnen',
      es: 'compañeras de piso',
      tr: 'ev arkadaşları',
      te: 'రూమ్‌మేట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'mittagessen',
    type: 'noun',
    article: 'das',
    value: 'Mittagessen',
    singular_id: null,
    plural_id: 'mittagessen-plural',
    translations: {
      en: 'lunch',
      de: 'Mittagessen',
      es: 'almuerzo',
      tr: 'öğle yemeği',
      te: 'మధ్యాహ్న భోజనం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'mittagessen-plural',
    type: 'noun',
    article: 'die',
    value: 'Mittagessen',
    singular_id: 'mittagessen',
    plural_id: null,
    translations: {
      en: 'lunches',
      de: 'Mittagessen',
      es: 'almuerzos',
      tr: 'öğle yemekleri',
      te: 'మధ్యాహ్న భోజనం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'möbel',
    type: 'noun',
    article: 'die',
    value: 'Möbel',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'furniture',
      de: 'Möbel',
      es: 'muebles',
      tr: 'mobilya',
      te: 'ఫర్నిచర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'müsli',
    type: 'noun',
    article: 'das',
    value: 'Müsli',
    singular_id: null,
    plural_id: 'müslis',
    translations: {
      en: 'muesli',
      de: 'Müsli',
      es: 'muesli',
      tr: 'müsli',
      te: 'మ్యూస్లీ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'müslis',
    type: 'noun',
    article: 'die',
    value: 'Müslis',
    singular_id: 'müsli',
    plural_id: null,
    translations: {
      en: 'mueslis',
      de: 'Müslis',
      es: 'mueslis',
      tr: 'müsliler',
      te: 'మ్యూస్లీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'nebenkosten',
    type: 'noun',
    article: 'die',
    value: 'Nebenkosten',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'utility costs',
      de: 'Nebenkosten',
      es: 'gastos adicionales',
      tr: 'ek masraflar',
      te: 'అదనపు ఖర్చులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'money']
  },
  {
    id: 'nähe',
    type: 'noun',
    article: 'die',
    value: 'Nähe',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'nearness',
      de: 'Nähe',
      es: 'cercanía',
      tr: 'yakınlık',
      te: 'సమీపం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'locations']
  },
  {
    id: 'obst',
    type: 'noun',
    article: 'das',
    value: 'Obst',
    singular_id: null,
    plural_id: 'obst-plural',
    translations: {
      en: 'fruit',
      de: 'Obst',
      es: 'fruta',
      tr: 'meyve',
      te: 'పండు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'obst-plural',
    type: 'noun',
    article: 'die',
    value: 'Obst',
    singular_id: 'obst',
    plural_id: null,
    translations: {
      en: 'fruits',
      de: 'Obst',
      es: 'frutas',
      tr: 'meyveler',
      te: 'పండు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'papier',
    type: 'noun',
    article: 'das',
    value: 'Papier',
    singular_id: null,
    plural_id: 'papiere',
    translations: {
      en: 'paper',
      de: 'Papier',
      es: 'papel',
      tr: 'kağıt',
      te: 'కాగితం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education', 'household']
  },
  {
    id: 'papiere',
    type: 'noun',
    article: 'die',
    value: 'Papiere',
    singular_id: 'papier',
    plural_id: null,
    translations: {
      en: 'papers',
      de: 'Papiere',
      es: 'papeles',
      tr: 'kağıtlar',
      te: 'కాగితంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education', 'household']
  },
  {
    id: 'picknick',
    type: 'noun',
    article: 'das',
    value: 'Picknick',
    singular_id: null,
    plural_id: 'picknicks',
    translations: {
      en: 'picnic',
      de: 'Picknick',
      es: 'picnic',
      tr: 'piknik',
      te: 'పిక్నిక్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'leisure']
  },
  {
    id: 'picknicks',
    type: 'noun',
    article: 'die',
    value: 'Picknicks',
    singular_id: 'picknick',
    plural_id: null,
    translations: {
      en: 'picnics',
      de: 'Picknicks',
      es: 'picnics',
      tr: 'piknikler',
      te: 'పిక్నిక్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'leisure']
  },
  {
    id: 'polizei',
    type: 'noun',
    article: 'die',
    value: 'Polizei',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'police',
      de: 'Polizei',
      es: 'policía',
      tr: 'polis',
      te: 'పోలీసు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'professions']
  },
  {
    id: 'post',
    type: 'noun',
    article: 'die',
    value: 'Post',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'mail',
      de: 'Post',
      es: 'correo',
      tr: 'posta',
      te: 'తపాలా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'communication']
  },
  {
    id: 'rad',
    type: 'noun',
    article: 'das',
    value: 'Rad',
    singular_id: null,
    plural_id: 'räder',
    translations: {
      en: 'wheel / bike',
      de: 'Rad',
      es: 'rueda / bici',
      tr: 'tekerlek / bisiklet',
      te: 'చక్రం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'rezept',
    type: 'noun',
    article: 'das',
    value: 'Rezept',
    singular_id: null,
    plural_id: 'rezepte',
    translations: {
      en: 'recipe',
      de: 'Rezept',
      es: 'receta',
      tr: 'tarif',
      te: 'వంటకం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'health']
  },
  {
    id: 'rezepte',
    type: 'noun',
    article: 'die',
    value: 'Rezepte',
    singular_id: 'rezept',
    plural_id: null,
    translations: {
      en: 'recipes',
      de: 'Rezepte',
      es: 'recetas',
      tr: 'tarifler',
      te: 'వంటకాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'health']
  },
  {
    id: 'richtung',
    type: 'noun',
    article: 'die',
    value: 'Richtung',
    singular_id: null,
    plural_id: 'richtungen',
    translations: {
      en: 'direction',
      de: 'Richtung',
      es: 'dirección',
      tr: 'yön',
      te: 'దిశ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'travel']
  },
  {
    id: 'richtungen',
    type: 'noun',
    article: 'die',
    value: 'Richtungen',
    singular_id: 'richtung',
    plural_id: null,
    translations: {
      en: 'directions',
      de: 'Richtungen',
      es: 'direcciones',
      tr: 'yönler',
      te: 'దిశలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'travel']
  },
  {
    id: 'räder',
    type: 'noun',
    article: 'die',
    value: 'Räder',
    singular_id: 'rad',
    plural_id: null,
    translations: {
      en: 'wheels / bikes',
      de: 'Räder',
      es: 'ruedas / bicis',
      tr: 'tekerlekler / bisikletler',
      te: 'చక్రంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'restaurant',
    type: 'noun',
    article: 'das',
    value: 'Restaurant',
    singular_id: null,
    plural_id: 'restaurants',
    translations: {
      en: 'restaurant',
      de: 'Restaurant',
      es: 'restaurante',
      tr: 'restoran',
      te: 'రెస్టారెంట్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'locations', 'work']
  },
  {
    id: 'restaurants',
    type: 'noun',
    article: 'die',
    value: 'Restaurants',
    singular_id: 'restaurant',
    plural_id: null,
    translations: {
      en: 'restaurants',
      de: 'Restaurants',
      es: 'restaurantes',
      tr: 'restoranlar',
      te: 'రెస్టారెంట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'locations', 'work']
  },
  {
    id: 'schlafzimmer',
    type: 'noun',
    article: 'das',
    value: 'Schlafzimmer',
    singular_id: null,
    plural_id: 'schlafzimmer-plural',
    translations: {
      en: 'bedroom',
      de: 'Schlafzimmer',
      es: 'dormitorio',
      tr: 'yatak odası',
      te: 'పడకగది'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'schlafzimmer-plural',
    type: 'noun',
    article: 'die',
    value: 'Schlafzimmer',
    singular_id: 'schlafzimmer',
    plural_id: null,
    translations: {
      en: 'bedrooms',
      de: 'Schlafzimmer',
      es: 'dormitorios',
      tr: 'yatak odaları',
      te: 'పడక గదులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'schloss',
    type: 'noun',
    article: 'das',
    value: 'Schloss',
    singular_id: null,
    plural_id: 'schlösser',
    translations: {
      en: 'castle',
      de: 'Schloss',
      es: 'castillo',
      tr: 'şato',
      te: 'కోట'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'schlösser',
    type: 'noun',
    article: 'die',
    value: 'Schlösser',
    singular_id: 'schloss',
    plural_id: null,
    translations: {
      en: 'castles',
      de: 'Schlösser',
      es: 'castillos',
      tr: 'şatolar',
      te: 'కోటలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'schwimmbad',
    type: 'noun',
    article: 'das',
    value: 'Schwimmbad',
    singular_id: null,
    plural_id: 'schwimmbäder',
    translations: {
      en: 'swimming pool',
      de: 'Schwimmbad',
      es: 'piscina',
      tr: 'yüzme havuzu',
      te: 'ఈత కొలను'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'sports', 'leisure']
  },
  {
    id: 'schwimmbäder',
    type: 'noun',
    article: 'die',
    value: 'Schwimmbäder',
    singular_id: 'schwimmbad',
    plural_id: null,
    translations: {
      en: 'swimming pools',
      de: 'Schwimmbäder',
      es: 'piscinas',
      tr: 'yüzme havuzları',
      te: 'ఈత కొలనులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'sports', 'leisure']
  },
  {
    id: 'spiel',
    type: 'noun',
    article: 'das',
    value: 'Spiel',
    singular_id: null,
    plural_id: 'spiele',
    translations: {
      en: 'game',
      de: 'Spiel',
      es: 'juego',
      tr: 'oyun',
      te: 'ఆట'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'sports']
  },
  {
    id: 'spiele',
    type: 'noun',
    article: 'die',
    value: 'Spiele',
    singular_id: 'spiel',
    plural_id: null,
    translations: {
      en: 'games',
      de: 'Spiele',
      es: 'juegos',
      tr: 'oyunlar',
      te: 'ఆటలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'sports']
  },
  {
    id: 'spülmaschine',
    type: 'noun',
    article: 'die',
    value: 'Spülmaschine',
    singular_id: null,
    plural_id: 'spülmaschinen',
    translations: {
      en: 'dishwasher',
      de: 'Spülmaschine',
      es: 'lavavajillas',
      tr: 'bulaşık makinesi',
      te: 'పాత్రలు కడిగే యంత్రం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'spülmaschinen',
    type: 'noun',
    article: 'die',
    value: 'Spülmaschinen',
    singular_id: 'spülmaschine',
    plural_id: null,
    translations: {
      en: 'dishwashers',
      de: 'Spülmaschinen',
      es: 'lavavajillas',
      tr: 'bulaşık makineleri',
      te: 'పాత్రలు కడిగే యంత్రాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'stadien',
    type: 'noun',
    article: 'die',
    value: 'Stadien',
    singular_id: 'stadion',
    plural_id: null,
    translations: {
      en: 'stadiums',
      de: 'Stadien',
      es: 'estadios',
      tr: 'stadyumlar',
      te: 'క్రీడాంగణాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'sports']
  },
  {
    id: 'stadion',
    type: 'noun',
    article: 'das',
    value: 'Stadion',
    singular_id: null,
    plural_id: 'stadien',
    translations: {
      en: 'stadium',
      de: 'Stadion',
      es: 'estadio',
      tr: 'stadyum',
      te: 'క్రీడాంగణం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'sports']
  },
  {
    id: 'steckdose',
    type: 'noun',
    article: 'die',
    value: 'Steckdose',
    singular_id: null,
    plural_id: 'steckdosen',
    translations: {
      en: 'socket',
      de: 'Steckdose',
      es: 'enchufe',
      tr: 'priz',
      te: 'సాకెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'steckdosen',
    type: 'noun',
    article: 'die',
    value: 'Steckdosen',
    singular_id: 'steckdose',
    plural_id: null,
    translations: {
      en: 'sockets',
      de: 'Steckdosen',
      es: 'enchufes',
      tr: 'prizler',
      te: 'సాకెట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'stock',
    type: 'noun',
    article: 'der',
    value: 'Stock',
    singular_id: null,
    plural_id: 'stockwerke',
    translations: {
      en: 'floor',
      de: 'Stock',
      es: 'piso',
      tr: 'kat',
      te: 'అంతస్తు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'stockwerke',
    type: 'noun',
    article: 'die',
    value: 'Stockwerke',
    singular_id: 'stock',
    plural_id: null,
    translations: {
      en: 'floors',
      de: 'Stockwerke',
      es: 'pisos',
      tr: 'katlar',
      te: 'అంతస్తులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'strom',
    type: 'noun',
    article: 'der',
    value: 'Strom',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'electricity',
      de: 'Strom',
      es: 'electricidad',
      tr: 'elektrik',
      te: 'విద్యుత్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'taxi',
    type: 'noun',
    article: 'das',
    value: 'Taxi',
    singular_id: null,
    plural_id: 'taxis',
    translations: {
      en: 'taxi',
      de: 'Taxi',
      es: 'taxi',
      tr: 'taksi',
      te: 'టాక్సీ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'taxis',
    type: 'noun',
    article: 'die',
    value: 'Taxis',
    singular_id: 'taxi',
    plural_id: null,
    translations: {
      en: 'taxis',
      de: 'Taxis',
      es: 'taxis',
      tr: 'taksiler',
      te: 'టాక్సీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'telefon',
    type: 'noun',
    article: 'das',
    value: 'Telefon',
    singular_id: null,
    plural_id: 'telefone',
    translations: {
      en: 'telephone',
      de: 'Telefon',
      es: 'teléfono',
      tr: 'telefon',
      te: 'టెలిఫోన్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'household', 'technology']
  },
  {
    id: 'telefone',
    type: 'noun',
    article: 'die',
    value: 'Telefone',
    singular_id: 'telefon',
    plural_id: null,
    translations: {
      en: 'telephones',
      de: 'Telefone',
      es: 'teléfonos',
      tr: 'telefonlar',
      te: 'టెలిఫోన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'household', 'technology']
  },
  {
    id: 'toilette',
    type: 'noun',
    article: 'die',
    value: 'Toilette',
    singular_id: null,
    plural_id: 'toiletten',
    translations: {
      en: 'toilet',
      de: 'Toilette',
      es: 'baño',
      tr: 'tuvalet',
      te: 'మరుగుదొడ్డి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'toiletten',
    type: 'noun',
    article: 'die',
    value: 'Toiletten',
    singular_id: 'toilette',
    plural_id: null,
    translations: {
      en: 'toilets',
      de: 'Toiletten',
      es: 'baños',
      tr: 'tuvaletler',
      te: 'మరుగుదొడ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'training',
    type: 'noun',
    article: 'das',
    value: 'Training',
    singular_id: null,
    plural_id: 'trainings',
    translations: {
      en: 'training',
      de: 'Training',
      es: 'entrenamiento',
      tr: 'antrenman',
      te: 'శిక్షణ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'sports']
  },
  {
    id: 'trainings',
    type: 'noun',
    article: 'die',
    value: 'Trainings',
    singular_id: 'training',
    plural_id: null,
    translations: {
      en: 'trainings',
      de: 'Trainings',
      es: 'entrenamientos',
      tr: 'antrenmanlar',
      te: 'శిక్షణలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'sports']
  },
  {
    id: 'umwelt',
    type: 'noun',
    article: 'die',
    value: 'Umwelt',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'environment',
      de: 'Umwelt',
      es: 'medio ambiente',
      tr: 'çevre',
      te: 'పర్యావరణం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature']
  },
  {
    id: 'verkehrsmittel',
    type: 'noun',
    article: 'das',
    value: 'Verkehrsmittel',
    singular_id: null,
    plural_id: 'verkehrsmittel-plural',
    translations: {
      en: 'means of transport',
      de: 'Verkehrsmittel',
      es: 'medio de transporte',
      tr: 'ulaşım aracı',
      te: 'రవాణా సాధనం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'verkehrsmittel-plural',
    type: 'noun',
    article: 'die',
    value: 'Verkehrsmittel',
    singular_id: 'verkehrsmittel',
    plural_id: null,
    translations: {
      en: 'means of transport',
      de: 'Verkehrsmittel',
      es: 'medios de transporte',
      tr: 'ulaşım araçları',
      te: 'రవాణా సాధనాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation']
  },
  {
    id: 'video',
    type: 'noun',
    article: 'das',
    value: 'Video',
    singular_id: null,
    plural_id: 'videos',
    translations: {
      en: 'video',
      de: 'Video',
      es: 'video',
      tr: 'video',
      te: 'వీడియో'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'technology']
  },
  {
    id: 'videos',
    type: 'noun',
    article: 'die',
    value: 'Videos',
    singular_id: 'video',
    plural_id: null,
    translations: {
      en: 'videos',
      de: 'Videos',
      es: 'videos',
      tr: 'videolar',
      te: 'వీడియోలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'technology']
  },
  {
    id: 'viertel',
    type: 'noun',
    article: 'das',
    value: 'Viertel',
    singular_id: null,
    plural_id: 'viertel-plural',
    translations: {
      en: 'quarter',
      de: 'Viertel',
      es: 'cuarto',
      tr: 'çeyrek',
      te: 'పావు వంతు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
  },
  {
    id: 'viertel-plural',
    type: 'noun',
    article: 'die',
    value: 'Viertel',
    singular_id: 'viertel',
    plural_id: null,
    translations: {
      en: 'quarters',
      de: 'Viertel',
      es: 'cuartos',
      tr: 'çeyrekler',
      te: 'పావు వంతు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
  },
  {
    id: 'waschmaschine',
    type: 'noun',
    article: 'die',
    value: 'Waschmaschine',
    singular_id: null,
    plural_id: 'waschmaschinen',
    translations: {
      en: 'washing machine',
      de: 'Waschmaschine',
      es: 'lavadora',
      tr: 'çamaşır makinesi',
      te: 'వాషింగ్ మెషీన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'waschmaschinen',
    type: 'noun',
    article: 'die',
    value: 'Waschmaschinen',
    singular_id: 'waschmaschine',
    plural_id: null,
    translations: {
      en: 'washing machines',
      de: 'Waschmaschinen',
      es: 'lavadoras',
      tr: 'çamaşır makineleri',
      te: 'వాషింగ్ మెషీన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'wasser',
    type: 'noun',
    article: 'das',
    value: 'Wasser',
    singular_id: null,
    plural_id: 'wasser-plural',
    translations: {
      en: 'water',
      de: 'Wasser',
      es: 'agua',
      tr: 'su',
      te: 'నీరు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink', 'nature', 'weather']
  },
  {
    id: 'wasser-plural',
    type: 'noun',
    article: 'die',
    value: 'Wasser',
    singular_id: 'wasser',
    plural_id: null,
    translations: {
      en: 'waters',
      de: 'Wasser',
      es: 'aguas',
      tr: 'sular',
      te: 'నీరు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink', 'nature', 'weather']
  },
  {
    id: 'weg',
    type: 'noun',
    article: 'der',
    value: 'Weg',
    singular_id: null,
    plural_id: 'wege',
    translations: {
      en: 'way',
      de: 'Weg',
      es: 'camino',
      tr: 'yol',
      te: 'దారి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'wege',
    type: 'noun',
    article: 'die',
    value: 'Wege',
    singular_id: 'weg',
    plural_id: null,
    translations: {
      en: 'ways',
      de: 'Wege',
      es: 'caminos',
      tr: 'yollar',
      te: 'దారులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'wetter',
    type: 'noun',
    article: 'das',
    value: 'Wetter',
    singular_id: null,
    plural_id: 'wetter-plural',
    translations: {
      en: 'weather',
      de: 'Wetter',
      es: 'tiempo',
      tr: 'hava durumu',
      te: 'వాతావరణం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'weather']
  },
  {
    id: 'wetter-plural',
    type: 'noun',
    article: 'die',
    value: 'Wetter',
    singular_id: 'wetter',
    plural_id: null,
    translations: {
      en: 'weathers',
      de: 'Wetter',
      es: 'tiempos',
      tr: 'hava durumları',
      te: 'వాతావరణం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'weather']
  },
  {
    id: 'wochenende',
    type: 'noun',
    article: 'das',
    value: 'Wochenende',
    singular_id: null,
    plural_id: 'wochenenden',
    translations: {
      en: 'weekend',
      de: 'Wochenende',
      es: 'fin de semana',
      tr: 'hafta sonu',
      te: 'వారాంతం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'wochenenden',
    type: 'noun',
    article: 'die',
    value: 'Wochenenden',
    singular_id: 'wochenende',
    plural_id: null,
    translations: {
      en: 'weekends',
      de: 'Wochenenden',
      es: 'fines de semana',
      tr: 'hafta sonları',
      te: 'వారాంతంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'abend',
    type: 'noun',
    article: 'der',
    value: 'Abend',
    singular_id: null,
    plural_id: 'abende',
    translations: {
      en: 'evening',
      de: 'Abend',
      es: 'tarde',
      tr: 'akşam',
      te: 'సాయంత్రం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'abende',
    type: 'noun',
    article: 'die',
    value: 'Abende',
    singular_id: 'abend',
    plural_id: null,
    translations: {
      en: 'evenings',
      de: 'Abende',
      es: 'tardes',
      tr: 'akşamlar',
      te: 'సాయంత్రంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'apfel',
    type: 'noun',
    article: 'der',
    value: 'Apfel',
    singular_id: null,
    plural_id: 'äpfel',
    translations: {
      en: 'apple',
      de: 'Apfel',
      es: 'manzana',
      tr: 'elma',
      te: 'ఆపిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'wohngemeinschaft',
    type: 'noun',
    article: 'die',
    value: 'Wohngemeinschaft',
    singular_id: null,
    plural_id: 'wohngemeinschaften',
    translations: {
      en: 'shared flat',
      de: 'Wohngemeinschaft',
      es: 'piso compartido',
      tr: 'paylaşımlı ev',
      te: 'భాగస్వామ్య నివాసం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'wohngemeinschaften',
    type: 'noun',
    article: 'die',
    value: 'Wohngemeinschaften',
    singular_id: 'wohngemeinschaft',
    plural_id: null,
    translations: {
      en: 'shared flats',
      de: 'Wohngemeinschaften',
      es: 'pisos compartidos',
      tr: 'paylaşımlı evler',
      te: 'భాగస్వామ్య నివాసాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'wohnzimmer',
    type: 'noun',
    article: 'das',
    value: 'Wohnzimmer',
    singular_id: null,
    plural_id: 'wohnzimmer-plural',
    translations: {
      en: 'living room',
      de: 'Wohnzimmer',
      es: 'salón',
      tr: 'oturma odası',
      te: 'నివాస గది'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'wohnzimmer-plural',
    type: 'noun',
    article: 'die',
    value: 'Wohnzimmer',
    singular_id: 'wohnzimmer',
    plural_id: null,
    translations: {
      en: 'living rooms',
      de: 'Wohnzimmer',
      es: 'salones',
      tr: 'oturma odaları',
      te: 'నివాస గదులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'zahnarztpraxen',
    type: 'noun',
    article: 'die',
    value: 'Zahnarztpraxen',
    singular_id: 'zahnarztpraxis',
    plural_id: null,
    translations: {
      en: 'dental practices',
      de: 'Zahnarztpraxen',
      es: 'consultorios dentales',
      tr: 'diş klinikleri',
      te: 'దంత వైద్యశాలలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'health']
  },
  {
    id: 'zahnarztpraxis',
    type: 'noun',
    article: 'die',
    value: 'Zahnarztpraxis',
    singular_id: null,
    plural_id: 'zahnarztpraxen',
    translations: {
      en: 'dental practice',
      de: 'Zahnarztpraxis',
      es: 'consultorio dental',
      tr: 'diş kliniği',
      te: 'దంత వైద్యశాల'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'health']
  },
  {
    id: 'zoo',
    type: 'noun',
    article: 'der',
    value: 'Zoo',
    singular_id: null,
    plural_id: 'zoos',
    translations: {
      en: 'zoo',
      de: 'Zoo',
      es: 'zoológico',
      tr: 'hayvanat bahçesi',
      te: 'జంతుప్రదర్శనశాల'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'leisure']
  },
  {
    id: 'zoos',
    type: 'noun',
    article: 'die',
    value: 'Zoos',
    singular_id: 'zoo',
    plural_id: null,
    translations: {
      en: 'zoos',
      de: 'Zoos',
      es: 'zoológicos',
      tr: 'hayvanat bahçeleri',
      te: 'జంతుప్రదర్శనశాలలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'leisure']
  },
  {
    id: 'äpfel',
    type: 'noun',
    article: 'die',
    value: 'Äpfel',
    singular_id: 'apfel',
    plural_id: null,
    translations: {
      en: 'apples',
      de: 'Äpfel',
      es: 'manzanas',
      tr: 'elmalar',
      te: 'ఆపిల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'april',
    type: 'noun',
    article: 'der',
    value: 'April',
    singular_id: null,
    plural_id: 'april-plural',
    translations: {
      en: 'April',
      de: 'April',
      es: 'abril',
      tr: 'nisan',
      te: 'ఏప్రిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'april-plural',
    type: 'noun',
    article: 'die',
    value: 'April',
    singular_id: 'april',
    plural_id: null,
    translations: {
      en: 'Aprils',
      de: 'April',
      es: 'abriles',
      tr: 'nisanlar',
      te: 'ఏప్రిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'arzt',
    type: 'noun',
    article: 'der',
    value: 'Arzt',
    singular_id: null,
    plural_id: 'ärzte',
    translations: {
      en: 'doctor',
      de: 'Arzt',
      es: 'médico',
      tr: 'doktor',
      te: 'డాక్టర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'ärzte',
    type: 'noun',
    article: 'die',
    value: 'Ärzte',
    singular_id: 'arzt',
    plural_id: null,
    translations: {
      en: 'doctors',
      de: 'Ärzte',
      es: 'médicos',
      tr: 'doktorlar',
      te: 'డాక్టర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'august',
    type: 'noun',
    article: 'der',
    value: 'August',
    singular_id: null,
    plural_id: 'august-plural',
    translations: {
      en: 'August',
      de: 'August',
      es: 'agosto',
      tr: 'ağustos',
      te: 'ఆగస్టు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'august-plural',
    type: 'noun',
    article: 'die',
    value: 'August',
    singular_id: 'august',
    plural_id: null,
    translations: {
      en: 'Augusts',
      de: 'August',
      es: 'agostos',
      tr: 'ağustoslar',
      te: 'ఆగస్టు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'baum',
    type: 'noun',
    article: 'der',
    value: 'Baum',
    singular_id: null,
    plural_id: 'bäume',
    translations: {
      en: 'tree',
      de: 'Baum',
      es: 'árbol',
      tr: 'ağaç',
      te: 'చెట్టు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature']
  },
  {
    id: 'bäume',
    type: 'noun',
    article: 'die',
    value: 'Bäume',
    singular_id: 'baum',
    plural_id: null,
    translations: {
      en: 'trees',
      de: 'Bäume',
      es: 'árboles',
      tr: 'ağaçlar',
      te: 'చెట్టులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature']
  },
  {
    id: 'becher',
    type: 'noun',
    article: 'der',
    value: 'Becher',
    singular_id: null,
    plural_id: 'becher-plural',
    translations: {
      en: 'cup',
      de: 'Becher',
      es: 'vaso',
      tr: 'bardak',
      te: 'కప్పు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'becher-plural',
    type: 'noun',
    article: 'die',
    value: 'Becher',
    singular_id: 'becher',
    plural_id: null,
    translations: {
      en: 'cups',
      de: 'Becher',
      es: 'vasos',
      tr: 'bardaklar',
      te: 'కప్పు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'beruf',
    type: 'noun',
    article: 'der',
    value: 'Beruf',
    singular_id: null,
    plural_id: 'berufe',
    translations: {
      en: 'profession',
      de: 'Beruf',
      es: 'profesión',
      tr: 'meslek',
      te: 'వృత్తి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'personal-info', 'work']
  },
  {
    id: 'berufe',
    type: 'noun',
    article: 'die',
    value: 'Berufe',
    singular_id: 'beruf',
    plural_id: null,
    translations: {
      en: 'professions',
      de: 'Berufe',
      es: 'profesiones',
      tr: 'meslekler',
      te: 'వృత్తిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'personal-info', 'work']
  },
  {
    id: 'bleistift',
    type: 'noun',
    article: 'der',
    value: 'Bleistift',
    singular_id: null,
    plural_id: 'bleistifte',
    translations: {
      en: 'pencil',
      de: 'Bleistift',
      es: 'lápiz',
      tr: 'kurşun kalem',
      te: 'పెన్సిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'household']
  },
  {
    id: 'bleistifte',
    type: 'noun',
    article: 'die',
    value: 'Bleistifte',
    singular_id: 'bleistift',
    plural_id: null,
    translations: {
      en: 'pencils',
      de: 'Bleistifte',
      es: 'lápices',
      tr: 'kurşun kalemler',
      te: 'పెన్సిల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'household']
  },
  {
    id: 'bruder',
    type: 'noun',
    article: 'der',
    value: 'Bruder',
    singular_id: null,
    plural_id: 'brüder',
    translations: {
      en: 'brother',
      de: 'Bruder',
      es: 'hermano',
      tr: 'erkek kardeş',
      te: 'సోదరుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'brüder',
    type: 'noun',
    article: 'die',
    value: 'Brüder',
    singular_id: 'bruder',
    plural_id: null,
    translations: {
      en: 'brothers',
      de: 'Brüder',
      es: 'hermanos',
      tr: 'erkek kardeşler',
      te: 'సోదరుడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'cent',
    type: 'noun',
    article: 'der',
    value: 'Cent',
    singular_id: null,
    plural_id: 'cent-plural',
    translations: {
      en: 'cent',
      de: 'Cent',
      es: 'céntimo',
      tr: 'sent',
      te: 'సెంటు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'numbers', 'shopping']
  },
  {
    id: 'cent-plural',
    type: 'noun',
    article: 'die',
    value: 'Cent',
    singular_id: 'cent',
    plural_id: null,
    translations: {
      en: 'cents',
      de: 'Cent',
      es: 'céntimos',
      tr: 'sentler',
      te: 'సెంటు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'numbers', 'shopping']
  },
  {
    id: 'cousin',
    type: 'noun',
    article: 'der',
    value: 'Cousin',
    singular_id: null,
    plural_id: 'cousins',
    translations: {
      en: 'male cousin',
      de: 'Cousin',
      es: 'primo',
      tr: 'erkek kuzen',
      te: 'కజిన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'cousins',
    type: 'noun',
    article: 'die',
    value: 'Cousins',
    singular_id: 'cousin',
    plural_id: null,
    translations: {
      en: 'male cousins',
      de: 'Cousins',
      es: 'primos',
      tr: 'erkek kuzenler',
      te: 'కజిన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'dank',
    type: 'noun',
    article: 'der',
    value: 'Dank',
    singular_id: null,
    plural_id: 'dank-plural',
    translations: {
      en: 'thanks',
      de: 'Dank',
      es: 'gracias',
      tr: 'teşekkür',
      te: 'ధన్యవాదాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'dank-plural',
    type: 'noun',
    article: 'die',
    value: 'Dank',
    singular_id: 'dank',
    plural_id: null,
    translations: {
      en: 'thanks',
      de: 'Dank',
      es: 'gracias',
      tr: 'teşekkürler',
      te: 'ధన్యవాదాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'deutschkurs',
    type: 'noun',
    article: 'der',
    value: 'Deutschkurs',
    singular_id: null,
    plural_id: 'deutschkurse',
    translations: {
      en: 'German course',
      de: 'Deutschkurs',
      es: 'curso de alemán',
      tr: 'Almanca kursu',
      te: 'జర్మన్ కోర్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language', 'work']
  },
  {
    id: 'deutschkurse',
    type: 'noun',
    article: 'die',
    value: 'Deutschkurse',
    singular_id: 'deutschkurs',
    plural_id: null,
    translations: {
      en: 'German courses',
      de: 'Deutschkurse',
      es: 'cursos de alemán',
      tr: 'Almanca kursları',
      te: 'జర్మన్ కోర్సులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'language', 'work']
  },
  {
    id: 'dezember',
    type: 'noun',
    article: 'der',
    value: 'Dezember',
    singular_id: null,
    plural_id: 'dezember-plural',
    translations: {
      en: 'December',
      de: 'Dezember',
      es: 'diciembre',
      tr: 'aralık',
      te: 'డిసెంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'dezember-plural',
    type: 'noun',
    article: 'die',
    value: 'Dezember',
    singular_id: 'dezember',
    plural_id: null,
    translations: {
      en: 'Decembers',
      de: 'Dezember',
      es: 'diciembres',
      tr: 'aralıklar',
      te: 'డిసెంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'dienstag',
    type: 'noun',
    article: 'der',
    value: 'Dienstag',
    singular_id: null,
    plural_id: 'dienstage',
    translations: {
      en: 'Tuesday',
      de: 'Dienstag',
      es: 'martes',
      tr: 'salı',
      te: 'మంగళవారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'dienstage',
    type: 'noun',
    article: 'die',
    value: 'Dienstage',
    singular_id: 'dienstag',
    plural_id: null,
    translations: {
      en: 'Tuesdays',
      de: 'Dienstage',
      es: 'martes',
      tr: 'salılar',
      te: 'మంగళవారంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'donnerstag',
    type: 'noun',
    article: 'der',
    value: 'Donnerstag',
    singular_id: null,
    plural_id: 'donnerstage',
    translations: {
      en: 'Thursday',
      de: 'Donnerstag',
      es: 'jueves',
      tr: 'perşembe',
      te: 'గురువారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'donnerstage',
    type: 'noun',
    article: 'die',
    value: 'Donnerstage',
    singular_id: 'donnerstag',
    plural_id: null,
    translations: {
      en: 'Thursdays',
      de: 'Donnerstage',
      es: 'jueves',
      tr: 'perşembeler',
      te: 'గురువారంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'drucker',
    type: 'noun',
    article: 'der',
    value: 'Drucker',
    singular_id: null,
    plural_id: 'drucker-plural',
    translations: {
      en: 'printer',
      de: 'Drucker',
      es: 'impresora',
      tr: 'yazıcı',
      te: 'ప్రింటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'drucker-plural',
    type: 'noun',
    article: 'die',
    value: 'Drucker',
    singular_id: 'drucker',
    plural_id: null,
    translations: {
      en: 'printers',
      de: 'Drucker',
      es: 'impresoras',
      tr: 'yazıcılar',
      te: 'ప్రింటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'einkauf',
    type: 'noun',
    article: 'der',
    value: 'Einkauf',
    singular_id: null,
    plural_id: 'einkäufe',
    translations: {
      en: 'shopping',
      de: 'Einkauf',
      es: 'compra',
      tr: 'alışveriş',
      te: 'కొనుగోలు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'shopping']
  },
  {
    id: 'einkäufe',
    type: 'noun',
    article: 'die',
    value: 'Einkäufe',
    singular_id: 'einkauf',
    plural_id: null,
    translations: {
      en: 'purchases',
      de: 'Einkäufe',
      es: 'compras',
      tr: 'alışverişler',
      te: 'కొనుగోలులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'shopping']
  },
  {
    id: 'elektroniker',
    type: 'noun',
    article: 'der',
    value: 'Elektroniker',
    singular_id: null,
    plural_id: 'elektroniker-plural',
    translations: {
      en: 'electronics technician',
      de: 'Elektroniker',
      es: 'técnico electrónico',
      tr: 'elektronik teknisyeni',
      te: 'ఎలక్ట్రానిక్స్ టెక్నీషియన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'elektroniker-plural',
    type: 'noun',
    article: 'die',
    value: 'Elektroniker',
    singular_id: 'elektroniker',
    plural_id: null,
    translations: {
      en: 'electronics technicians',
      de: 'Elektroniker',
      es: 'técnicos electrónicos',
      tr: 'elektronik teknisyenler',
      te: 'ఎలక్ట్రానిక్స్ టెక్నీషియన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'enkel',
    type: 'noun',
    article: 'der',
    value: 'Enkel',
    singular_id: null,
    plural_id: 'enkel-plural',
    translations: {
      en: 'grandson',
      de: 'Enkel',
      es: 'nieto',
      tr: 'erkek torun',
      te: 'మనవడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'enkel-plural',
    type: 'noun',
    article: 'die',
    value: 'Enkel',
    singular_id: 'enkel',
    plural_id: null,
    translations: {
      en: 'grandsons',
      de: 'Enkel',
      es: 'nietos',
      tr: 'erkek torunlar',
      te: 'మనవడు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'euro',
    type: 'noun',
    article: 'der',
    value: 'Euro',
    singular_id: null,
    plural_id: 'euro-plural',
    translations: {
      en: 'euro',
      de: 'Euro',
      es: 'euro',
      tr: 'avro',
      te: 'యూరో'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'numbers', 'shopping']
  },
  {
    id: 'euro-plural',
    type: 'noun',
    article: 'die',
    value: 'Euro',
    singular_id: 'euro',
    plural_id: null,
    translations: {
      en: 'euros',
      de: 'Euro',
      es: 'euros',
      tr: 'avrolar',
      te: 'యూరో'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'numbers', 'shopping']
  },
  {
    id: 'familienname',
    type: 'noun',
    article: 'der',
    value: 'Familienname',
    singular_id: null,
    plural_id: 'familiennamen',
    translations: {
      en: 'surname',
      de: 'Familienname',
      es: 'apellido',
      tr: 'soyadı',
      te: 'ఇంటి పేరు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'personal-info']
  },
  {
    id: 'familiennamen',
    type: 'noun',
    article: 'die',
    value: 'Familiennamen',
    singular_id: 'familienname',
    plural_id: null,
    translations: {
      en: 'surnames',
      de: 'Familiennamen',
      es: 'apellidos',
      tr: 'soyadları',
      te: 'ఇంటి పేరులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'personal-info']
  },
  {
    id: 'familienstand',
    type: 'noun',
    article: 'der',
    value: 'Familienstand',
    singular_id: null,
    plural_id: 'familienstände',
    translations: {
      en: 'marital status',
      de: 'Familienstand',
      es: 'estado civil',
      tr: 'medeni durum',
      te: 'వైవాహిక స్థితి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'personal-info']
  },
  {
    id: 'familienstände',
    type: 'noun',
    article: 'die',
    value: 'Familienstände',
    singular_id: 'familienstand',
    plural_id: null,
    translations: {
      en: 'marital statuses',
      de: 'Familienstände',
      es: 'estados civiles',
      tr: 'medeni durumlar',
      te: 'వైవాహిక స్థితిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'personal-info']
  },
  {
    id: 'februar',
    type: 'noun',
    article: 'der',
    value: 'Februar',
    singular_id: null,
    plural_id: 'februar-plural',
    translations: {
      en: 'February',
      de: 'Februar',
      es: 'febrero',
      tr: 'şubat',
      te: 'ఫిబ్రవరి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'februar-plural',
    type: 'noun',
    article: 'die',
    value: 'Februar',
    singular_id: 'februar',
    plural_id: null,
    translations: {
      en: 'Februaries',
      de: 'Februar',
      es: 'febreros',
      tr: 'şubatlar',
      te: 'ఫిబ్రవరి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'fehler',
    type: 'noun',
    article: 'der',
    value: 'Fehler',
    singular_id: null,
    plural_id: 'fehler-plural',
    translations: {
      en: 'mistake',
      de: 'Fehler',
      es: 'error',
      tr: 'hata',
      te: 'తప్పు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'fehler-plural',
    type: 'noun',
    article: 'die',
    value: 'Fehler',
    singular_id: 'fehler',
    plural_id: null,
    translations: {
      en: 'mistakes',
      de: 'Fehler',
      es: 'errores',
      tr: 'hatalar',
      te: 'తప్పు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'film',
    type: 'noun',
    article: 'der',
    value: 'Film',
    singular_id: null,
    plural_id: 'filme',
    translations: {
      en: 'film',
      de: 'Film',
      es: 'película',
      tr: 'film',
      te: 'సినిమా'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure']
  },
  {
    id: 'filme',
    type: 'noun',
    article: 'die',
    value: 'Filme',
    singular_id: 'film',
    plural_id: null,
    translations: {
      en: 'films',
      de: 'Filme',
      es: 'películas',
      tr: 'filmler',
      te: 'సినిమాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure']
  },
  {
    id: 'fisch',
    type: 'noun',
    article: 'der',
    value: 'Fisch',
    singular_id: null,
    plural_id: 'fische',
    translations: {
      en: 'fish',
      de: 'Fisch',
      es: 'pez / pescado',
      tr: 'balık',
      te: 'చేప'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'fische',
    type: 'noun',
    article: 'die',
    value: 'Fische',
    singular_id: 'fisch',
    plural_id: null,
    translations: {
      en: 'fishes',
      de: 'Fische',
      es: 'peces / pescados',
      tr: 'balıklar',
      te: 'చేపలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'fotograf',
    type: 'noun',
    article: 'der',
    value: 'Fotograf',
    singular_id: null,
    plural_id: 'fotografen',
    translations: {
      en: 'photographer',
      de: 'Fotograf',
      es: 'fotógrafo',
      tr: 'fotoğrafçı',
      te: 'ఫోటోగ్రాఫర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'people', 'professions', 'work']
  },
  {
    id: 'fotografen',
    type: 'noun',
    article: 'die',
    value: 'Fotografen',
    singular_id: 'fotograf',
    plural_id: null,
    translations: {
      en: 'photographers',
      de: 'Fotografen',
      es: 'fotógrafos',
      tr: 'fotoğrafçılar',
      te: 'ఫోటోగ్రాఫర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'people', 'professions', 'work']
  },
  {
    id: 'freitag',
    type: 'noun',
    article: 'der',
    value: 'Freitag',
    singular_id: null,
    plural_id: 'freitage',
    translations: {
      en: 'Friday',
      de: 'Freitag',
      es: 'viernes',
      tr: 'cuma',
      te: 'శుక్రవారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'freitage',
    type: 'noun',
    article: 'die',
    value: 'Freitage',
    singular_id: 'freitag',
    plural_id: null,
    translations: {
      en: 'Fridays',
      de: 'Freitage',
      es: 'viernes',
      tr: 'cumalar',
      te: 'శుక్రవారంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'freund',
    type: 'noun',
    article: 'der',
    value: 'Freund',
    singular_id: null,
    plural_id: 'freunde',
    translations: {
      en: 'friend',
      de: 'Freund',
      es: 'amigo',
      tr: 'arkadaş',
      te: 'స్నేహితుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'freunde',
    type: 'noun',
    article: 'die',
    value: 'Freunde',
    singular_id: 'freund',
    plural_id: null,
    translations: {
      en: 'friends',
      de: 'Freunde',
      es: 'amigos',
      tr: 'arkadaşlar',
      te: 'స్నేహితుడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'friseur',
    type: 'noun',
    article: 'der',
    value: 'Friseur',
    singular_id: null,
    plural_id: 'friseure',
    translations: {
      en: 'hairdresser',
      de: 'Friseur',
      es: 'peluquero',
      tr: 'kuaför',
      te: 'హెయిర్ డ్రెస్సర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'friseure',
    type: 'noun',
    article: 'die',
    value: 'Friseure',
    singular_id: 'friseur',
    plural_id: null,
    translations: {
      en: 'hairdressers',
      de: 'Friseure',
      es: 'peluqueros',
      tr: 'kuaförler',
      te: 'హెయిర్ డ్రెస్సర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'frühling',
    type: 'noun',
    article: 'der',
    value: 'Frühling',
    singular_id: null,
    plural_id: 'frühlinge',
    translations: {
      en: 'spring',
      de: 'Frühling',
      es: 'primavera',
      tr: 'ilkbahar',
      te: 'వసంత కాలం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'frühlinge',
    type: 'noun',
    article: 'die',
    value: 'Frühlinge',
    singular_id: 'frühling',
    plural_id: null,
    translations: {
      en: 'springs',
      de: 'Frühlinge',
      es: 'primaveras',
      tr: 'ilkbaharlar',
      te: 'వసంత కాలంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'führerschein',
    type: 'noun',
    article: 'der',
    value: 'Führerschein',
    singular_id: null,
    plural_id: 'führerscheine',
    translations: {
      en: 'driver\'s license',
      de: 'Führerschein',
      es: 'carné de conducir',
      tr: 'ehliyet',
      te: 'డ్రైవింగ్ లైసెన్స్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'transportation']
  },
  {
    id: 'führerscheine',
    type: 'noun',
    article: 'die',
    value: 'Führerscheine',
    singular_id: 'führerschein',
    plural_id: null,
    translations: {
      en: 'driver\'s licenses',
      de: 'Führerscheine',
      es: 'carnés de conducir',
      tr: 'ehliyetler',
      te: 'డ్రైవింగ్ లైసెన్స్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'transportation']
  },
  {
    id: 'fußball',
    type: 'noun',
    article: 'der',
    value: 'Fußball',
    singular_id: null,
    plural_id: 'fußbälle',
    translations: {
      en: 'soccer ball / football',
      de: 'Fußball',
      es: 'balón de fútbol / fútbol',
      tr: 'futbol topu / futbol',
      te: 'ఫుట్‌బాల్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'sports']
  },
  {
    id: 'fußbälle',
    type: 'noun',
    article: 'die',
    value: 'Fußbälle',
    singular_id: 'fußball',
    plural_id: null,
    translations: {
      en: 'soccer balls',
      de: 'Fußbälle',
      es: 'balones de fútbol',
      tr: 'futbol topları',
      te: 'ఫుట్‌బాల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'sports']
  },
  {
    id: 'geburtstag',
    type: 'noun',
    article: 'der',
    value: 'Geburtstag',
    singular_id: null,
    plural_id: 'geburtstage',
    translations: {
      en: 'birthday',
      de: 'Geburtstag',
      es: 'cumpleaños',
      tr: 'doğum günü',
      te: 'పుట్టినరోజు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['personal-info', 'time']
  },
  {
    id: 'geburtstage',
    type: 'noun',
    article: 'die',
    value: 'Geburtstage',
    singular_id: 'geburtstag',
    plural_id: null,
    translations: {
      en: 'birthdays',
      de: 'Geburtstage',
      es: 'cumpleaños',
      tr: 'doğum günleri',
      te: 'పుట్టినరోజులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['personal-info', 'time']
  },
  {
    id: 'geldbeutel',
    type: 'noun',
    article: 'der',
    value: 'Geldbeutel',
    singular_id: null,
    plural_id: 'geldbeutel-plural',
    translations: {
      en: 'wallet',
      de: 'Geldbeutel',
      es: 'monedero',
      tr: 'cüzdan',
      te: 'వాలెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household', 'money']
  },
  {
    id: 'geldbeutel-plural',
    type: 'noun',
    article: 'die',
    value: 'Geldbeutel',
    singular_id: 'geldbeutel',
    plural_id: null,
    translations: {
      en: 'wallets',
      de: 'Geldbeutel',
      es: 'monederos',
      tr: 'cüzdanlar',
      te: 'వాలెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household', 'money']
  },
  {
    id: 'großvater',
    type: 'noun',
    article: 'der',
    value: 'Großvater',
    singular_id: null,
    plural_id: 'großväter',
    translations: {
      en: 'grandfather',
      de: 'Großvater',
      es: 'abuelo',
      tr: 'büyükbaba',
      te: 'తాత'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'großväter',
    type: 'noun',
    article: 'die',
    value: 'Großväter',
    singular_id: 'großvater',
    plural_id: null,
    translations: {
      en: 'grandfathers',
      de: 'Großväter',
      es: 'abuelos',
      tr: 'büyükbabalar',
      te: 'తాతలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'hausmann',
    type: 'noun',
    article: 'der',
    value: 'Hausmann',
    singular_id: null,
    plural_id: 'hausmänner',
    translations: {
      en: 'househusband',
      de: 'Hausmann',
      es: 'amo de casa',
      tr: 'ev erkeği',
      te: 'గృహస్వామి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people', 'professions', 'work']
  },
  {
    id: 'hausmänner',
    type: 'noun',
    article: 'die',
    value: 'Hausmänner',
    singular_id: 'hausmann',
    plural_id: null,
    translations: {
      en: 'househusbands',
      de: 'Hausmänner',
      es: 'amos de casa',
      tr: 'ev erkekleri',
      te: 'గృహిణిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people', 'professions', 'work']
  },
  {
    id: 'herbst',
    type: 'noun',
    article: 'der',
    value: 'Herbst',
    singular_id: null,
    plural_id: 'herbste',
    translations: {
      en: 'autumn',
      de: 'Herbst',
      es: 'otoño',
      tr: 'sonbahar',
      te: 'శరదృతువు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'herbste',
    type: 'noun',
    article: 'die',
    value: 'Herbste',
    singular_id: 'herbst',
    plural_id: null,
    translations: {
      en: 'autumns',
      de: 'Herbste',
      es: 'otoños',
      tr: 'sonbaharlar',
      te: 'శరదృతువులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'herr',
    type: 'noun',
    article: 'der',
    value: 'Herr',
    singular_id: null,
    plural_id: 'herren',
    translations: {
      en: 'mister',
      de: 'Herr',
      es: 'señor',
      tr: 'bay',
      te: 'పెద్దమనిషి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'herren',
    type: 'noun',
    article: 'die',
    value: 'Herren',
    singular_id: 'herr',
    plural_id: null,
    translations: {
      en: 'misters',
      de: 'Herren',
      es: 'señores',
      tr: 'baylar',
      te: 'పెద్దమనిషిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'ingenieur',
    type: 'noun',
    article: 'der',
    value: 'Ingenieur',
    singular_id: null,
    plural_id: 'ingenieure',
    translations: {
      en: 'engineer',
      de: 'Ingenieur',
      es: 'ingeniero',
      tr: 'mühendis',
      te: 'ఇంజనీర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'ingenieure',
    type: 'noun',
    article: 'die',
    value: 'Ingenieure',
    singular_id: 'ingenieur',
    plural_id: null,
    translations: {
      en: 'engineers',
      de: 'Ingenieure',
      es: 'ingenieros',
      tr: 'mühendisler',
      te: 'ఇంజనీర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'januar',
    type: 'noun',
    article: 'der',
    value: 'Januar',
    singular_id: null,
    plural_id: 'januar-plural',
    translations: {
      en: 'January',
      de: 'Januar',
      es: 'enero',
      tr: 'ocak',
      te: 'జనవరి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'januar-plural',
    type: 'noun',
    article: 'die',
    value: 'Januar',
    singular_id: 'januar',
    plural_id: null,
    translations: {
      en: 'Januaries',
      de: 'Januar',
      es: 'eneros',
      tr: 'ocaklar',
      te: 'జనవరి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'joghurt',
    type: 'noun',
    article: 'der',
    value: 'Joghurt',
    singular_id: null,
    plural_id: 'joghurts',
    translations: {
      en: 'yogurt',
      de: 'Joghurt',
      es: 'yogur',
      tr: 'yoğurt',
      te: 'పెరుగు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'joghurts',
    type: 'noun',
    article: 'die',
    value: 'Joghurts',
    singular_id: 'joghurt',
    plural_id: null,
    translations: {
      en: 'yogurts',
      de: 'Joghurts',
      es: 'yogures',
      tr: 'yoğurtlar',
      te: 'పెరుగులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'jugendliche',
    type: 'noun',
    article: 'der',
    value: 'Jugendliche',
    singular_id: null,
    plural_id: 'jugendlichen',
    translations: {
      en: 'teenager',
      de: 'Jugendliche',
      es: 'joven',
      tr: 'genç',
      te: 'యువకుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'jugendlichen',
    type: 'noun',
    article: 'die',
    value: 'Jugendlichen',
    singular_id: 'jugendliche',
    plural_id: null,
    translations: {
      en: 'teenagers',
      de: 'Jugendlichen',
      es: 'jóvenes',
      tr: 'gençler',
      te: 'యువకుడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'juli',
    type: 'noun',
    article: 'der',
    value: 'Juli',
    singular_id: null,
    plural_id: 'juli-plural',
    translations: {
      en: 'July',
      de: 'Juli',
      es: 'julio',
      tr: 'temmuz',
      te: 'జూలై'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'juli-plural',
    type: 'noun',
    article: 'die',
    value: 'Juli',
    singular_id: 'juli',
    plural_id: null,
    translations: {
      en: 'Julies',
      de: 'Juli',
      es: 'julios',
      tr: 'temmuzlar',
      te: 'జూలై'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'juni',
    type: 'noun',
    article: 'der',
    value: 'Juni',
    singular_id: null,
    plural_id: 'juni-plural',
    translations: {
      en: 'June',
      de: 'Juni',
      es: 'junio',
      tr: 'haziran',
      te: 'జూన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'juni-plural',
    type: 'noun',
    article: 'die',
    value: 'Juni',
    singular_id: 'juni',
    plural_id: null,
    translations: {
      en: 'Junes',
      de: 'Juni',
      es: 'junios',
      tr: 'haziranlar',
      te: 'జూన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'kaffee',
    type: 'noun',
    article: 'der',
    value: 'Kaffee',
    singular_id: null,
    plural_id: 'kaffees',
    translations: {
      en: 'coffee',
      de: 'Kaffee',
      es: 'café',
      tr: 'kahve',
      te: 'కాఫీ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'kaffees',
    type: 'noun',
    article: 'die',
    value: 'Kaffees',
    singular_id: 'kaffee',
    plural_id: null,
    translations: {
      en: 'coffees',
      de: 'Kaffees',
      es: 'cafés',
      tr: 'kahveler',
      te: 'కాఫీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'kalender',
    type: 'noun',
    article: 'der',
    value: 'Kalender',
    singular_id: null,
    plural_id: 'kalender-plural',
    translations: {
      en: 'calendar',
      de: 'Kalender',
      es: 'calendario',
      tr: 'takvim',
      te: 'క్యాలెండర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'household', 'time']
  },
  {
    id: 'kalender-plural',
    type: 'noun',
    article: 'die',
    value: 'Kalender',
    singular_id: 'kalender',
    plural_id: null,
    translations: {
      en: 'calendars',
      de: 'Kalender',
      es: 'calendarios',
      tr: 'takvimler',
      te: 'క్యాలెండర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'household', 'time']
  },
  {
    id: 'käse',
    type: 'noun',
    article: 'der',
    value: 'Käse',
    singular_id: null,
    plural_id: 'käse-plural',
    translations: {
      en: 'cheese',
      de: 'Käse',
      es: 'queso',
      tr: 'peynir',
      te: 'జున్ను'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'käse-plural',
    type: 'noun',
    article: 'die',
    value: 'Käse',
    singular_id: 'käse',
    plural_id: null,
    translations: {
      en: 'cheeses',
      de: 'Käse',
      es: 'quesos',
      tr: 'peynirler',
      te: 'జున్ను'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'kellner',
    type: 'noun',
    article: 'der',
    value: 'Kellner',
    singular_id: null,
    plural_id: 'kellner-plural',
    translations: {
      en: 'waiter',
      de: 'Kellner',
      es: 'camarero',
      tr: 'garson',
      te: 'వెయిటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'kellner-plural',
    type: 'noun',
    article: 'die',
    value: 'Kellner',
    singular_id: 'kellner',
    plural_id: null,
    translations: {
      en: 'waiters',
      de: 'Kellner',
      es: 'camareros',
      tr: 'garsonlar',
      te: 'వెయిటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'kindergarten',
    type: 'noun',
    article: 'der',
    value: 'Kindergarten',
    singular_id: null,
    plural_id: 'kindergärten',
    translations: {
      en: 'kindergarten',
      de: 'Kindergarten',
      es: 'jardín de infancia',
      tr: 'anaokulu',
      te: 'కిండర్‌గార్టెన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'locations']
  },
  {
    id: 'kindergärten',
    type: 'noun',
    article: 'die',
    value: 'Kindergärten',
    singular_id: 'kindergarten',
    plural_id: null,
    translations: {
      en: 'kindergartens',
      de: 'Kindergärten',
      es: 'jardines de infancia',
      tr: 'anaokulları',
      te: 'కిండర్‌గార్టెన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'locations']
  },
  {
    id: 'kleber',
    type: 'noun',
    article: 'der',
    value: 'Kleber',
    singular_id: null,
    plural_id: 'kleber-plural',
    translations: {
      en: 'glue',
      de: 'Kleber',
      es: 'pegamento',
      tr: 'yapıştırıcı',
      te: 'జిగురు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'kleber-plural',
    type: 'noun',
    article: 'die',
    value: 'Kleber',
    singular_id: 'kleber',
    plural_id: null,
    translations: {
      en: 'glues',
      de: 'Kleber',
      es: 'pegamentos',
      tr: 'yapıştırıcılar',
      te: 'జిగురు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'koch',
    type: 'noun',
    article: 'der',
    value: 'Koch',
    singular_id: null,
    plural_id: 'köche',
    translations: {
      en: 'cook',
      de: 'Koch',
      es: 'cocinero',
      tr: 'aşçı',
      te: 'వంటమనిషి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'köche',
    type: 'noun',
    article: 'die',
    value: 'Köche',
    singular_id: 'koch',
    plural_id: null,
    translations: {
      en: 'cooks',
      de: 'Köche',
      es: 'cocineros',
      tr: 'aşçılar',
      te: 'వంటమనిషిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'koffer',
    type: 'noun',
    article: 'der',
    value: 'Koffer',
    singular_id: null,
    plural_id: 'koffer-plural',
    translations: {
      en: 'suitcase',
      de: 'Koffer',
      es: 'maleta',
      tr: 'bavul',
      te: 'సూట్‌కేసు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'travel']
  },
  {
    id: 'koffer-plural',
    type: 'noun',
    article: 'die',
    value: 'Koffer',
    singular_id: 'koffer',
    plural_id: null,
    translations: {
      en: 'suitcases',
      de: 'Koffer',
      es: 'maletas',
      tr: 'bavullar',
      te: 'సూట్‌కేసు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'travel']
  },
  {
    id: 'kollege',
    type: 'noun',
    article: 'der',
    value: 'Kollege',
    singular_id: null,
    plural_id: 'kollegen',
    translations: {
      en: 'colleague',
      de: 'Kollege',
      es: 'compañero',
      tr: 'iş arkadaşı',
      te: 'సహోద్యోగి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'work']
  },
  {
    id: 'kollegen',
    type: 'noun',
    article: 'die',
    value: 'Kollegen',
    singular_id: 'kollege',
    plural_id: null,
    translations: {
      en: 'colleagues',
      de: 'Kollegen',
      es: 'compañeros',
      tr: 'iş arkadaşları',
      te: 'సహోద్యోగిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'work']
  },
  {
    id: 'krankenpfleger',
    type: 'noun',
    article: 'der',
    value: 'Krankenpfleger',
    singular_id: null,
    plural_id: 'krankenpfleger-plural',
    translations: {
      en: 'male nurse',
      de: 'Krankenpfleger',
      es: 'enfermero',
      tr: 'erkek hemşire',
      te: 'నర్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'krankenpfleger-plural',
    type: 'noun',
    article: 'die',
    value: 'Krankenpfleger',
    singular_id: 'krankenpfleger',
    plural_id: null,
    translations: {
      en: 'male nurses',
      de: 'Krankenpfleger',
      es: 'enfermeros',
      tr: 'erkek hemşireler',
      te: 'నర్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'kuchen',
    type: 'noun',
    article: 'der',
    value: 'Kuchen',
    singular_id: null,
    plural_id: 'kuchen-plural',
    translations: {
      en: 'cake',
      de: 'Kuchen',
      es: 'pastel',
      tr: 'kek',
      te: 'కేక్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'kuchen-plural',
    type: 'noun',
    article: 'die',
    value: 'Kuchen',
    singular_id: 'kuchen',
    plural_id: null,
    translations: {
      en: 'cakes',
      de: 'Kuchen',
      es: 'pasteles',
      tr: 'kekler',
      te: 'కేక్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'kugelschreiber',
    type: 'noun',
    article: 'der',
    value: 'Kugelschreiber',
    singular_id: null,
    plural_id: 'kugelschreiber-plural',
    translations: {
      en: 'ballpoint pen',
      de: 'Kugelschreiber',
      es: 'bolígrafo',
      tr: 'tükenmez kalem',
      te: 'పెన్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'household']
  },
  {
    id: 'kugelschreiber-plural',
    type: 'noun',
    article: 'die',
    value: 'Kugelschreiber',
    singular_id: 'kugelschreiber',
    plural_id: null,
    translations: {
      en: 'ballpoint pens',
      de: 'Kugelschreiber',
      es: 'bolígrafos',
      tr: 'tükenmez kalemler',
      te: 'పెన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'household']
  },
  {
    id: 'kunde',
    type: 'noun',
    article: 'der',
    value: 'Kunde',
    singular_id: null,
    plural_id: 'kunden',
    translations: {
      en: 'customer',
      de: 'Kunde',
      es: 'cliente',
      tr: 'müşteri',
      te: 'కస్టమర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'kunden',
    type: 'noun',
    article: 'die',
    value: 'Kunden',
    singular_id: 'kunde',
    plural_id: null,
    translations: {
      en: 'customers',
      de: 'Kunden',
      es: 'clientes',
      tr: 'müşteriler',
      te: 'కస్టమర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'kurs',
    type: 'noun',
    article: 'der',
    value: 'Kurs',
    singular_id: null,
    plural_id: 'kurse',
    translations: {
      en: 'course',
      de: 'Kurs',
      es: 'curso',
      tr: 'kurs',
      te: 'కోర్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'work']
  },
  {
    id: 'kurse',
    type: 'noun',
    article: 'die',
    value: 'Kurse',
    singular_id: 'kurs',
    plural_id: null,
    translations: {
      en: 'courses',
      de: 'Kurse',
      es: 'cursos',
      tr: 'kurslar',
      te: 'కోర్సులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'work']
  },
  {
    id: 'laden',
    type: 'noun',
    article: 'der',
    value: 'Laden',
    singular_id: null,
    plural_id: 'läden',
    translations: {
      en: 'shop',
      de: 'Laden',
      es: 'tienda',
      tr: 'dükkan',
      te: 'దుకాణం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'shopping', 'work']
  },
  {
    id: 'läden',
    type: 'noun',
    article: 'die',
    value: 'Läden',
    singular_id: 'laden',
    plural_id: null,
    translations: {
      en: 'shops',
      de: 'Läden',
      es: 'tiendas',
      tr: 'dükkanlar',
      te: 'దుకాణంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'shopping', 'work']
  },
  {
    id: 'laptop',
    type: 'noun',
    article: 'der',
    value: 'Laptop',
    singular_id: null,
    plural_id: 'laptops',
    translations: {
      en: 'laptop',
      de: 'Laptop',
      es: 'portátil',
      tr: 'dizüstü bilgisayar',
      te: 'ల్యాప్‌టాప్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'laptops',
    type: 'noun',
    article: 'die',
    value: 'Laptops',
    singular_id: 'laptop',
    plural_id: null,
    translations: {
      en: 'laptops',
      de: 'Laptops',
      es: 'portátiles',
      tr: 'dizüstü bilgisayarlar',
      te: 'ల్యాప్‌టాప్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'technology']
  },
  {
    id: 'lehrer',
    type: 'noun',
    article: 'der',
    value: 'Lehrer',
    singular_id: null,
    plural_id: 'lehrer-plural',
    translations: {
      en: 'teacher',
      de: 'Lehrer',
      es: 'profesor',
      tr: 'öğretmen',
      te: 'ఉపాధ్యాయుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'people', 'professions', 'work']
  },
  {
    id: 'lehrer-plural',
    type: 'noun',
    article: 'die',
    value: 'Lehrer',
    singular_id: 'lehrer',
    plural_id: null,
    translations: {
      en: 'teachers',
      de: 'Lehrer',
      es: 'profesores',
      tr: 'öğretmenler',
      te: 'ఉపాధ్యాయుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'people', 'professions', 'work']
  },
  {
    id: 'liter',
    type: 'noun',
    article: 'der',
    value: 'Liter',
    singular_id: null,
    plural_id: 'liter-plural',
    translations: {
      en: 'liter',
      de: 'Liter',
      es: 'litro',
      tr: 'litre',
      te: 'లీటరు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'liter-plural',
    type: 'noun',
    article: 'die',
    value: 'Liter',
    singular_id: 'liter',
    plural_id: null,
    translations: {
      en: 'liters',
      de: 'Liter',
      es: 'litros',
      tr: 'litreler',
      te: 'లీటరు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'mai',
    type: 'noun',
    article: 'der',
    value: 'Mai',
    singular_id: null,
    plural_id: 'mai-plural',
    translations: {
      en: 'May',
      de: 'Mai',
      es: 'mayo',
      tr: 'mayıs',
      te: 'మే'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'mai-plural',
    type: 'noun',
    article: 'die',
    value: 'Mai',
    singular_id: 'mai',
    plural_id: null,
    translations: {
      en: 'Mays',
      de: 'Mai',
      es: 'mayos',
      tr: 'mayıslar',
      te: 'మే'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'mann',
    type: 'noun',
    article: 'der',
    value: 'Mann',
    singular_id: null,
    plural_id: 'männer',
    translations: {
      en: 'man',
      de: 'Mann',
      es: 'hombre',
      tr: 'adam',
      te: 'మనిషి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'männer',
    type: 'noun',
    article: 'die',
    value: 'Männer',
    singular_id: 'mann',
    plural_id: null,
    translations: {
      en: 'men',
      de: 'Männer',
      es: 'hombres',
      tr: 'adamlar',
      te: 'మనిషిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'märz',
    type: 'noun',
    article: 'der',
    value: 'März',
    singular_id: null,
    plural_id: 'märz-plural',
    translations: {
      en: 'March',
      de: 'März',
      es: 'marzo',
      tr: 'mart',
      te: 'మార్చి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'märz-plural',
    type: 'noun',
    article: 'die',
    value: 'März',
    singular_id: 'märz',
    plural_id: null,
    translations: {
      en: 'Marches',
      de: 'März',
      es: 'marzos',
      tr: 'martlar',
      te: 'మార్చి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'mittag',
    type: 'noun',
    article: 'der',
    value: 'Mittag',
    singular_id: null,
    plural_id: 'mittage',
    translations: {
      en: 'noon',
      de: 'Mittag',
      es: 'mediodía',
      tr: 'öğle',
      te: 'మధ్యాహ్నం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'mittage',
    type: 'noun',
    article: 'die',
    value: 'Mittage',
    singular_id: 'mittag',
    plural_id: null,
    translations: {
      en: 'noons',
      de: 'Mittage',
      es: 'mediodías',
      tr: 'öğleler',
      te: 'మధ్యాహ్నంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'mittwoch',
    type: 'noun',
    article: 'der',
    value: 'Mittwoch',
    singular_id: null,
    plural_id: 'mittwoche',
    translations: {
      en: 'Wednesday',
      de: 'Mittwoch',
      es: 'miércoles',
      tr: 'çarşamba',
      te: 'బుధవారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'mittwoche',
    type: 'noun',
    article: 'die',
    value: 'Mittwoche',
    singular_id: 'mittwoch',
    plural_id: null,
    translations: {
      en: 'Wednesdays',
      de: 'Mittwoche',
      es: 'miércoles',
      tr: 'çarşambalar',
      te: 'బుధవారంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'monat',
    type: 'noun',
    article: 'der',
    value: 'Monat',
    singular_id: null,
    plural_id: 'monate',
    translations: {
      en: 'month',
      de: 'Monat',
      es: 'mes',
      tr: 'ay',
      te: 'నెల'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'monate',
    type: 'noun',
    article: 'die',
    value: 'Monate',
    singular_id: 'monat',
    plural_id: null,
    translations: {
      en: 'months',
      de: 'Monate',
      es: 'meses',
      tr: 'aylar',
      te: 'నెలలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'montag',
    type: 'noun',
    article: 'der',
    value: 'Montag',
    singular_id: null,
    plural_id: 'montage',
    translations: {
      en: 'Monday',
      de: 'Montag',
      es: 'lunes',
      tr: 'pazartesi',
      te: 'సోమవారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'montage',
    type: 'noun',
    article: 'die',
    value: 'Montage',
    singular_id: 'montag',
    plural_id: null,
    translations: {
      en: 'Mondays',
      de: 'Montage',
      es: 'lunes',
      tr: 'pazartesiler',
      te: 'సోమవారంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'morgen',
    type: 'noun',
    article: 'der',
    value: 'Morgen',
    singular_id: null,
    plural_id: 'morgen-plural',
    translations: {
      en: 'morning',
      de: 'Morgen',
      es: 'mañana',
      tr: 'sabah',
      te: 'ఉదయం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'morgen-plural',
    type: 'noun',
    article: 'die',
    value: 'Morgen',
    singular_id: 'morgen',
    plural_id: null,
    translations: {
      en: 'mornings',
      de: 'Morgen',
      es: 'mañanas',
      tr: 'sabahlar',
      te: 'ఉదయం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'nachbar',
    type: 'noun',
    article: 'der',
    value: 'Nachbar',
    singular_id: null,
    plural_id: 'nachbarn',
    translations: {
      en: 'neighbor',
      de: 'Nachbar',
      es: 'vecino',
      tr: 'komşu',
      te: 'పొరుగువాడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'nachbarn',
    type: 'noun',
    article: 'die',
    value: 'Nachbarn',
    singular_id: 'nachbar',
    plural_id: null,
    translations: {
      en: 'neighbors',
      de: 'Nachbarn',
      es: 'vecinos',
      tr: 'komşular',
      te: 'పొరుగువాడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'nachmittag',
    type: 'noun',
    article: 'der',
    value: 'Nachmittag',
    singular_id: null,
    plural_id: 'nachmittage',
    translations: {
      en: 'afternoon',
      de: 'Nachmittag',
      es: 'tarde',
      tr: 'öğleden sonra',
      te: 'మధ్యాహ్నం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'nachmittage',
    type: 'noun',
    article: 'die',
    value: 'Nachmittage',
    singular_id: 'nachmittag',
    plural_id: null,
    translations: {
      en: 'afternoons',
      de: 'Nachmittage',
      es: 'tardes',
      tr: 'öğleden sonralar',
      te: 'మధ్యాహ్నంలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'nachtisch',
    type: 'noun',
    article: 'der',
    value: 'Nachtisch',
    singular_id: null,
    plural_id: 'nachtische',
    translations: {
      en: 'dessert',
      de: 'Nachtisch',
      es: 'postre',
      tr: 'tatlı',
      te: 'డెజర్ట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'nachtische',
    type: 'noun',
    article: 'die',
    value: 'Nachtische',
    singular_id: 'nachtisch',
    plural_id: null,
    translations: {
      en: 'desserts',
      de: 'Nachtische',
      es: 'postres',
      tr: 'tatlılar',
      te: 'డెజర్ట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'name',
    type: 'noun',
    article: 'der',
    value: 'Name',
    singular_id: null,
    plural_id: 'namen',
    translations: {
      en: 'name',
      de: 'Name',
      es: 'nombre',
      tr: 'ad',
      te: 'పేరు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'language', 'people', 'personal-info']
  },
  {
    id: 'namen',
    type: 'noun',
    article: 'die',
    value: 'Namen',
    singular_id: 'name',
    plural_id: null,
    translations: {
      en: 'names',
      de: 'Namen',
      es: 'nombres',
      tr: 'adlar',
      te: 'పేరులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'language', 'people', 'personal-info']
  },
  {
    id: 'november',
    type: 'noun',
    article: 'der',
    value: 'November',
    singular_id: null,
    plural_id: 'november-plural',
    translations: {
      en: 'November',
      de: 'November',
      es: 'noviembre',
      tr: 'kasım',
      te: 'నవంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'november-plural',
    type: 'noun',
    article: 'die',
    value: 'November',
    singular_id: 'november',
    plural_id: null,
    translations: {
      en: 'Novembers',
      de: 'November',
      es: 'noviembres',
      tr: 'kasımlar',
      te: 'నవంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'oktober',
    type: 'noun',
    article: 'der',
    value: 'Oktober',
    singular_id: null,
    plural_id: 'oktober-plural',
    translations: {
      en: 'October',
      de: 'Oktober',
      es: 'octubre',
      tr: 'ekim',
      te: 'అక్టోబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'oktober-plural',
    type: 'noun',
    article: 'die',
    value: 'Oktober',
    singular_id: 'oktober',
    plural_id: null,
    translations: {
      en: 'Octobers',
      de: 'Oktober',
      es: 'octubres',
      tr: 'ekimler',
      te: 'అక్టోబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'onkel',
    type: 'noun',
    article: 'der',
    value: 'Onkel',
    singular_id: null,
    plural_id: 'onkel-plural',
    translations: {
      en: 'uncle',
      de: 'Onkel',
      es: 'tío',
      tr: 'amca',
      te: 'మామయ్య'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'onkel-plural',
    type: 'noun',
    article: 'die',
    value: 'Onkel',
    singular_id: 'onkel',
    plural_id: null,
    translations: {
      en: 'uncles',
      de: 'Onkel',
      es: 'tíos',
      tr: 'amcalar',
      te: 'మామయ్య'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'opa',
    type: 'noun',
    article: 'der',
    value: 'Opa',
    singular_id: null,
    plural_id: 'opas',
    translations: {
      en: 'grandpa',
      de: 'Opa',
      es: 'abuelo',
      tr: 'dede',
      te: 'తాతయ్య'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'opas',
    type: 'noun',
    article: 'die',
    value: 'Opas',
    singular_id: 'opa',
    plural_id: null,
    translations: {
      en: 'grandpas',
      de: 'Opas',
      es: 'abuelos',
      tr: 'dedeler',
      te: 'తాతయ్యలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'partner',
    type: 'noun',
    article: 'der',
    value: 'Partner',
    singular_id: null,
    plural_id: 'partner-plural',
    translations: {
      en: 'partner',
      de: 'Partner',
      es: 'pareja',
      tr: 'partner',
      te: 'భాగస్వామి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'partner-plural',
    type: 'noun',
    article: 'die',
    value: 'Partner',
    singular_id: 'partner',
    plural_id: null,
    translations: {
      en: 'partners',
      de: 'Partner',
      es: 'parejas',
      tr: 'partnerler',
      te: 'భాగస్వామి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'pfannkuchen',
    type: 'noun',
    article: 'der',
    value: 'Pfannkuchen',
    singular_id: null,
    plural_id: 'pfannkuchen-plural',
    translations: {
      en: 'pancake',
      de: 'Pfannkuchen',
      es: 'tortita',
      tr: 'krep',
      te: 'పాన్‌కేక్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'pfannkuchen-plural',
    type: 'noun',
    article: 'die',
    value: 'Pfannkuchen',
    singular_id: 'pfannkuchen',
    plural_id: null,
    translations: {
      en: 'pancakes',
      de: 'Pfannkuchen',
      es: 'tortitas',
      tr: 'krepler',
      te: 'పాన్‌కేక్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'plan',
    type: 'noun',
    article: 'der',
    value: 'Plan',
    singular_id: null,
    plural_id: 'pläne',
    translations: {
      en: 'plan',
      de: 'Plan',
      es: 'plan',
      tr: 'plan',
      te: 'ప్రణాళిక'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'pläne',
    type: 'noun',
    article: 'die',
    value: 'Pläne',
    singular_id: 'plan',
    plural_id: null,
    translations: {
      en: 'plans',
      de: 'Pläne',
      es: 'planes',
      tr: 'planlar',
      te: 'ప్రణాళికలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'polizist',
    type: 'noun',
    article: 'der',
    value: 'Polizist',
    singular_id: null,
    plural_id: 'polizisten',
    translations: {
      en: 'police officer',
      de: 'Polizist',
      es: 'policía',
      tr: 'polis',
      te: 'పోలీసు అధికారి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'polizisten',
    type: 'noun',
    article: 'die',
    value: 'Polizisten',
    singular_id: 'polizist',
    plural_id: null,
    translations: {
      en: 'police officers',
      de: 'Polizisten',
      es: 'policías',
      tr: 'polisler',
      te: 'పోలీసు అధికారులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'punkt',
    type: 'noun',
    article: 'der',
    value: 'Punkt',
    singular_id: null,
    plural_id: 'punkte',
    translations: {
      en: 'point',
      de: 'Punkt',
      es: 'punto',
      tr: 'nokta',
      te: 'చుక్క'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
  },
  {
    id: 'punkte',
    type: 'noun',
    article: 'die',
    value: 'Punkte',
    singular_id: 'punkt',
    plural_id: null,
    translations: {
      en: 'points',
      de: 'Punkte',
      es: 'puntos',
      tr: 'noktalar',
      te: 'చుక్కలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
  },
  {
    id: 'quatsch',
    type: 'noun',
    article: 'der',
    value: 'Quatsch',
    singular_id: null,
    plural_id: 'quatsch-plural',
    translations: {
      en: 'nonsense',
      de: 'Quatsch',
      es: 'tontería',
      tr: 'saçmalık',
      te: 'అర్ధంలేని మాట'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'quatsch-plural',
    type: 'noun',
    article: 'die',
    value: 'Quatsch',
    singular_id: 'quatsch',
    plural_id: null,
    translations: {
      en: 'nonsense',
      de: 'Quatsch',
      es: 'tonterías',
      tr: 'saçmalıklar',
      te: 'అర్ధంలేని మాట'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'reis',
    type: 'noun',
    article: 'der',
    value: 'Reis',
    singular_id: null,
    plural_id: 'reis-plural',
    translations: {
      en: 'rice',
      de: 'Reis',
      es: 'arroz',
      tr: 'pirinç',
      te: 'బియ్యం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'reis-plural',
    type: 'noun',
    article: 'die',
    value: 'Reis',
    singular_id: 'reis',
    plural_id: null,
    translations: {
      en: 'rices',
      de: 'Reis',
      es: 'arroces',
      tr: 'pirinçler',
      te: 'బియ్యం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'rucksack',
    type: 'noun',
    article: 'der',
    value: 'Rucksack',
    singular_id: null,
    plural_id: 'rucksäcke',
    translations: {
      en: 'backpack',
      de: 'Rucksack',
      es: 'mochila',
      tr: 'sırt çantası',
      te: 'బ్యాక్‌ప్యాక్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household', 'travel']
  },
  {
    id: 'rucksäcke',
    type: 'noun',
    article: 'die',
    value: 'Rucksäcke',
    singular_id: 'rucksack',
    plural_id: null,
    translations: {
      en: 'backpacks',
      de: 'Rucksäcke',
      es: 'mochilas',
      tr: 'sırt çantaları',
      te: 'బ్యాక్‌ప్యాక్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household', 'travel']
  },
  {
    id: 'saft',
    type: 'noun',
    article: 'der',
    value: 'Saft',
    singular_id: null,
    plural_id: 'säfte',
    translations: {
      en: 'juice',
      de: 'Saft',
      es: 'zumo',
      tr: 'meyve suyu',
      te: 'జ్యూస్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'säfte',
    type: 'noun',
    article: 'die',
    value: 'Säfte',
    singular_id: 'saft',
    plural_id: null,
    translations: {
      en: 'juices',
      de: 'Säfte',
      es: 'zumos',
      tr: 'meyve suları',
      te: 'జ్యూస్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'salat',
    type: 'noun',
    article: 'der',
    value: 'Salat',
    singular_id: null,
    plural_id: 'salate',
    translations: {
      en: 'salad',
      de: 'Salat',
      es: 'ensalada',
      tr: 'salata',
      te: 'సలాడ్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'salate',
    type: 'noun',
    article: 'die',
    value: 'Salate',
    singular_id: 'salat',
    plural_id: null,
    translations: {
      en: 'salads',
      de: 'Salate',
      es: 'ensaladas',
      tr: 'salatalar',
      te: 'సలాడ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'samstag',
    type: 'noun',
    article: 'der',
    value: 'Samstag',
    singular_id: null,
    plural_id: 'samstage',
    translations: {
      en: 'Saturday',
      de: 'Samstag',
      es: 'sábado',
      tr: 'cumartesi',
      te: 'శనివారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'samstage',
    type: 'noun',
    article: 'die',
    value: 'Samstage',
    singular_id: 'samstag',
    plural_id: null,
    translations: {
      en: 'Saturdays',
      de: 'Samstage',
      es: 'sábados',
      tr: 'cumartesiler',
      te: 'శనివారాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'sänger',
    type: 'noun',
    article: 'der',
    value: 'Sänger',
    singular_id: null,
    plural_id: 'sänger-plural',
    translations: {
      en: 'singer',
      de: 'Sänger',
      es: 'cantante',
      tr: 'şarkıcı',
      te: 'గాయకుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music', 'people', 'professions', 'work']
  },
  {
    id: 'sänger-plural',
    type: 'noun',
    article: 'die',
    value: 'Sänger',
    singular_id: 'sänger',
    plural_id: null,
    translations: {
      en: 'singers',
      de: 'Sänger',
      es: 'cantantes',
      tr: 'şarkıcılar',
      te: 'గాయకులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music', 'people', 'professions', 'work']
  },
  {
    id: 'satz',
    type: 'noun',
    article: 'der',
    value: 'Satz',
    singular_id: null,
    plural_id: 'sätze',
    translations: {
      en: 'sentence',
      de: 'Satz',
      es: 'frase',
      tr: 'cümle',
      te: 'వాక్యం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'education', 'language']
  },
  {
    id: 'sätze',
    type: 'noun',
    article: 'die',
    value: 'Sätze',
    singular_id: 'satz',
    plural_id: null,
    translations: {
      en: 'sentences',
      de: 'Sätze',
      es: 'frases',
      tr: 'cümleler',
      te: 'వాక్యాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'education', 'language']
  },
  {
    id: 'schauspieler',
    type: 'noun',
    article: 'der',
    value: 'Schauspieler',
    singular_id: null,
    plural_id: 'schauspieler-plural',
    translations: {
      en: 'actor',
      de: 'Schauspieler',
      es: 'actor',
      tr: 'oyuncu',
      te: 'నటుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'people', 'professions', 'work']
  },
  {
    id: 'schauspieler-plural',
    type: 'noun',
    article: 'die',
    value: 'Schauspieler',
    singular_id: 'schauspieler',
    plural_id: null,
    translations: {
      en: 'actors',
      de: 'Schauspieler',
      es: 'actores',
      tr: 'oyuncular',
      te: 'నటులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'people', 'professions', 'work']
  },
  {
    id: 'schinken',
    type: 'noun',
    article: 'der',
    value: 'Schinken',
    singular_id: null,
    plural_id: 'schinken-plural',
    translations: {
      en: 'ham',
      de: 'Schinken',
      es: 'jamón',
      tr: 'jambon',
      te: 'హామ్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'schinken-plural',
    type: 'noun',
    article: 'die',
    value: 'Schinken',
    singular_id: 'schinken',
    plural_id: null,
    translations: {
      en: 'hams',
      de: 'Schinken',
      es: 'jamones',
      tr: 'jambonlar',
      te: 'హామ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'schirm',
    type: 'noun',
    article: 'der',
    value: 'Schirm',
    singular_id: null,
    plural_id: 'schirme',
    translations: {
      en: 'umbrella',
      de: 'Schirm',
      es: 'paraguas',
      tr: 'şemsiye',
      te: 'గొడుగు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household']
  },
  {
    id: 'schirme',
    type: 'noun',
    article: 'die',
    value: 'Schirme',
    singular_id: 'schirm',
    plural_id: null,
    translations: {
      en: 'umbrellas',
      de: 'Schirme',
      es: 'paraguas',
      tr: 'şemsiyeler',
      te: 'గొడుగులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household']
  },
  {
    id: 'schlüssel',
    type: 'noun',
    article: 'der',
    value: 'Schlüssel',
    singular_id: null,
    plural_id: 'schlüssel-plural',
    translations: {
      en: 'key',
      de: 'Schlüssel',
      es: 'llave',
      tr: 'anahtar',
      te: 'తాళం చెవి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'schlüssel-plural',
    type: 'noun',
    article: 'die',
    value: 'Schlüssel',
    singular_id: 'schlüssel',
    plural_id: null,
    translations: {
      en: 'keys',
      de: 'Schlüssel',
      es: 'llaves',
      tr: 'anahtarlar',
      te: 'తాళం చెవులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'september',
    type: 'noun',
    article: 'der',
    value: 'September',
    singular_id: null,
    plural_id: 'september-plural',
    translations: {
      en: 'September',
      de: 'September',
      es: 'septiembre',
      tr: 'eylül',
      te: 'సెప్టెంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'september-plural',
    type: 'noun',
    article: 'die',
    value: 'September',
    singular_id: 'september',
    plural_id: null,
    translations: {
      en: 'Septembers',
      de: 'September',
      es: 'septiembres',
      tr: 'eylüller',
      te: 'సెప్టెంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'single',
    type: 'noun',
    article: 'der',
    value: 'Single',
    singular_id: null,
    plural_id: 'singles',
    translations: {
      en: 'single person',
      de: 'Single',
      es: 'soltero',
      tr: 'bekar',
      te: 'సింగిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'singles',
    type: 'noun',
    article: 'die',
    value: 'Singles',
    singular_id: 'single',
    plural_id: null,
    translations: {
      en: 'single people',
      de: 'Singles',
      es: 'solteros',
      tr: 'bekarlar',
      te: 'సింగిల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'sohn',
    type: 'noun',
    article: 'der',
    value: 'Sohn',
    singular_id: null,
    plural_id: 'söhne',
    translations: {
      en: 'son',
      de: 'Sohn',
      es: 'hijo',
      tr: 'oğul',
      te: 'కొడుకు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'söhne',
    type: 'noun',
    article: 'die',
    value: 'Söhne',
    singular_id: 'sohn',
    plural_id: null,
    translations: {
      en: 'sons',
      de: 'Söhne',
      es: 'hijos',
      tr: 'oğullar',
      te: 'కొడుకులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'sommer',
    type: 'noun',
    article: 'der',
    value: 'Sommer',
    singular_id: null,
    plural_id: 'sommer-plural',
    translations: {
      en: 'summer',
      de: 'Sommer',
      es: 'verano',
      tr: 'yaz',
      te: 'వేసవి కాలం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'sommer-plural',
    type: 'noun',
    article: 'die',
    value: 'Sommer',
    singular_id: 'sommer',
    plural_id: null,
    translations: {
      en: 'summers',
      de: 'Sommer',
      es: 'veranos',
      tr: 'yazlar',
      te: 'వేసవి కాలాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'sonntag',
    type: 'noun',
    article: 'der',
    value: 'Sonntag',
    singular_id: null,
    plural_id: 'sonntage',
    translations: {
      en: 'Sunday',
      de: 'Sonntag',
      es: 'domingo',
      tr: 'pazar',
      te: 'ఆదివారం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'sonntage',
    type: 'noun',
    article: 'die',
    value: 'Sonntage',
    singular_id: 'sonntag',
    plural_id: null,
    translations: {
      en: 'Sundays',
      de: 'Sonntage',
      es: 'domingos',
      tr: 'pazarlar',
      te: 'ఆదివారాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'spaß',
    type: 'noun',
    article: 'der',
    value: 'Spaß',
    singular_id: null,
    plural_id: 'spaß-plural',
    translations: {
      en: 'fun',
      de: 'Spaß',
      es: 'diversión',
      tr: 'eğlence',
      te: 'సరదా'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'emotions', 'leisure']
  },
  {
    id: 'spaß-plural',
    type: 'noun',
    article: 'die',
    value: 'Spaß',
    singular_id: 'spaß',
    plural_id: null,
    translations: {
      en: 'fun',
      de: 'Spaß',
      es: 'diversiones',
      tr: 'eğlenceler',
      te: 'సరదా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'emotions', 'leisure']
  },
  {
    id: 'spieler',
    type: 'noun',
    article: 'der',
    value: 'Spieler',
    singular_id: null,
    plural_id: 'spieler-plural',
    translations: {
      en: 'player',
      de: 'Spieler',
      es: 'jugador',
      tr: 'oyuncu',
      te: 'ఆటగాడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'people', 'professions', 'sports']
  },
  {
    id: 'spieler-plural',
    type: 'noun',
    article: 'die',
    value: 'Spieler',
    singular_id: 'spieler',
    plural_id: null,
    translations: {
      en: 'players',
      de: 'Spieler',
      es: 'jugadores',
      tr: 'oyuncular',
      te: 'ఆటగాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'people', 'professions', 'sports']
  },
  {
    id: 'sport',
    type: 'noun',
    article: 'der',
    value: 'Sport',
    singular_id: null,
    plural_id: 'sport-plural',
    translations: {
      en: 'sport',
      de: 'Sport',
      es: 'deporte',
      tr: 'spor',
      te: 'క్రీడ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'sports']
  },
  {
    id: 'sport-plural',
    type: 'noun',
    article: 'die',
    value: 'Sport',
    singular_id: 'sport',
    plural_id: null,
    translations: {
      en: 'sports',
      de: 'Sport',
      es: 'deportes',
      tr: 'sporlar',
      te: 'క్రీడలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'sports']
  },
  {
    id: 'student',
    type: 'noun',
    article: 'der',
    value: 'Student',
    singular_id: null,
    plural_id: 'studenten',
    translations: {
      en: 'student',
      de: 'Student',
      es: 'estudiante',
      tr: 'öğrenci',
      te: 'విద్యార్థి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'people', 'professions', 'work']
  },
  {
    id: 'studenten',
    type: 'noun',
    article: 'die',
    value: 'Studenten',
    singular_id: 'student',
    plural_id: null,
    translations: {
      en: 'students',
      de: 'Studenten',
      es: 'estudiantes',
      tr: 'öğrenciler',
      te: 'విద్యార్థులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'people', 'professions', 'work']
  },
  {
    id: 'supermarkt',
    type: 'noun',
    article: 'der',
    value: 'Supermarkt',
    singular_id: null,
    plural_id: 'supermärkte',
    translations: {
      en: 'supermarket',
      de: 'Supermarkt',
      es: 'supermercado',
      tr: 'süpermarket',
      te: 'సూపర్‌మార్కెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'shopping', 'work']
  },
  {
    id: 'supermärkte',
    type: 'noun',
    article: 'die',
    value: 'Supermärkte',
    singular_id: 'supermarkt',
    plural_id: null,
    translations: {
      en: 'supermarkets',
      de: 'Supermärkte',
      es: 'supermercados',
      tr: 'süpermarketler',
      te: 'సూపర్‌మార్కెట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'shopping', 'work']
  },
  {
    id: 'tag',
    type: 'noun',
    article: 'der',
    value: 'Tag',
    singular_id: null,
    plural_id: 'tage',
    translations: {
      en: 'day',
      de: 'Tag',
      es: 'día',
      tr: 'gün',
      te: 'రోజు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'tage',
    type: 'noun',
    article: 'die',
    value: 'Tage',
    singular_id: 'tag',
    plural_id: null,
    translations: {
      en: 'days',
      de: 'Tage',
      es: 'días',
      tr: 'günler',
      te: 'రోజులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['dates', 'time']
  },
  {
    id: 'taxifahrer',
    type: 'noun',
    article: 'der',
    value: 'Taxifahrer',
    singular_id: null,
    plural_id: 'taxifahrer-plural',
    translations: {
      en: 'taxi driver',
      de: 'Taxifahrer',
      es: 'taxista',
      tr: 'taksi şoförü',
      te: 'టాక్సీ డ్రైవర్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'transportation', 'work']
  },
  {
    id: 'taxifahrer-plural',
    type: 'noun',
    article: 'die',
    value: 'Taxifahrer',
    singular_id: 'taxifahrer',
    plural_id: null,
    translations: {
      en: 'taxi drivers',
      de: 'Taxifahrer',
      es: 'taxistas',
      tr: 'taksi şoförleri',
      te: 'టాక్సీ డ్రైవర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'transportation', 'work']
  },
  {
    id: 'tee',
    type: 'noun',
    article: 'der',
    value: 'Tee',
    singular_id: null,
    plural_id: 'tees',
    translations: {
      en: 'tea',
      de: 'Tee',
      es: 'té',
      tr: 'çay',
      te: 'టీ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'tees',
    type: 'noun',
    article: 'die',
    value: 'Tees',
    singular_id: 'tee',
    plural_id: null,
    translations: {
      en: 'teas',
      de: 'Tees',
      es: 'tés',
      tr: 'çaylar',
      te: 'టీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'termin',
    type: 'noun',
    article: 'der',
    value: 'Termin',
    singular_id: null,
    plural_id: 'termine',
    translations: {
      en: 'appointment',
      de: 'Termin',
      es: 'cita',
      tr: 'randevu',
      te: 'అపాయింట్‌మెంట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'time', 'work']
  },
  {
    id: 'termine',
    type: 'noun',
    article: 'die',
    value: 'Termine',
    singular_id: 'termin',
    plural_id: null,
    translations: {
      en: 'appointments',
      de: 'Termine',
      es: 'citas',
      tr: 'randevular',
      te: 'అపాయింట్‌మెంట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'time', 'work']
  },
  {
    id: 'text',
    type: 'noun',
    article: 'der',
    value: 'Text',
    singular_id: null,
    plural_id: 'texte',
    translations: {
      en: 'text',
      de: 'Text',
      es: 'texto',
      tr: 'metin',
      te: 'టెక్స్ట్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents', 'education', 'language']
  },
  {
    id: 'texte',
    type: 'noun',
    article: 'die',
    value: 'Texte',
    singular_id: 'text',
    plural_id: null,
    translations: {
      en: 'texts',
      de: 'Texte',
      es: 'textos',
      tr: 'metinler',
      te: 'టెక్స్ట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents', 'education', 'language']
  },
  {
    id: 'trainer',
    type: 'noun',
    article: 'der',
    value: 'Trainer',
    singular_id: null,
    plural_id: 'trainer-plural',
    translations: {
      en: 'trainer',
      de: 'Trainer',
      es: 'entrenador',
      tr: 'antrenör',
      te: 'శిక్షకుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'sports', 'work']
  },
  {
    id: 'trainer-plural',
    type: 'noun',
    article: 'die',
    value: 'Trainer',
    singular_id: 'trainer',
    plural_id: null,
    translations: {
      en: 'trainers',
      de: 'Trainer',
      es: 'entrenadores',
      tr: 'antrenörler',
      te: 'శిక్షకులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'sports', 'work']
  },
  {
    id: 'urlaub',
    type: 'noun',
    article: 'der',
    value: 'Urlaub',
    singular_id: null,
    plural_id: 'urlaube',
    translations: {
      en: 'vacation',
      de: 'Urlaub',
      es: 'vacaciones',
      tr: 'tatil',
      te: 'సెలవు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'travel']
  },
  {
    id: 'urlaube',
    type: 'noun',
    article: 'die',
    value: 'Urlaube',
    singular_id: 'urlaub',
    plural_id: null,
    translations: {
      en: 'vacations',
      de: 'Urlaube',
      es: 'vacaciones',
      tr: 'tatiller',
      te: 'సెలవులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'travel']
  },
  {
    id: 'vater',
    type: 'noun',
    article: 'der',
    value: 'Vater',
    singular_id: null,
    plural_id: 'väter',
    translations: {
      en: 'father',
      de: 'Vater',
      es: 'padre',
      tr: 'baba',
      te: 'తండ్రి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'väter',
    type: 'noun',
    article: 'die',
    value: 'Väter',
    singular_id: 'vater',
    plural_id: null,
    translations: {
      en: 'fathers',
      de: 'Väter',
      es: 'padres',
      tr: 'babalar',
      te: 'తండ్రులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'verein',
    type: 'noun',
    article: 'der',
    value: 'Verein',
    singular_id: null,
    plural_id: 'vereine',
    translations: {
      en: 'club',
      de: 'Verein',
      es: 'asociación',
      tr: 'dernek',
      te: 'సంఘం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'locations', 'sports']
  },
  {
    id: 'vereine',
    type: 'noun',
    article: 'die',
    value: 'Vereine',
    singular_id: 'verein',
    plural_id: null,
    translations: {
      en: 'clubs',
      de: 'Vereine',
      es: 'asociaciones',
      tr: 'dernekler',
      te: 'సంఘాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'locations', 'sports']
  },
  {
    id: 'verkäufer',
    type: 'noun',
    article: 'der',
    value: 'Verkäufer',
    singular_id: null,
    plural_id: 'verkäufer-plural',
    translations: {
      en: 'salesperson',
      de: 'Verkäufer',
      es: 'vendedor',
      tr: 'satıcı',
      te: 'విక్రేత'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'verkäufer-plural',
    type: 'noun',
    article: 'die',
    value: 'Verkäufer',
    singular_id: 'verkäufer',
    plural_id: null,
    translations: {
      en: 'salespersons',
      de: 'Verkäufer',
      es: 'vendedores',
      tr: 'satıcılar',
      te: 'విక్రేతలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'vormittag',
    type: 'noun',
    article: 'der',
    value: 'Vormittag',
    singular_id: null,
    plural_id: 'vormittage',
    translations: {
      en: 'morning',
      de: 'Vormittag',
      es: 'mañana',
      tr: 'öğleden önce',
      te: 'పూర్వాహ్నం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'vormittage',
    type: 'noun',
    article: 'die',
    value: 'Vormittage',
    singular_id: 'vormittag',
    plural_id: null,
    translations: {
      en: 'mornings',
      de: 'Vormittage',
      es: 'mañanas',
      tr: 'öğleden önceler',
      te: 'పూర్వాహ్నాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'vorname',
    type: 'noun',
    article: 'der',
    value: 'Vorname',
    singular_id: null,
    plural_id: 'vornamen',
    translations: {
      en: 'first name',
      de: 'Vorname',
      es: 'nombre de pila',
      tr: 'ad',
      te: 'మొదటి పేరు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'language', 'people', 'personal-info']
  },
  {
    id: 'vornamen',
    type: 'noun',
    article: 'die',
    value: 'Vornamen',
    singular_id: 'vorname',
    plural_id: null,
    translations: {
      en: 'first names',
      de: 'Vornamen',
      es: 'nombres de pila',
      tr: 'adlar',
      te: 'మొదటి పేరులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'language', 'people', 'personal-info']
  },
  {
    id: 'winter',
    type: 'noun',
    article: 'der',
    value: 'Winter',
    singular_id: null,
    plural_id: 'winter-plural',
    translations: {
      en: 'winter',
      de: 'Winter',
      es: 'invierno',
      tr: 'kış',
      te: 'శీతాకాలం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'winter-plural',
    type: 'noun',
    article: 'die',
    value: 'Winter',
    singular_id: 'winter',
    plural_id: null,
    translations: {
      en: 'winters',
      de: 'Winter',
      es: 'inviernos',
      tr: 'kışlar',
      te: 'శీతాకాలాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'time', 'weather']
  },
  {
    id: 'wohnort',
    type: 'noun',
    article: 'der',
    value: 'Wohnort',
    singular_id: null,
    plural_id: 'wohnorte',
    translations: {
      en: 'place of residence',
      de: 'Wohnort',
      es: 'lugar de residencia',
      tr: 'ikamet yeri',
      te: 'నివాస స్థలం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'personal-info', 'travel']
  },
  {
    id: 'wohnorte',
    type: 'noun',
    article: 'die',
    value: 'Wohnorte',
    singular_id: 'wohnort',
    plural_id: null,
    translations: {
      en: 'places of residence',
      de: 'Wohnorte',
      es: 'lugares de residencia',
      tr: 'ikamet yerleri',
      te: 'నివాస స్థలాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'personal-info', 'travel']
  },
  {
    id: 'zahnarzt',
    type: 'noun',
    article: 'der',
    value: 'Zahnarzt',
    singular_id: null,
    plural_id: 'zahnärzte',
    translations: {
      en: 'dentist',
      de: 'Zahnarzt',
      es: 'dentista',
      tr: 'dişçi',
      te: 'దంత వైద్యుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'zahnärzte',
    type: 'noun',
    article: 'die',
    value: 'Zahnärzte',
    singular_id: 'zahnarzt',
    plural_id: null,
    translations: {
      en: 'dentists',
      de: 'Zahnärzte',
      es: 'dentistas',
      tr: 'dişçiler',
      te: 'దంత వైద్యులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'adresse',
    type: 'noun',
    article: 'die',
    value: 'Adresse',
    singular_id: null,
    plural_id: 'adressen',
    translations: {
      en: 'address',
      de: 'Adresse',
      es: 'dirección',
      tr: 'adres',
      te: 'చిరునామా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'locations', 'personal-info']
  },
  {
    id: 'adressen',
    type: 'noun',
    article: 'die',
    value: 'Adressen',
    singular_id: 'adresse',
    plural_id: null,
    translations: {
      en: 'addresses',
      de: 'Adressen',
      es: 'direcciones',
      tr: 'adresler',
      te: 'చిరునామాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'locations', 'personal-info']
  },
  {
    id: 'antwort',
    type: 'noun',
    article: 'die',
    value: 'Antwort',
    singular_id: null,
    plural_id: 'antworten',
    translations: {
      en: 'answer',
      de: 'Antwort',
      es: 'respuesta',
      tr: 'cevap',
      te: 'సమాధానం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'communication', 'documents', 'education']
  },
  {
    id: 'antworten',
    type: 'noun',
    article: 'die',
    value: 'Antworten',
    singular_id: 'antwort',
    plural_id: null,
    translations: {
      en: 'answers',
      de: 'Antworten',
      es: 'respuestas',
      tr: 'cevaplar',
      te: 'సమాధానాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'communication', 'documents', 'education']
  },
  {
    id: 'arbeit',
    type: 'noun',
    article: 'die',
    value: 'Arbeit',
    singular_id: null,
    plural_id: 'arbeiten',
    translations: {
      en: 'work',
      de: 'Arbeit',
      es: 'trabajo',
      tr: 'iş',
      te: 'పని'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'work']
  },
  {
    id: 'arbeiten',
    type: 'noun',
    article: 'die',
    value: 'Arbeiten',
    singular_id: 'arbeit',
    plural_id: null,
    translations: {
      en: 'works',
      de: 'Arbeiten',
      es: 'trabajos',
      tr: 'işler',
      te: 'పనులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'work']
  },
  {
    id: 'ärztin',
    type: 'noun',
    article: 'die',
    value: 'Ärztin',
    singular_id: null,
    plural_id: 'ärztinnen',
    translations: {
      en: 'female doctor',
      de: 'Ärztin',
      es: 'médica',
      tr: 'kadın doktor',
      te: 'మహిళా డాక్టర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'ärztinnen',
    type: 'noun',
    article: 'die',
    value: 'Ärztinnen',
    singular_id: 'ärztin',
    plural_id: null,
    translations: {
      en: 'female doctors',
      de: 'Ärztinnen',
      es: 'médicas',
      tr: 'kadın doktorlar',
      te: 'మహిళా డాక్టర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'ausbildung',
    type: 'noun',
    article: 'die',
    value: 'Ausbildung',
    singular_id: null,
    plural_id: 'ausbildungen',
    translations: {
      en: 'training',
      de: 'Ausbildung',
      es: 'formación',
      tr: 'eğitim',
      te: 'శిక్షణ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'education', 'work']
  },
  {
    id: 'ausbildungen',
    type: 'noun',
    article: 'die',
    value: 'Ausbildungen',
    singular_id: 'ausbildung',
    plural_id: null,
    translations: {
      en: 'trainings',
      de: 'Ausbildungen',
      es: 'formaciones',
      tr: 'eğitimler',
      te: 'శిక్షణలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'education', 'work']
  },
  {
    id: 'banane',
    type: 'noun',
    article: 'die',
    value: 'Banane',
    singular_id: null,
    plural_id: 'bananen',
    translations: {
      en: 'banana',
      de: 'Banane',
      es: 'plátano',
      tr: 'muz',
      te: 'అరటిపండు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'bananen',
    type: 'noun',
    article: 'die',
    value: 'Bananen',
    singular_id: 'banane',
    plural_id: null,
    translations: {
      en: 'bananas',
      de: 'Bananen',
      es: 'plátanos',
      tr: 'muzlar',
      te: 'అరటిపళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'birne',
    type: 'noun',
    article: 'die',
    value: 'Birne',
    singular_id: null,
    plural_id: 'birnen',
    translations: {
      en: 'pear',
      de: 'Birne',
      es: 'pera',
      tr: 'armut',
      te: 'పియర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'birnen',
    type: 'noun',
    article: 'die',
    value: 'Birnen',
    singular_id: 'birne',
    plural_id: null,
    translations: {
      en: 'pears',
      de: 'Birnen',
      es: 'peras',
      tr: 'armutlar',
      te: 'పియర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'blume',
    type: 'noun',
    article: 'die',
    value: 'Blume',
    singular_id: null,
    plural_id: 'blumen',
    translations: {
      en: 'flower',
      de: 'Blume',
      es: 'flor',
      tr: 'çiçek',
      te: 'పువ్వు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature']
  },
  {
    id: 'blumen',
    type: 'noun',
    article: 'die',
    value: 'Blumen',
    singular_id: 'blume',
    plural_id: null,
    translations: {
      en: 'flowers',
      de: 'Blumen',
      es: 'flores',
      tr: 'çiçekler',
      te: 'పువ్వులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature']
  },
  {
    id: 'briefmarke',
    type: 'noun',
    article: 'die',
    value: 'Briefmarke',
    singular_id: null,
    plural_id: 'briefmarken',
    translations: {
      en: 'stamp',
      de: 'Briefmarke',
      es: 'sello',
      tr: 'posta pulu',
      te: 'తపాలా బిళ్ళ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents']
  },
  {
    id: 'briefmarken',
    type: 'noun',
    article: 'die',
    value: 'Briefmarken',
    singular_id: 'briefmarke',
    plural_id: null,
    translations: {
      en: 'stamps',
      de: 'Briefmarken',
      es: 'sellos',
      tr: 'posta pulları',
      te: 'తపాలా బిళ్ళలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents']
  },
  {
    id: 'brille',
    type: 'noun',
    article: 'die',
    value: 'Brille',
    singular_id: null,
    plural_id: 'brillen',
    translations: {
      en: 'glasses',
      de: 'Brille',
      es: 'gafas',
      tr: 'gözlük',
      te: 'కళ్ళజోడు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household']
  },
  {
    id: 'brillen',
    type: 'noun',
    article: 'die',
    value: 'Brillen',
    singular_id: 'brille',
    plural_id: null,
    translations: {
      en: 'glasses',
      de: 'Brillen',
      es: 'gafas',
      tr: 'gözlükler',
      te: 'కళ్ళజోడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household']
  },
  {
    id: 'butter',
    type: 'noun',
    article: 'die',
    value: 'Butter',
    singular_id: null,
    plural_id: 'butter-plural',
    translations: {
      en: 'butter',
      de: 'Butter',
      es: 'mantequilla',
      tr: 'tereyağı',
      te: 'వెన్న'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'butter-plural',
    type: 'noun',
    article: 'die',
    value: 'Butter',
    singular_id: 'butter',
    plural_id: null,
    translations: {
      en: 'butters',
      de: 'Butter',
      es: 'mantequillas',
      tr: 'tereyağları',
      te: 'వెన్న'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'cousine',
    type: 'noun',
    article: 'die',
    value: 'Cousine',
    singular_id: null,
    plural_id: 'cousinen',
    translations: {
      en: 'female cousin',
      de: 'Cousine',
      es: 'prima',
      tr: 'kız kuzen',
      te: 'కజిన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'cousinen',
    type: 'noun',
    article: 'die',
    value: 'Cousinen',
    singular_id: 'cousine',
    plural_id: null,
    translations: {
      en: 'female cousins',
      de: 'Cousinen',
      es: 'primas',
      tr: 'kız kuzenler',
      te: 'కజిన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'dose',
    type: 'noun',
    article: 'die',
    value: 'Dose',
    singular_id: null,
    plural_id: 'dosen',
    translations: {
      en: 'can',
      de: 'Dose',
      es: 'lata',
      tr: 'kutu',
      te: 'డబ్బా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'dosen',
    type: 'noun',
    article: 'die',
    value: 'Dosen',
    singular_id: 'dose',
    plural_id: null,
    translations: {
      en: 'cans',
      de: 'Dosen',
      es: 'latas',
      tr: 'kutular',
      te: 'డబ్బాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'e-mail',
    type: 'noun',
    article: 'die',
    value: 'E-Mail',
    singular_id: null,
    plural_id: 'e-mails',
    translations: {
      en: 'email',
      de: 'E-Mail',
      es: 'correo electrónico',
      tr: 'e-posta',
      te: 'ఇ-మెయిల్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'technology']
  },
  {
    id: 'e-mails',
    type: 'noun',
    article: 'die',
    value: 'E-Mails',
    singular_id: 'e-mail',
    plural_id: null,
    translations: {
      en: 'emails',
      de: 'E-Mails',
      es: 'correos electrónicos',
      tr: 'e-postalar',
      te: 'ఇ-మెయిల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'technology']
  },
  {
    id: 'e-mail-adresse',
    type: 'noun',
    article: 'die',
    value: 'E-Mail-Adresse',
    singular_id: null,
    plural_id: 'e-mail-adressen',
    translations: {
      en: 'email address',
      de: 'E-Mail-Adresse',
      es: 'dirección de correo electrónico',
      tr: 'e-posta adresi',
      te: 'ఇ-మెయిల్ చిరునామా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'technology']
  },
  {
    id: 'e-mail-adressen',
    type: 'noun',
    article: 'die',
    value: 'E-Mail-Adressen',
    singular_id: 'e-mail-adresse',
    plural_id: null,
    translations: {
      en: 'email addresses',
      de: 'E-Mail-Adressen',
      es: 'direcciones de correo electrónico',
      tr: 'e-posta adresleri',
      te: 'ఇ-మెయిల్ చిరునామాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'technology']
  },
  {
    id: 'elektronikerin',
    type: 'noun',
    article: 'die',
    value: 'Elektronikerin',
    singular_id: null,
    plural_id: 'elektronikerinnen',
    translations: {
      en: 'female electronics technician',
      de: 'Elektronikerin',
      es: 'técnica electrónica',
      tr: 'kadın elektronik teknisyeni',
      te: 'మహిళా ఎలక్ట్రానిక్స్ టెక్నీషియన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'elektronikerinnen',
    type: 'noun',
    article: 'die',
    value: 'Elektronikerinnen',
    singular_id: 'elektronikerin',
    plural_id: null,
    translations: {
      en: 'female electronics technicians',
      de: 'Elektronikerinnen',
      es: 'técnicas electrónicas',
      tr: 'kadın elektronik teknisyenler',
      te: 'మహిళా ఎలక్ట్రానిక్స్ టెక్నీషియన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'eltern',
    type: 'noun',
    article: 'die',
    value: 'Eltern',
    singular_id: null,
    plural_id: 'eltern-plural',
    translations: {
      en: 'parents',
      de: 'Eltern',
      es: 'padres',
      tr: 'ebeveynler',
      te: 'తల్లిదండ్రులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'eltern-plural',
    type: 'noun',
    article: 'die',
    value: 'Eltern',
    singular_id: 'eltern',
    plural_id: null,
    translations: {
      en: 'parents',
      de: 'Eltern',
      es: 'padres',
      tr: 'ebeveynler',
      te: 'తల్లిదండ్రులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'enkelin',
    type: 'noun',
    article: 'die',
    value: 'Enkelin',
    singular_id: null,
    plural_id: 'enkelinnen',
    translations: {
      en: 'granddaughter',
      de: 'Enkelin',
      es: 'nieta',
      tr: 'kız torun',
      te: 'మనవరాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'enkelinnen',
    type: 'noun',
    article: 'die',
    value: 'Enkelinnen',
    singular_id: 'enkelin',
    plural_id: null,
    translations: {
      en: 'granddaughters',
      de: 'Enkelinnen',
      es: 'nietas',
      tr: 'kız torunlar',
      te: 'మనవరాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'entschuldigung',
    type: 'noun',
    article: 'die',
    value: 'Entschuldigung',
    singular_id: null,
    plural_id: 'entschuldigungen',
    translations: {
      en: 'apology',
      de: 'Entschuldigung',
      es: 'disculpa',
      tr: 'özür',
      te: 'క్షమాపణ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['emotions']
  },
  {
    id: 'entschuldigungen',
    type: 'noun',
    article: 'die',
    value: 'Entschuldigungen',
    singular_id: 'entschuldigung',
    plural_id: null,
    translations: {
      en: 'apologies',
      de: 'Entschuldigungen',
      es: 'disculpas',
      tr: 'özürler',
      te: 'క్షమాపణలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['emotions']
  },
  {
    id: 'familie',
    type: 'noun',
    article: 'die',
    value: 'Familie',
    singular_id: null,
    plural_id: 'familien',
    translations: {
      en: 'family',
      de: 'Familie',
      es: 'familia',
      tr: 'aile',
      te: 'కుటుంబం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people', 'personal-info']
  },
  {
    id: 'familien',
    type: 'noun',
    article: 'die',
    value: 'Familien',
    singular_id: 'familie',
    plural_id: null,
    translations: {
      en: 'families',
      de: 'Familien',
      es: 'familias',
      tr: 'aileler',
      te: 'కుటుంబాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people', 'personal-info']
  },
  {
    id: 'farbe',
    type: 'noun',
    article: 'die',
    value: 'Farbe',
    singular_id: null,
    plural_id: 'farben',
    translations: {
      en: 'color',
      de: 'Farbe',
      es: 'color',
      tr: 'renk',
      te: 'రంగు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'arts']
  },
  {
    id: 'farben',
    type: 'noun',
    article: 'die',
    value: 'Farben',
    singular_id: 'farbe',
    plural_id: null,
    translations: {
      en: 'colors',
      de: 'Farben',
      es: 'colores',
      tr: 'renkler',
      te: 'రంగులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'arts']
  },
  {
    id: 'flasche',
    type: 'noun',
    article: 'die',
    value: 'Flasche',
    singular_id: null,
    plural_id: 'flaschen',
    translations: {
      en: 'bottle',
      de: 'Flasche',
      es: 'botella',
      tr: 'şişe',
      te: 'సీసా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'flaschen',
    type: 'noun',
    article: 'die',
    value: 'Flaschen',
    singular_id: 'flasche',
    plural_id: null,
    translations: {
      en: 'bottles',
      de: 'Flaschen',
      es: 'botellas',
      tr: 'şişeler',
      te: 'సీసాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'fotografin',
    type: 'noun',
    article: 'die',
    value: 'Fotografin',
    singular_id: null,
    plural_id: 'fotografinnen',
    translations: {
      en: 'female photographer',
      de: 'Fotografin',
      es: 'fotógrafa',
      tr: 'kadın fotoğrafçı',
      te: 'మహిళా ఫోటోగ్రాఫర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'people', 'professions', 'work']
  },
  {
    id: 'fotografinnen',
    type: 'noun',
    article: 'die',
    value: 'Fotografinnen',
    singular_id: 'fotografin',
    plural_id: null,
    translations: {
      en: 'female photographers',
      de: 'Fotografinnen',
      es: 'fotógrafas',
      tr: 'kadın fotoğrafçılar',
      te: 'మహిళా ఫోటోగ్రాఫర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'people', 'professions', 'work']
  },
  {
    id: 'frage',
    type: 'noun',
    article: 'die',
    value: 'Frage',
    singular_id: null,
    plural_id: 'fragen',
    translations: {
      en: 'question',
      de: 'Frage',
      es: 'pregunta',
      tr: 'soru',
      te: 'ప్రశ్న'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'communication', 'documents', 'education']
  },
  {
    id: 'fragen',
    type: 'noun',
    article: 'die',
    value: 'Fragen',
    singular_id: 'frage',
    plural_id: null,
    translations: {
      en: 'questions',
      de: 'Fragen',
      es: 'preguntas',
      tr: 'sorular',
      te: 'ప్రశ్నలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'communication', 'documents', 'education']
  },
  {
    id: 'frau',
    type: 'noun',
    article: 'die',
    value: 'Frau',
    singular_id: null,
    plural_id: 'frauen',
    translations: {
      en: 'woman',
      de: 'Frau',
      es: 'mujer',
      tr: 'kadın',
      te: 'స్త్రీ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'frauen',
    type: 'noun',
    article: 'die',
    value: 'Frauen',
    singular_id: 'frau',
    plural_id: null,
    translations: {
      en: 'women',
      de: 'Frauen',
      es: 'mujeres',
      tr: 'kadınlar',
      te: 'స్త్రీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'freizeit',
    type: 'noun',
    article: 'die',
    value: 'Freizeit',
    singular_id: null,
    plural_id: 'freizeiten',
    translations: {
      en: 'free time',
      de: 'Freizeit',
      es: 'tiempo libre',
      tr: 'boş zaman',
      te: 'ఖాళీ సమయం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'freizeiten',
    type: 'noun',
    article: 'die',
    value: 'Freizeiten',
    singular_id: 'freizeit',
    plural_id: null,
    translations: {
      en: 'free times',
      de: 'Freizeiten',
      es: 'tiempo libres',
      tr: 'boş zamanlar',
      te: 'ఖాళీ సమయాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'freundin',
    type: 'noun',
    article: 'die',
    value: 'Freundin',
    singular_id: null,
    plural_id: 'freundinnen',
    translations: {
      en: 'female friend',
      de: 'Freundin',
      es: 'amiga',
      tr: 'kız arkadaş',
      te: 'స్నేహితురాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'freundinnen',
    type: 'noun',
    article: 'die',
    value: 'Freundinnen',
    singular_id: 'freundin',
    plural_id: null,
    translations: {
      en: 'female friends',
      de: 'Freundinnen',
      es: 'amigas',
      tr: 'kız arkadaşlar',
      te: 'స్నేహితురాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'friseurin',
    type: 'noun',
    article: 'die',
    value: 'Friseurin',
    singular_id: null,
    plural_id: 'friseurinnen',
    translations: {
      en: 'female hairdresser',
      de: 'Friseurin',
      es: 'peluquera',
      tr: 'kadın kuaför',
      te: 'మహిళా హెయిర్ డ్రెస్సర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'friseurinnen',
    type: 'noun',
    article: 'die',
    value: 'Friseurinnen',
    singular_id: 'friseurin',
    plural_id: null,
    translations: {
      en: 'female hairdressers',
      de: 'Friseurinnen',
      es: 'peluqueras',
      tr: 'kadın kuaförler',
      te: 'మహిళా హెయిర్ డ్రెస్సర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'geschwister',
    type: 'noun',
    article: 'die',
    value: 'Geschwister',
    singular_id: null,
    plural_id: 'geschwister-plural',
    translations: {
      en: 'siblings',
      de: 'Geschwister',
      es: 'hermanos',
      tr: 'kardeşler',
      te: 'తోబుట్టువులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'geschwister-plural',
    type: 'noun',
    article: 'die',
    value: 'Geschwister',
    singular_id: 'geschwister',
    plural_id: null,
    translations: {
      en: 'siblings',
      de: 'Geschwister',
      es: 'hermanos',
      tr: 'kardeşler',
      te: 'తోబుట్టువులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'gitarre',
    type: 'noun',
    article: 'die',
    value: 'Gitarre',
    singular_id: null,
    plural_id: 'gitarren',
    translations: {
      en: 'guitar',
      de: 'Gitarre',
      es: 'guitarra',
      tr: 'gitar',
      te: 'గిటార్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'gitarren',
    type: 'noun',
    article: 'die',
    value: 'Gitarren',
    singular_id: 'gitarre',
    plural_id: null,
    translations: {
      en: 'guitars',
      de: 'Gitarren',
      es: 'guitarras',
      tr: 'gitarlar',
      te: 'గిటార్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'großeltern',
    type: 'noun',
    article: 'die',
    value: 'Großeltern',
    singular_id: null,
    plural_id: 'großeltern-plural',
    translations: {
      en: 'grandparents',
      de: 'Großeltern',
      es: 'abuelos',
      tr: 'büyükanne ve büyükbaba',
      te: 'తాతామామలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'großeltern-plural',
    type: 'noun',
    article: 'die',
    value: 'Großeltern',
    singular_id: 'großeltern',
    plural_id: null,
    translations: {
      en: 'grandparents',
      de: 'Großeltern',
      es: 'abuelos',
      tr: 'büyükanne ve büyükbabalar',
      te: 'తాతామామలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'großmutter',
    type: 'noun',
    article: 'die',
    value: 'Großmutter',
    singular_id: null,
    plural_id: 'großmütter',
    translations: {
      en: 'grandmother',
      de: 'Großmutter',
      es: 'abuela',
      tr: 'büyükanne',
      te: 'అమ్మమ్మ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family']
  },
  {
    id: 'großmütter',
    type: 'noun',
    article: 'die',
    value: 'Großmütter',
    singular_id: 'großmutter',
    plural_id: null,
    translations: {
      en: 'grandmothers',
      de: 'Großmütter',
      es: 'abuelas',
      tr: 'büyükanneler',
      te: 'అమ్మమ్మలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family']
  },
  {
    id: 'gruppe',
    type: 'noun',
    article: 'die',
    value: 'Gruppe',
    singular_id: null,
    plural_id: 'gruppen',
    translations: {
      en: 'group',
      de: 'Gruppe',
      es: 'grupo',
      tr: 'grup',
      te: 'గుంపు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'people']
  },
  {
    id: 'gruppen',
    type: 'noun',
    article: 'die',
    value: 'Gruppen',
    singular_id: 'gruppe',
    plural_id: null,
    translations: {
      en: 'groups',
      de: 'Gruppen',
      es: 'grupos',
      tr: 'gruplar',
      te: 'గుంపులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'people']
  },
  {
    id: 'hausaufgabe',
    type: 'noun',
    article: 'die',
    value: 'Hausaufgabe',
    singular_id: null,
    plural_id: 'hausaufgaben',
    translations: {
      en: 'homework',
      de: 'Hausaufgabe',
      es: 'deberes',
      tr: 'ev ödevi',
      te: 'హోంవర్క్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'hausaufgaben',
    type: 'noun',
    article: 'die',
    value: 'Hausaufgaben',
    singular_id: 'hausaufgabe',
    plural_id: null,
    translations: {
      en: 'homework',
      de: 'Hausaufgaben',
      es: 'deberes',
      tr: 'ev ödevleri',
      te: 'హోంవర్క్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'hausfrau',
    type: 'noun',
    article: 'die',
    value: 'Hausfrau',
    singular_id: null,
    plural_id: 'hausfrauen',
    translations: {
      en: 'housewife',
      de: 'Hausfrau',
      es: 'ama de casa',
      tr: 'ev hanımı',
      te: 'గృహిణి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people', 'professions', 'work']
  },
  {
    id: 'hausfrauen',
    type: 'noun',
    article: 'die',
    value: 'Hausfrauen',
    singular_id: 'hausfrau',
    plural_id: null,
    translations: {
      en: 'housewives',
      de: 'Hausfrauen',
      es: 'amas de casa',
      tr: 'ev hanımları',
      te: 'గృహిణులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people', 'professions', 'work']
  },
  {
    id: 'hausnummer',
    type: 'noun',
    article: 'die',
    value: 'Hausnummer',
    singular_id: null,
    plural_id: 'hausnummern',
    translations: {
      en: 'house number',
      de: 'Hausnummer',
      es: 'número de casa',
      tr: 'kapı numarası',
      te: 'ఇంటి నంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'hausnummern',
    type: 'noun',
    article: 'die',
    value: 'Hausnummern',
    singular_id: 'hausnummer',
    plural_id: null,
    translations: {
      en: 'house numbers',
      de: 'Hausnummern',
      es: 'números de casa',
      tr: 'kapı numaraları',
      te: 'ఇంటి నంబర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'hilfe',
    type: 'noun',
    article: 'die',
    value: 'Hilfe',
    singular_id: null,
    plural_id: 'hilfen',
    translations: {
      en: 'help',
      de: 'Hilfe',
      es: 'ayuda',
      tr: 'yardım',
      te: 'సహాయం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'hilfen',
    type: 'noun',
    article: 'die',
    value: 'Hilfen',
    singular_id: 'hilfe',
    plural_id: null,
    translations: {
      en: 'help',
      de: 'Hilfen',
      es: 'ayudas',
      tr: 'yardımlar',
      te: 'సహాయాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'information',
    type: 'noun',
    article: 'die',
    value: 'Information',
    singular_id: null,
    plural_id: 'informationen',
    translations: {
      en: 'information',
      de: 'Information',
      es: 'información',
      tr: 'bilgi',
      te: 'సమాచారం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'communication']
  },
  {
    id: 'informationen',
    type: 'noun',
    article: 'die',
    value: 'Informationen',
    singular_id: 'information',
    plural_id: null,
    translations: {
      en: 'information',
      de: 'Informationen',
      es: 'informaciones',
      tr: 'bilgiler',
      te: 'సమాచారాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'communication']
  },
  {
    id: 'ingenieurin',
    type: 'noun',
    article: 'die',
    value: 'Ingenieurin',
    singular_id: null,
    plural_id: 'ingenieurinnen',
    translations: {
      en: 'female engineer',
      de: 'Ingenieurin',
      es: 'ingeniera',
      tr: 'kadın mühendis',
      te: 'మహిళా ఇంజనీర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'ingenieurinnen',
    type: 'noun',
    article: 'die',
    value: 'Ingenieurinnen',
    singular_id: 'ingenieurin',
    plural_id: null,
    translations: {
      en: 'female engineers',
      de: 'Ingenieurinnen',
      es: 'ingenieras',
      tr: 'kadın mühendisler',
      te: 'మహిళా ఇంజనీర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'kamera',
    type: 'noun',
    article: 'die',
    value: 'Kamera',
    singular_id: null,
    plural_id: 'kameras',
    translations: {
      en: 'camera',
      de: 'Kamera',
      es: 'cámara',
      tr: 'kamera',
      te: 'కెమెరా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'household', 'technology']
  },
  {
    id: 'kameras',
    type: 'noun',
    article: 'die',
    value: 'Kameras',
    singular_id: 'kamera',
    plural_id: null,
    translations: {
      en: 'cameras',
      de: 'Kameras',
      es: 'cámaras',
      tr: 'kameralar',
      te: 'కెమెరాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'household', 'technology']
  },
  {
    id: 'kartoffel',
    type: 'noun',
    article: 'die',
    value: 'Kartoffel',
    singular_id: null,
    plural_id: 'kartoffeln',
    translations: {
      en: 'potato',
      de: 'Kartoffel',
      es: 'patata',
      tr: 'patates',
      te: 'బంగాళాదుంప'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'kartoffeln',
    type: 'noun',
    article: 'die',
    value: 'Kartoffeln',
    singular_id: 'kartoffel',
    plural_id: null,
    translations: {
      en: 'potatoes',
      de: 'Kartoffeln',
      es: 'patatas',
      tr: 'patatesler',
      te: 'బంగాళాదుంపలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'kellnerin',
    type: 'noun',
    article: 'die',
    value: 'Kellnerin',
    singular_id: null,
    plural_id: 'kellnerinnen',
    translations: {
      en: 'waitress',
      de: 'Kellnerin',
      es: 'camarera',
      tr: 'garson kadın',
      te: 'మహిళా వెయిటర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'kellnerinnen',
    type: 'noun',
    article: 'die',
    value: 'Kellnerinnen',
    singular_id: 'kellnerin',
    plural_id: null,
    translations: {
      en: 'waitresses',
      de: 'Kellnerinnen',
      es: 'camareras',
      tr: 'garson kadınlar',
      te: 'మహిళా వెయిటర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'köchin',
    type: 'noun',
    article: 'die',
    value: 'Köchin',
    singular_id: null,
    plural_id: 'köchinnen',
    translations: {
      en: 'female cook',
      de: 'Köchin',
      es: 'cocinera',
      tr: 'kadın aşçı',
      te: 'మహిళా వంటమనిషి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'köchinnen',
    type: 'noun',
    article: 'die',
    value: 'Köchinnen',
    singular_id: 'köchin',
    plural_id: null,
    translations: {
      en: 'female cooks',
      de: 'Köchinnen',
      es: 'cocineras',
      tr: 'kadın aşçılar',
      te: 'మహిళా వంటమనుషులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'kollegin',
    type: 'noun',
    article: 'die',
    value: 'Kollegin',
    singular_id: null,
    plural_id: 'kolleginnen',
    translations: {
      en: 'female colleague',
      de: 'Kollegin',
      es: 'compañera',
      tr: 'kadın iş arkadaşı',
      te: 'మహిళా సహోద్యోగి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'work']
  },
  {
    id: 'kolleginnen',
    type: 'noun',
    article: 'die',
    value: 'Kolleginnen',
    singular_id: 'kollegin',
    plural_id: null,
    translations: {
      en: 'female colleagues',
      de: 'Kolleginnen',
      es: 'compañeras',
      tr: 'kadın iş arkadaşları',
      te: 'మహిళా సహోద్యోగులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'work']
  },
  {
    id: 'krankenpflegerin',
    type: 'noun',
    article: 'die',
    value: 'Krankenpflegerin',
    singular_id: null,
    plural_id: 'krankenpflegerinnen',
    translations: {
      en: 'female nurse',
      de: 'Krankenpflegerin',
      es: 'enfermera',
      tr: 'hemşire',
      te: 'మహిళా నర్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'krankenpflegerinnen',
    type: 'noun',
    article: 'die',
    value: 'Krankenpflegerinnen',
    singular_id: 'krankenpflegerin',
    plural_id: null,
    translations: {
      en: 'female nurses',
      de: 'Krankenpflegerinnen',
      es: 'enfermeras',
      tr: 'hemşireler',
      te: 'మహిళా నర్సులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'kundin',
    type: 'noun',
    article: 'die',
    value: 'Kundin',
    singular_id: null,
    plural_id: 'kundinnen',
    translations: {
      en: 'female customer',
      de: 'Kundin',
      es: 'clienta',
      tr: 'kadın müşteri',
      te: 'మహిళా కస్టమర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'kundinnen',
    type: 'noun',
    article: 'die',
    value: 'Kundinnen',
    singular_id: 'kundin',
    plural_id: null,
    translations: {
      en: 'female customers',
      de: 'Kundinnen',
      es: 'clientas',
      tr: 'kadın müşteriler',
      te: 'మహిళా కస్టమర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'lehrerin',
    type: 'noun',
    article: 'die',
    value: 'Lehrerin',
    singular_id: null,
    plural_id: 'lehrerinnen',
    translations: {
      en: 'female teacher',
      de: 'Lehrerin',
      es: 'profesora',
      tr: 'kadın öğretmen',
      te: 'ఉపాధ్యాయిని'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'people', 'professions', 'work']
  },
  {
    id: 'lehrerinnen',
    type: 'noun',
    article: 'die',
    value: 'Lehrerinnen',
    singular_id: 'lehrerin',
    plural_id: null,
    translations: {
      en: 'female teachers',
      de: 'Lehrerinnen',
      es: 'profesoras',
      tr: 'kadın öğretmenler',
      te: 'ఉపాధ్యాయినులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'people', 'professions', 'work']
  },
  {
    id: 'mannschaft',
    type: 'noun',
    article: 'die',
    value: 'Mannschaft',
    singular_id: null,
    plural_id: 'mannschaften',
    translations: {
      en: 'team',
      de: 'Mannschaft',
      es: 'equipo',
      tr: 'takım',
      te: 'జట్టు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'people', 'sports']
  },
  {
    id: 'mannschaften',
    type: 'noun',
    article: 'die',
    value: 'Mannschaften',
    singular_id: 'mannschaft',
    plural_id: null,
    translations: {
      en: 'teams',
      de: 'Mannschaften',
      es: 'equipos',
      tr: 'takımlar',
      te: 'జట్టులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'people', 'sports']
  },
  {
    id: 'milch',
    type: 'noun',
    article: 'die',
    value: 'Milch',
    singular_id: null,
    plural_id: 'milch-plural',
    translations: {
      en: 'milk',
      de: 'Milch',
      es: 'leche',
      tr: 'süt',
      te: 'పాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'milch-plural',
    type: 'noun',
    article: 'die',
    value: 'Milch',
    singular_id: 'milch',
    plural_id: null,
    translations: {
      en: 'milks',
      de: 'Milch',
      es: 'leches',
      tr: 'sütler',
      te: 'పాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['drink']
  },
  {
    id: 'musik',
    type: 'noun',
    article: 'die',
    value: 'Musik',
    singular_id: null,
    plural_id: 'musik-plural',
    translations: {
      en: 'music',
      de: 'Musik',
      es: 'música',
      tr: 'müzik',
      te: 'సంగీతం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'musik-plural',
    type: 'noun',
    article: 'die',
    value: 'Musik',
    singular_id: 'musik',
    plural_id: null,
    translations: {
      en: 'musics',
      de: 'Musik',
      es: 'músicas',
      tr: 'müzikler',
      te: 'సంగీతం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'mutter',
    type: 'noun',
    article: 'die',
    value: 'Mutter',
    singular_id: null,
    plural_id: 'mütter',
    translations: {
      en: 'mother',
      de: 'Mutter',
      es: 'madre',
      tr: 'anne',
      te: 'తల్లి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'mütter',
    type: 'noun',
    article: 'die',
    value: 'Mütter',
    singular_id: 'mutter',
    plural_id: null,
    translations: {
      en: 'mothers',
      de: 'Mütter',
      es: 'madres',
      tr: 'anneler',
      te: 'తల్లులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'nachbarin',
    type: 'noun',
    article: 'die',
    value: 'Nachbarin',
    singular_id: null,
    plural_id: 'nachbarinnen',
    translations: {
      en: 'female neighbor',
      de: 'Nachbarin',
      es: 'vecina',
      tr: 'kadın komşu',
      te: 'పొరుగింటి స్త్రీ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'nachbarinnen',
    type: 'noun',
    article: 'die',
    value: 'Nachbarinnen',
    singular_id: 'nachbarin',
    plural_id: null,
    translations: {
      en: 'female neighbors',
      de: 'Nachbarinnen',
      es: 'vecinas',
      tr: 'kadın komşular',
      te: 'పొరుగింటి స్త్రీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'nacht',
    type: 'noun',
    article: 'die',
    value: 'Nacht',
    singular_id: null,
    plural_id: 'nächte',
    translations: {
      en: 'night',
      de: 'Nacht',
      es: 'noche',
      tr: 'gece',
      te: 'రాత్రి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'nächte',
    type: 'noun',
    article: 'die',
    value: 'Nächte',
    singular_id: 'nacht',
    plural_id: null,
    translations: {
      en: 'nights',
      de: 'Nächte',
      es: 'noches',
      tr: 'geceler',
      te: 'రాత్రులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'nummer',
    type: 'noun',
    article: 'die',
    value: 'Nummer',
    singular_id: null,
    plural_id: 'nummern',
    translations: {
      en: 'number',
      de: 'Nummer',
      es: 'número',
      tr: 'numara',
      te: 'సంఖ్య'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'measurements', 'numbers']
  },
  {
    id: 'nummern',
    type: 'noun',
    article: 'die',
    value: 'Nummern',
    singular_id: 'nummer',
    plural_id: null,
    translations: {
      en: 'numbers',
      de: 'Nummern',
      es: 'números',
      tr: 'numaralar',
      te: 'సంఖ్యలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'measurements', 'numbers']
  },
  {
    id: 'öffnungszeit',
    type: 'noun',
    article: 'die',
    value: 'Öffnungszeit',
    singular_id: null,
    plural_id: 'öffnungszeiten',
    translations: {
      en: 'opening time',
      de: 'Öffnungszeit',
      es: 'horario de apertura',
      tr: 'açılış saati',
      te: 'ప్రారంభ సమయం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time', 'work']
  },
  {
    id: 'öffnungszeiten',
    type: 'noun',
    article: 'die',
    value: 'Öffnungszeiten',
    singular_id: 'öffnungszeit',
    plural_id: null,
    translations: {
      en: 'opening times',
      de: 'Öffnungszeiten',
      es: 'horarios de apertura',
      tr: 'açılış saatleri',
      te: 'ప్రారంభ సమయాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time', 'work']
  },
  {
    id: 'oma',
    type: 'noun',
    article: 'die',
    value: 'Oma',
    singular_id: null,
    plural_id: 'omas',
    translations: {
      en: 'grandma',
      de: 'Oma',
      es: 'abuela',
      tr: 'nine',
      te: 'అమ్మమ్మ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'omas',
    type: 'noun',
    article: 'die',
    value: 'Omas',
    singular_id: 'oma',
    plural_id: null,
    translations: {
      en: 'grandmas',
      de: 'Omas',
      es: 'abuelas',
      tr: 'nineler',
      te: 'అమ్మమ్మలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'partnerin',
    type: 'noun',
    article: 'die',
    value: 'Partnerin',
    singular_id: null,
    plural_id: 'partnerinnen',
    translations: {
      en: 'female partner',
      de: 'Partnerin',
      es: 'pareja',
      tr: 'kadın partner',
      te: 'మహిళా భాగస్వామి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'partnerinnen',
    type: 'noun',
    article: 'die',
    value: 'Partnerinnen',
    singular_id: 'partnerin',
    plural_id: null,
    translations: {
      en: 'female partners',
      de: 'Partnerinnen',
      es: 'parejas',
      tr: 'kadın partnerler',
      te: 'మహిళా భాగస్వాముల'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'pause',
    type: 'noun',
    article: 'die',
    value: 'Pause',
    singular_id: null,
    plural_id: 'pausen',
    translations: {
      en: 'break',
      de: 'Pause',
      es: 'pausa',
      tr: 'mola',
      te: 'విరామం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'pausen',
    type: 'noun',
    article: 'die',
    value: 'Pausen',
    singular_id: 'pause',
    plural_id: null,
    translations: {
      en: 'breaks',
      de: 'Pausen',
      es: 'pausas',
      tr: 'molalar',
      te: 'విరామాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'polizistin',
    type: 'noun',
    article: 'die',
    value: 'Polizistin',
    singular_id: null,
    plural_id: 'polizistinnen',
    translations: {
      en: 'policewoman',
      de: 'Polizistin',
      es: 'policía',
      tr: 'kadın polis',
      te: 'మహిళా పోలీసు అధికారి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'polizistinnen',
    type: 'noun',
    article: 'die',
    value: 'Polizistinnen',
    singular_id: 'polizistin',
    plural_id: null,
    translations: {
      en: 'policewomen',
      de: 'Polizistinnen',
      es: 'policías',
      tr: 'kadın polisler',
      te: 'మహిళా పోలీసు అధికారులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'postleitzahl',
    type: 'noun',
    article: 'die',
    value: 'Postleitzahl',
    singular_id: null,
    plural_id: 'postleitzahlen',
    translations: {
      en: 'postal code',
      de: 'Postleitzahl',
      es: 'código postal',
      tr: 'posta kodu',
      te: 'పిన్ కోడ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'locations', 'personal-info']
  },
  {
    id: 'postleitzahlen',
    type: 'noun',
    article: 'die',
    value: 'Postleitzahlen',
    singular_id: 'postleitzahl',
    plural_id: null,
    translations: {
      en: 'postal codes',
      de: 'Postleitzahlen',
      es: 'códigos postales',
      tr: 'posta kodları',
      te: 'పిన్ కోడ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'locations', 'personal-info']
  },
  {
    id: 'rechnung',
    type: 'noun',
    article: 'die',
    value: 'Rechnung',
    singular_id: null,
    plural_id: 'rechnungen',
    translations: {
      en: 'bill',
      de: 'Rechnung',
      es: 'factura',
      tr: 'fatura',
      te: 'బిల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'money', 'shopping']
  },
  {
    id: 'rechnungen',
    type: 'noun',
    article: 'die',
    value: 'Rechnungen',
    singular_id: 'rechnung',
    plural_id: null,
    translations: {
      en: 'bills',
      de: 'Rechnungen',
      es: 'facturas',
      tr: 'faturalar',
      te: 'బిల్లులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'money', 'shopping']
  },
  {
    id: 'sahne',
    type: 'noun',
    article: 'die',
    value: 'Sahne',
    singular_id: null,
    plural_id: 'sahne-plural',
    translations: {
      en: 'cream',
      de: 'Sahne',
      es: 'nata',
      tr: 'krema',
      te: 'క్రీమ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'sahne-plural',
    type: 'noun',
    article: 'die',
    value: 'Sahne',
    singular_id: 'sahne',
    plural_id: null,
    translations: {
      en: 'creams',
      de: 'Sahne',
      es: 'natas',
      tr: 'kremalar',
      te: 'క్రీమ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'sängerin',
    type: 'noun',
    article: 'die',
    value: 'Sängerin',
    singular_id: null,
    plural_id: 'sängerinnen',
    translations: {
      en: 'female singer',
      de: 'Sängerin',
      es: 'cantante',
      tr: 'kadın şarkıcı',
      te: 'గాయని'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music', 'people', 'professions', 'work']
  },
  {
    id: 'sängerinnen',
    type: 'noun',
    article: 'die',
    value: 'Sängerinnen',
    singular_id: 'sängerin',
    plural_id: null,
    translations: {
      en: 'female singers',
      de: 'Sängerinnen',
      es: 'cantantes',
      tr: 'kadın şarkıcılar',
      te: 'గాయనులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music', 'people', 'professions', 'work']
  },
  {
    id: 'schauspielerin',
    type: 'noun',
    article: 'die',
    value: 'Schauspielerin',
    singular_id: null,
    plural_id: 'schauspielerinnen',
    translations: {
      en: 'actress',
      de: 'Schauspielerin',
      es: 'actriz',
      tr: 'kadın oyuncu',
      te: 'నటి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'people', 'professions', 'work']
  },
  {
    id: 'schauspielerinnen',
    type: 'noun',
    article: 'die',
    value: 'Schauspielerinnen',
    singular_id: 'schauspielerin',
    plural_id: null,
    translations: {
      en: 'actresses',
      de: 'Schauspielerinnen',
      es: 'actrices',
      tr: 'kadın oyuncular',
      te: 'నటులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'people', 'professions', 'work']
  },
  {
    id: 'schere',
    type: 'noun',
    article: 'die',
    value: 'Schere',
    singular_id: null,
    plural_id: 'scheren',
    translations: {
      en: 'scissors',
      de: 'Schere',
      es: 'tijeras',
      tr: 'makas',
      te: 'కత్తెర'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'scheren',
    type: 'noun',
    article: 'die',
    value: 'Scheren',
    singular_id: 'schere',
    plural_id: null,
    translations: {
      en: 'scissors',
      de: 'Scheren',
      es: 'tijeras',
      tr: 'makaslar',
      te: 'కత్తెరలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'schokolade',
    type: 'noun',
    article: 'die',
    value: 'Schokolade',
    singular_id: null,
    plural_id: 'schokoladen',
    translations: {
      en: 'chocolate',
      de: 'Schokolade',
      es: 'chocolate',
      tr: 'çikolata',
      te: 'చాక్లెట్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'shopping']
  },
  {
    id: 'schokoladen',
    type: 'noun',
    article: 'die',
    value: 'Schokoladen',
    singular_id: 'schokolade',
    plural_id: null,
    translations: {
      en: 'chocolates',
      de: 'Schokoladen',
      es: 'chocolates',
      tr: 'çikolatalar',
      te: 'చాక్లెట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'shopping']
  },
  {
    id: 'schwester',
    type: 'noun',
    article: 'die',
    value: 'Schwester',
    singular_id: null,
    plural_id: 'schwestern',
    translations: {
      en: 'sister',
      de: 'Schwester',
      es: 'hermana',
      tr: 'kız kardeş',
      te: 'సోదరి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'schwestern',
    type: 'noun',
    article: 'die',
    value: 'Schwestern',
    singular_id: 'schwester',
    plural_id: null,
    translations: {
      en: 'sisters',
      de: 'Schwestern',
      es: 'hermanas',
      tr: 'kız kardeşler',
      te: 'సోదరులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'serie',
    type: 'noun',
    article: 'die',
    value: 'Serie',
    singular_id: null,
    plural_id: 'serien',
    translations: {
      en: 'series',
      de: 'Serie',
      es: 'serie',
      tr: 'dizi',
      te: 'సిరీస్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure']
  },
  {
    id: 'serien',
    type: 'noun',
    article: 'die',
    value: 'Serien',
    singular_id: 'serie',
    plural_id: null,
    translations: {
      en: 'series',
      de: 'Serien',
      es: 'series',
      tr: 'diziler',
      te: 'సిరీస్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure']
  },
  {
    id: 'sonne',
    type: 'noun',
    article: 'die',
    value: 'Sonne',
    singular_id: null,
    plural_id: 'sonnen',
    translations: {
      en: 'sun',
      de: 'Sonne',
      es: 'sol',
      tr: 'güneş',
      te: 'సూర్యుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'weather']
  },
  {
    id: 'sonnen',
    type: 'noun',
    article: 'die',
    value: 'Sonnen',
    singular_id: 'sonne',
    plural_id: null,
    translations: {
      en: 'suns',
      de: 'Sonnen',
      es: 'soles',
      tr: 'güneşler',
      te: 'సూర్యుడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['nature', 'weather']
  },
  {
    id: 'spielerin',
    type: 'noun',
    article: 'die',
    value: 'Spielerin',
    singular_id: null,
    plural_id: 'spielerinnen',
    translations: {
      en: 'female player',
      de: 'Spielerin',
      es: 'jugadora',
      tr: 'kadın oyuncu',
      te: 'మహిళా ఆటగత్తె'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'people', 'professions', 'sports']
  },
  {
    id: 'spielerinnen',
    type: 'noun',
    article: 'die',
    value: 'Spielerinnen',
    singular_id: 'spielerin',
    plural_id: null,
    translations: {
      en: 'female players',
      de: 'Spielerinnen',
      es: 'jugadoras',
      tr: 'kadın oyuncular',
      te: 'మహిళా ఆటగత్తెలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'people', 'professions', 'sports']
  },
  {
    id: 'sprache',
    type: 'noun',
    article: 'die',
    value: 'Sprache',
    singular_id: null,
    plural_id: 'sprachen',
    translations: {
      en: 'language',
      de: 'Sprache',
      es: 'idioma',
      tr: 'dil',
      te: 'భాష'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'education', 'language']
  },
  {
    id: 'sprachen',
    type: 'noun',
    article: 'die',
    value: 'Sprachen',
    singular_id: 'sprache',
    plural_id: null,
    translations: {
      en: 'languages',
      de: 'Sprachen',
      es: 'idiomas',
      tr: 'diller',
      te: 'భాషలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'education', 'language']
  },
  {
    id: 'straße',
    type: 'noun',
    article: 'die',
    value: 'Straße',
    singular_id: null,
    plural_id: 'straßen',
    translations: {
      en: 'street',
      de: 'Straße',
      es: 'calle',
      tr: 'sokak',
      te: 'వీధి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations']
  },
  {
    id: 'straßen',
    type: 'noun',
    article: 'die',
    value: 'Straßen',
    singular_id: 'straße',
    plural_id: null,
    translations: {
      en: 'streets',
      de: 'Straßen',
      es: 'calles',
      tr: 'sokaklar',
      te: 'వీధులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations']
  },
  {
    id: 'studentin',
    type: 'noun',
    article: 'die',
    value: 'Studentin',
    singular_id: null,
    plural_id: 'studentinnen',
    translations: {
      en: 'female student',
      de: 'Studentin',
      es: 'estudiante',
      tr: 'kadın öğrenci',
      te: 'మహిళా విద్యార్థి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'work']
  },
  {
    id: 'studentinnen',
    type: 'noun',
    article: 'die',
    value: 'Studentinnen',
    singular_id: 'studentin',
    plural_id: null,
    translations: {
      en: 'female students',
      de: 'Studentinnen',
      es: 'estudiantes',
      tr: 'kadın öğrenciler',
      te: 'మహిళా విద్యార్థులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'work']
  },
  {
    id: 'stunde',
    type: 'noun',
    article: 'die',
    value: 'Stunde',
    singular_id: null,
    plural_id: 'stunden',
    translations: {
      en: 'hour',
      de: 'Stunde',
      es: 'hora',
      tr: 'saat',
      te: 'గంట'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'stunden',
    type: 'noun',
    article: 'die',
    value: 'Stunden',
    singular_id: 'stunde',
    plural_id: null,
    translations: {
      en: 'hours',
      de: 'Stunden',
      es: 'horas',
      tr: 'saatler',
      te: 'గంటలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['time']
  },
  {
    id: 'suppe',
    type: 'noun',
    article: 'die',
    value: 'Suppe',
    singular_id: null,
    plural_id: 'suppen',
    translations: {
      en: 'soup',
      de: 'Suppe',
      es: 'sopa',
      tr: 'çorba',
      te: 'సూప్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'suppen',
    type: 'noun',
    article: 'die',
    value: 'Suppen',
    singular_id: 'suppe',
    plural_id: null,
    translations: {
      en: 'soups',
      de: 'Suppen',
      es: 'sopas',
      tr: 'çorbalar',
      te: 'సూప్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'tante',
    type: 'noun',
    article: 'die',
    value: 'Tante',
    singular_id: null,
    plural_id: 'tanten',
    translations: {
      en: 'aunt',
      de: 'Tante',
      es: 'tía',
      tr: 'teyze',
      te: 'అత్త'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'tanten',
    type: 'noun',
    article: 'die',
    value: 'Tanten',
    singular_id: 'tante',
    plural_id: null,
    translations: {
      en: 'aunts',
      de: 'Tanten',
      es: 'tías',
      tr: 'teyzeler',
      te: 'అత్తలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'tasche',
    type: 'noun',
    article: 'die',
    value: 'Tasche',
    singular_id: null,
    plural_id: 'taschen',
    translations: {
      en: 'bag',
      de: 'Tasche',
      es: 'bolsa',
      tr: 'çanta',
      te: 'సంచి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household', 'shopping']
  },
  {
    id: 'taschen',
    type: 'noun',
    article: 'die',
    value: 'Taschen',
    singular_id: 'tasche',
    plural_id: null,
    translations: {
      en: 'bags',
      de: 'Taschen',
      es: 'bolsas',
      tr: 'çantalar',
      te: 'సంచిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['clothing', 'household', 'shopping']
  },
  {
    id: 'tasse',
    type: 'noun',
    article: 'die',
    value: 'Tasse',
    singular_id: null,
    plural_id: 'tassen',
    translations: {
      en: 'cup',
      de: 'Tasse',
      es: 'taza',
      tr: 'fincan',
      te: 'కప్పు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'tassen',
    type: 'noun',
    article: 'die',
    value: 'Tassen',
    singular_id: 'tasse',
    plural_id: null,
    translations: {
      en: 'cups',
      de: 'Tassen',
      es: 'tazas',
      tr: 'fincanlar',
      te: 'కప్పులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'taxifahrerin',
    type: 'noun',
    article: 'die',
    value: 'Taxifahrerin',
    singular_id: null,
    plural_id: 'taxifahrerinnen',
    translations: {
      en: 'female taxi driver',
      de: 'Taxifahrerin',
      es: 'taxista',
      tr: 'kadın taksi şoförü',
      te: 'మహిళా టాక్సీ డ్రైవర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'transportation', 'work']
  },
  {
    id: 'taxifahrerinnen',
    type: 'noun',
    article: 'die',
    value: 'Taxifahrerinnen',
    singular_id: 'taxifahrerin',
    plural_id: null,
    translations: {
      en: 'female taxi drivers',
      de: 'Taxifahrerinnen',
      es: 'taxistas',
      tr: 'kadın taksi şoförleri',
      te: 'మహిళా టాక్సీ డ్రైవర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'transportation', 'work']
  },
  {
    id: 'telefonnummer',
    type: 'noun',
    article: 'die',
    value: 'Telefonnummer',
    singular_id: null,
    plural_id: 'telefonnummern',
    translations: {
      en: 'phone number',
      de: 'Telefonnummer',
      es: 'número de teléfono',
      tr: 'telefon numarası',
      te: 'ఫోన్ నంబర్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'personal-info']
  },
  {
    id: 'telefonnummern',
    type: 'noun',
    article: 'die',
    value: 'Telefonnummern',
    singular_id: 'telefonnummer',
    plural_id: null,
    translations: {
      en: 'phone numbers',
      de: 'Telefonnummern',
      es: 'números de teléfono',
      tr: 'telefon numaraları',
      te: 'ఫోన్ నంబర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'personal-info']
  },
  {
    id: 'temperatur',
    type: 'noun',
    article: 'die',
    value: 'Temperatur',
    singular_id: null,
    plural_id: 'temperaturen',
    translations: {
      en: 'temperature',
      de: 'Temperatur',
      es: 'temperatura',
      tr: 'sıcaklık',
      te: 'ఉష్ణోగ్రత'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'measurements', 'nature', 'weather']
  },
  {
    id: 'temperaturen',
    type: 'noun',
    article: 'die',
    value: 'Temperaturen',
    singular_id: 'temperatur',
    plural_id: null,
    translations: {
      en: 'temperatures',
      de: 'Temperaturen',
      es: 'temperaturas',
      tr: 'sıcaklıklar',
      te: 'ఉష్ణోగ్రతలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'measurements', 'nature', 'weather']
  },
  {
    id: 'tochter',
    type: 'noun',
    article: 'die',
    value: 'Tochter',
    singular_id: null,
    plural_id: 'töchter',
    translations: {
      en: 'daughter',
      de: 'Tochter',
      es: 'hija',
      tr: 'kız evlat',
      te: 'కూతురు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'töchter',
    type: 'noun',
    article: 'die',
    value: 'Töchter',
    singular_id: 'tochter',
    plural_id: null,
    translations: {
      en: 'daughters',
      de: 'Töchter',
      es: 'hijas',
      tr: 'kız evlatlar',
      te: 'కూతుళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['family', 'people']
  },
  {
    id: 'tomate',
    type: 'noun',
    article: 'die',
    value: 'Tomate',
    singular_id: null,
    plural_id: 'tomaten',
    translations: {
      en: 'tomato',
      de: 'Tomate',
      es: 'tomate',
      tr: 'domates',
      te: 'టమాటా'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'tomaten',
    type: 'noun',
    article: 'die',
    value: 'Tomaten',
    singular_id: 'tomate',
    plural_id: null,
    translations: {
      en: 'tomatoes',
      de: 'Tomaten',
      es: 'tomates',
      tr: 'domatesler',
      te: 'టమాటాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food', 'nature']
  },
  {
    id: 'trainerin',
    type: 'noun',
    article: 'die',
    value: 'Trainerin',
    singular_id: null,
    plural_id: 'trainerinnen',
    translations: {
      en: 'female trainer',
      de: 'Trainerin',
      es: 'entrenadora',
      tr: 'kadın antrenör',
      te: 'మహిళా శిక్షకురాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'sports', 'work']
  },
  {
    id: 'trainerinnen',
    type: 'noun',
    article: 'die',
    value: 'Trainerinnen',
    singular_id: 'trainerin',
    plural_id: null,
    translations: {
      en: 'female trainers',
      de: 'Trainerinnen',
      es: 'entrenadoras',
      tr: 'kadın antrenörler',
      te: 'మహిళా శిక్షకురాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'sports', 'work']
  },
  {
    id: 'tüte',
    type: 'noun',
    article: 'die',
    value: 'Tüte',
    singular_id: null,
    plural_id: 'tüten',
    translations: {
      en: 'bag',
      de: 'Tüte',
      es: 'bolsa',
      tr: 'poşet',
      te: 'సంచి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'shopping']
  },
  {
    id: 'tüten',
    type: 'noun',
    article: 'die',
    value: 'Tüten',
    singular_id: 'tüte',
    plural_id: null,
    translations: {
      en: 'bags',
      de: 'Tüten',
      es: 'bolsas',
      tr: 'poşetler',
      te: 'సంచిలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'shopping']
  },
  {
    id: 'uhr',
    type: 'noun',
    article: 'die',
    value: 'Uhr',
    singular_id: null,
    plural_id: 'uhren',
    translations: {
      en: 'clock',
      de: 'Uhr',
      es: 'reloj',
      tr: 'saat',
      te: 'గడియారం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'time']
  },
  {
    id: 'uhren',
    type: 'noun',
    article: 'die',
    value: 'Uhren',
    singular_id: 'uhr',
    plural_id: null,
    translations: {
      en: 'clocks',
      de: 'Uhren',
      es: 'relojes',
      tr: 'saatler',
      te: 'గడియారాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'time']
  },
  {
    id: 'unterschrift',
    type: 'noun',
    article: 'die',
    value: 'Unterschrift',
    singular_id: null,
    plural_id: 'unterschriften',
    translations: {
      en: 'signature',
      de: 'Unterschrift',
      es: 'firma',
      tr: 'imza',
      te: 'సంతకం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents', 'personal-info']
  },
  {
    id: 'unterschriften',
    type: 'noun',
    article: 'die',
    value: 'Unterschriften',
    singular_id: 'unterschrift',
    plural_id: null,
    translations: {
      en: 'signatures',
      de: 'Unterschriften',
      es: 'firmas',
      tr: 'imzalar',
      te: 'సంతకాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents', 'personal-info']
  },
  {
    id: 'verkäuferin',
    type: 'noun',
    article: 'die',
    value: 'Verkäuferin',
    singular_id: null,
    plural_id: 'verkäuferinnen',
    translations: {
      en: 'saleswoman',
      de: 'Verkäuferin',
      es: 'vendedora',
      tr: 'kadın satıcı',
      te: 'మహిళా విక్రేత'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'verkäuferinnen',
    type: 'noun',
    article: 'die',
    value: 'Verkäuferinnen',
    singular_id: 'verkäuferin',
    plural_id: null,
    translations: {
      en: 'saleswomen',
      de: 'Verkäuferinnen',
      es: 'vendedoras',
      tr: 'kadın satıcılar',
      te: 'మహిళా విక్రేతలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'shopping', 'work']
  },
  {
    id: 'wohnung',
    type: 'noun',
    article: 'die',
    value: 'Wohnung',
    singular_id: null,
    plural_id: 'wohnungen',
    translations: {
      en: 'apartment',
      de: 'Wohnung',
      es: 'vivienda',
      tr: 'daire',
      te: 'అపార్ట్‌మెంట్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'wohnungen',
    type: 'noun',
    article: 'die',
    value: 'Wohnungen',
    singular_id: 'wohnung',
    plural_id: null,
    translations: {
      en: 'apartments',
      de: 'Wohnungen',
      es: 'viviendas',
      tr: 'daireler',
      te: 'అపార్ట్‌మెంట్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'wurst',
    type: 'noun',
    article: 'die',
    value: 'Wurst',
    singular_id: null,
    plural_id: 'würste',
    translations: {
      en: 'sausage',
      de: 'Wurst',
      es: 'salchicha',
      tr: 'sosis',
      te: 'సాసేజ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'würste',
    type: 'noun',
    article: 'die',
    value: 'Würste',
    singular_id: 'wurst',
    plural_id: null,
    translations: {
      en: 'sausages',
      de: 'Würste',
      es: 'salchichas',
      tr: 'sosisler',
      te: 'సాసేజ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['food']
  },
  {
    id: 'zahl',
    type: 'noun',
    article: 'die',
    value: 'Zahl',
    singular_id: null,
    plural_id: 'zahlen',
    translations: {
      en: 'number',
      de: 'Zahl',
      es: 'número',
      tr: 'sayı',
      te: 'సంఖ్య'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
  },
  {
    id: 'zahlen',
    type: 'noun',
    article: 'die',
    value: 'Zahlen',
    singular_id: 'zahl',
    plural_id: null,
    translations: {
      en: 'numbers',
      de: 'Zahlen',
      es: 'números',
      tr: 'sayılar',
      te: 'సంఖ్యలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
  },
  {
    id: 'zahnärztin',
    type: 'noun',
    article: 'die',
    value: 'Zahnärztin',
    singular_id: null,
    plural_id: 'zahnärztinnen',
    translations: {
      en: 'female dentist',
      de: 'Zahnärztin',
      es: 'dentista',
      tr: 'kadın dişçi',
      te: 'మహిళా దంత వైద్యురాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'zahnärztinnen',
    type: 'noun',
    article: 'die',
    value: 'Zahnärztinnen',
    singular_id: 'zahnärztin',
    plural_id: null,
    translations: {
      en: 'female dentists',
      de: 'Zahnärztinnen',
      es: 'dentistas',
      tr: 'kadın dişçiler',
      te: 'మహిళా దంత వైద్యురాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['health', 'people', 'professions', 'work']
  },
  {
    id: 'zeit',
    type: 'noun',
    article: 'die',
    value: 'Zeit',
    singular_id: null,
    plural_id: 'zeiten',
    translations: {
      en: 'time',
      de: 'Zeit',
      es: 'tiempo',
      tr: 'zaman',
      te: 'సమయం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'time']
  },
  {
    id: 'zeiten',
    type: 'noun',
    article: 'die',
    value: 'Zeiten',
    singular_id: 'zeit',
    plural_id: null,
    translations: {
      en: 'times',
      de: 'Zeiten',
      es: 'tiempos',
      tr: 'zamanlar',
      te: 'సమయాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'time']
  },
  {
    id: 'zeitung',
    type: 'noun',
    article: 'die',
    value: 'Zeitung',
    singular_id: null,
    plural_id: 'zeitungen',
    translations: {
      en: 'newspaper',
      de: 'Zeitung',
      es: 'periódico',
      tr: 'gazete',
      te: 'వార్తాపత్రిక'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents']
  },
  {
    id: 'zeitungen',
    type: 'noun',
    article: 'die',
    value: 'Zeitungen',
    singular_id: 'zeitung',
    plural_id: null,
    translations: {
      en: 'newspapers',
      de: 'Zeitungen',
      es: 'periódicos',
      tr: 'gazeteler',
      te: 'వార్తాపత్రికలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication', 'documents']
  }
  ,
  {
    id: 'geld',
    type: 'noun',
    article: 'das',
    value: 'Geld',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'money',
      de: 'Geld',
      es: 'dinero',
      tr: 'para',
      te: 'డబ్బు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['money', 'shopping']
  },
  {
    id: 'bild',
    type: 'noun',
    article: 'das',
    value: 'Bild',
    singular_id: null,
    plural_id: 'bilder',
    translations: {
      en: 'picture / image',
      de: 'Bild',
      es: 'imagen / foto',
      tr: 'resim',
      te: 'చిత్రం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts']
  },
  {
    id: 'bilder',
    type: 'noun',
    article: 'die',
    value: 'Bilder',
    singular_id: 'bild',
    plural_id: null,
    translations: {
      en: 'pictures / images',
      de: 'Bilder',
      es: 'imágenes / fotos',
      tr: 'resimler',
      te: 'చిత్రాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts']
  },
  {
    id: 'zentrum',
    type: 'noun',
    article: 'das',
    value: 'Zentrum',
    singular_id: null,
    plural_id: 'zentren',
    translations: {
      en: 'center',
      de: 'Zentrum',
      es: 'centro',
      tr: 'merkez',
      te: 'కేంద్రం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations']
  },
  {
    id: 'zentren',
    type: 'noun',
    article: 'die',
    value: 'Zentren',
    singular_id: 'zentrum',
    plural_id: null,
    translations: {
      en: 'centers',
      de: 'Zentren',
      es: 'centros',
      tr: 'merkezler',
      te: 'కేంద్రాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations']
  },
  {
    id: 'glück',
    type: 'noun',
    article: 'das',
    value: 'Glück',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'luck / happiness',
      de: 'Glück',
      es: 'suerte / felicidad',
      tr: 'şans / mutluluk',
      te: 'అదృష్టం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'emotions']
  },
  {
    id: 'haar',
    type: 'noun',
    article: 'das',
    value: 'Haar',
    singular_id: null,
    plural_id: 'haare',
    translations: {
      en: 'hair',
      de: 'Haar',
      es: 'cabello',
      tr: 'saç',
      te: 'జుట్టు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['body']
  },
  {
    id: 'haare',
    type: 'noun',
    article: 'die',
    value: 'Haare',
    singular_id: 'haar',
    plural_id: null,
    translations: {
      en: 'hairs',
      de: 'Haare',
      es: 'cabellos',
      tr: 'saçlar',
      te: 'జుట్టులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['body']
  },
  {
    id: 'konzert',
    type: 'noun',
    article: 'das',
    value: 'Konzert',
    singular_id: null,
    plural_id: 'konzerte',
    translations: {
      en: 'concert',
      de: 'Konzert',
      es: 'concierto',
      tr: 'konser',
      te: 'కచేరీ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'konzerte',
    type: 'noun',
    article: 'die',
    value: 'Konzerte',
    singular_id: 'konzert',
    plural_id: null,
    translations: {
      en: 'concerts',
      de: 'Konzerte',
      es: 'conciertos',
      tr: 'konserler',
      te: 'కచేరీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'music']
  },
  {
    id: 'pech',
    type: 'noun',
    article: 'das',
    value: 'Pech',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'bad luck',
      de: 'Pech',
      es: 'mala suerte',
      tr: 'şanssızlık',
      te: 'దురదృష్టం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'emotions']
  },
  {
    id: 'abitur',
    type: 'noun',
    article: 'das',
    value: 'Abitur',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'high school diploma',
      de: 'Abitur',
      es: 'bachillerato',
      tr: 'lise diploması',
      te: 'డిప్లొమా'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['documents', 'education']
  },
  {
    id: 'problem',
    type: 'noun',
    article: 'das',
    value: 'Problem',
    singular_id: null,
    plural_id: 'probleme',
    translations: {
      en: 'problem',
      de: 'Problem',
      es: 'problema',
      tr: 'problem',
      te: 'సమస్య'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'probleme',
    type: 'noun',
    article: 'die',
    value: 'Probleme',
    singular_id: 'problem',
    plural_id: null,
    translations: {
      en: 'problems',
      de: 'Probleme',
      es: 'problemas',
      tr: 'problemler',
      te: 'సమస్యలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'museum',
    type: 'noun',
    article: 'das',
    value: 'Museum',
    singular_id: null,
    plural_id: 'museen',
    translations: {
      en: 'museum',
      de: 'Museum',
      es: 'museo',
      tr: 'müze',
      te: 'మ్యూజియం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'locations']
  },
  {
    id: 'museen',
    type: 'noun',
    article: 'die',
    value: 'Museen',
    singular_id: 'museum',
    plural_id: null,
    translations: {
      en: 'museums',
      de: 'Museen',
      es: 'museos',
      tr: 'müzeler',
      te: 'మ్యూజియాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'locations']
  },
  {
    id: 'gast',
    type: 'noun',
    article: 'der',
    value: 'Gast',
    singular_id: null,
    plural_id: 'gäste',
    translations: {
      en: 'guest',
      de: 'Gast',
      es: 'invitado / huésped',
      tr: 'misafir',
      te: 'అతిథి'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'travel']
  },
  {
    id: 'gäste',
    type: 'noun',
    article: 'die',
    value: 'Gäste',
    singular_id: 'gast',
    plural_id: null,
    translations: {
      en: 'guests',
      de: 'Gäste',
      es: 'invitados / huéspedes',
      tr: 'misafirler',
      te: 'అతిథులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'travel']
  },
  {
    id: 'flughafen',
    type: 'noun',
    article: 'der',
    value: 'Flughafen',
    singular_id: null,
    plural_id: 'flughäfen',
    translations: {
      en: 'airport',
      de: 'Flughafen',
      es: 'aeropuerto',
      tr: 'havaalanı',
      te: 'విమానాశ్రయం'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'transportation', 'travel']
  },
  {
    id: 'flughäfen',
    type: 'noun',
    article: 'die',
    value: 'Flughäfen',
    singular_id: 'flughafen',
    plural_id: null,
    translations: {
      en: 'airports',
      de: 'Flughäfen',
      es: 'aeropuertos',
      tr: 'havaalanları',
      te: 'విమానాశ్రయాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'transportation', 'travel']
  },
  {
    id: 'verkehr',
    type: 'noun',
    article: 'der',
    value: 'Verkehr',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'traffic',
      de: 'Verkehr',
      es: 'tráfico',
      tr: 'trafik',
      te: 'ట్రాఫిక్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'club',
    type: 'noun',
    article: 'der',
    value: 'Club',
    singular_id: null,
    plural_id: 'clubs',
    translations: {
      en: 'club',
      de: 'Club',
      es: 'club',
      tr: 'kulüp',
      te: 'క్లబ్'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'locations']
  },
  {
    id: 'clubs',
    type: 'noun',
    article: 'die',
    value: 'Clubs',
    singular_id: 'club',
    plural_id: null,
    translations: {
      en: 'clubs',
      de: 'Clubs',
      es: 'clubes',
      tr: 'kulüpler',
      te: 'క్లబ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'locations']
  },
  {
    id: 'spaziergang',
    type: 'noun',
    article: 'der',
    value: 'Spaziergang',
    singular_id: null,
    plural_id: 'spaziergänge',
    translations: {
      en: 'walk / stroll',
      de: 'Spaziergang',
      es: 'paseo / caminata',
      tr: 'yürüyüş',
      te: 'నడక'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'spaziergänge',
    type: 'noun',
    article: 'die',
    value: 'Spaziergänge',
    singular_id: 'spaziergang',
    plural_id: null,
    translations: {
      en: 'walks / strolls',
      de: 'Spaziergänge',
      es: 'paseos / caminatas',
      tr: 'yürüyüşler',
      te: 'నడకలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'kilometer',
    type: 'noun',
    article: 'der',
    value: 'Kilometer',
    singular_id: null,
    plural_id: 'kilometer-plural',
    translations: {
      en: 'kilometer',
      de: 'Kilometer',
      es: 'kilómetro',
      tr: 'kilometre',
      te: 'కిలోమీటరు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'kilometer-plural',
    type: 'noun',
    article: 'die',
    value: 'Kilometer',
    singular_id: 'kilometer',
    plural_id: null,
    translations: {
      en: 'kilometers',
      de: 'Kilometer',
      es: 'kilómetros',
      tr: 'kilometreler',
      te: 'కిలోమీటర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'meter',
    type: 'noun',
    article: 'der',
    value: 'Meter',
    singular_id: null,
    plural_id: 'meter-plural',
    translations: {
      en: 'meter',
      de: 'Meter',
      es: 'metro',
      tr: 'metre',
      te: 'మీటరు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'meter-plural',
    type: 'noun',
    article: 'die',
    value: 'Meter',
    singular_id: 'meter',
    plural_id: null,
    translations: {
      en: 'meters',
      de: 'Meter',
      es: 'metros',
      tr: 'metreler',
      te: 'మీటర్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['measurements']
  },
  {
    id: 'ausflug',
    type: 'noun',
    article: 'der',
    value: 'Ausflug',
    singular_id: null,
    plural_id: 'ausflüge',
    translations: {
      en: 'trip / excursion',
      de: 'Ausflug',
      es: 'excursión',
      tr: 'gezi',
      te: 'యాత్ర'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'travel']
  },
  {
    id: 'ausflüge',
    type: 'noun',
    article: 'die',
    value: 'Ausflüge',
    singular_id: 'ausflug',
    plural_id: null,
    translations: {
      en: 'trips / excursions',
      de: 'Ausflüge',
      es: 'excursiones',
      tr: 'geziler',
      te: 'యాత్రలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'travel']
  },
  {
    id: 'park',
    type: 'noun',
    article: 'der',
    value: 'Park',
    singular_id: null,
    plural_id: 'parks',
    translations: {
      en: 'park',
      de: 'Park',
      es: 'parque',
      tr: 'park',
      te: 'పార్కు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'locations', 'nature']
  },
  {
    id: 'parks',
    type: 'noun',
    article: 'die',
    value: 'Parks',
    singular_id: 'park',
    plural_id: null,
    translations: {
      en: 'parks',
      de: 'Parks',
      es: 'parques',
      tr: 'parklar',
      te: 'పార్కులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure', 'locations', 'nature']
  },
  {
    id: 'see',
    type: 'noun',
    article: 'der',
    value: 'See',
    singular_id: null,
    plural_id: 'seen',
    translations: {
      en: 'lake',
      de: 'See',
      es: 'lago',
      tr: 'göl',
      te: 'సరస్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'nature']
  },
  {
    id: 'seen',
    type: 'noun',
    article: 'die',
    value: 'Seen',
    singular_id: 'see',
    plural_id: null,
    translations: {
      en: 'lakes',
      de: 'Seen',
      es: 'lagos',
      tr: 'göller',
      te: 'సరస్సులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'nature']
  },
  {
    id: 'abschluss',
    type: 'noun',
    article: 'der',
    value: 'Abschluss',
    singular_id: null,
    plural_id: 'abschlüsse',
    translations: {
      en: 'graduation / qualification',
      de: 'Abschluss',
      es: 'graduación / título',
      tr: 'mezuniyet / diploma',
      te: 'డిగ్రీ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'work']
  },
  {
    id: 'abschlüsse',
    type: 'noun',
    article: 'die',
    value: 'Abschlüsse',
    singular_id: 'abschluss',
    plural_id: null,
    translations: {
      en: 'graduations / qualifications',
      de: 'Abschlüsse',
      es: 'graduaciones / títulos',
      tr: 'mezuniyetler / diplomalar',
      te: 'డిగ్రీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'work']
  },
  {
    id: 'arbeiter',
    type: 'noun',
    article: 'der',
    value: 'Arbeiter',
    singular_id: null,
    plural_id: 'arbeiter-plural',
    translations: {
      en: 'worker',
      de: 'Arbeiter',
      es: 'trabajador',
      tr: 'işçi',
      te: 'కార్మికుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'arbeiter-plural',
    type: 'noun',
    article: 'die',
    value: 'Arbeiter',
    singular_id: 'arbeiter',
    plural_id: null,
    translations: {
      en: 'workers',
      de: 'Arbeiter',
      es: 'trabajadores',
      tr: 'işçiler',
      te: 'కార్మికులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'tourist',
    type: 'noun',
    article: 'der',
    value: 'Tourist',
    singular_id: null,
    plural_id: 'touristen',
    translations: {
      en: 'tourist',
      de: 'Tourist',
      es: 'turista',
      tr: 'turist',
      te: 'పర్యాటకుడు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'travel']
  },
  {
    id: 'touristen',
    type: 'noun',
    article: 'die',
    value: 'Touristen',
    singular_id: 'tourist',
    plural_id: null,
    translations: {
      en: 'tourists',
      de: 'Touristen',
      es: 'turistas',
      tr: 'turistler',
      te: 'పర్యాటకులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'travel']
  },
  {
    id: 'besuch',
    type: 'noun',
    article: 'der',
    value: 'Besuch',
    singular_id: null,
    plural_id: 'besuche',
    translations: {
      en: 'visit',
      de: 'Besuch',
      es: 'visita',
      tr: 'ziyaret',
      te: 'సందర్శన'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'travel']
  },
  {
    id: 'besuche',
    type: 'noun',
    article: 'die',
    value: 'Besuche',
    singular_id: 'besuch',
    plural_id: null,
    translations: {
      en: 'visits',
      de: 'Besuche',
      es: 'visitas',
      tr: 'ziyaretler',
      te: 'సందర్శనలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'travel']
  },
  {
    id: 'tipp',
    type: 'noun',
    article: 'der',
    value: 'Tipp',
    singular_id: null,
    plural_id: 'tipps',
    translations: {
      en: 'tip / advice',
      de: 'Tipp',
      es: 'consejo',
      tr: 'ipucu',
      te: 'చిట్కా'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'tipps',
    type: 'noun',
    article: 'die',
    value: 'Tipps',
    singular_id: 'tipp',
    plural_id: null,
    translations: {
      en: 'tips / advice',
      de: 'Tipps',
      es: 'consejos',
      tr: 'ipuçları',
      te: 'చిట్కాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract']
  },
  {
    id: 'bus',
    type: 'noun',
    article: 'der',
    value: 'Bus',
    singular_id: null,
    plural_id: 'busse',
    translations: {
      en: 'bus',
      de: 'Bus',
      es: 'autobús',
      tr: 'otobüs',
      te: 'బస్సు'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'busse',
    type: 'noun',
    article: 'die',
    value: 'Busse',
    singular_id: 'bus',
    plural_id: null,
    translations: {
      en: 'buses',
      de: 'Busse',
      es: 'autobuses',
      tr: 'otobüsler',
      te: 'బస్సులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'leute',
    type: 'noun',
    article: 'die',
    value: 'Leute',
    singular_id: null,
    plural_id: null,
    translations: {
      en: 'people',
      de: 'Leute',
      es: 'gente / personas',
      tr: 'insanlar',
      te: 'ప్రజలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people']
  },
  {
    id: 'firma',
    type: 'noun',
    article: 'die',
    value: 'Firma',
    singular_id: null,
    plural_id: 'firmen',
    translations: {
      en: 'company',
      de: 'Firma',
      es: 'empresa',
      tr: 'şirket',
      te: 'సంస్థ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'work']
  },
  {
    id: 'firmen',
    type: 'noun',
    article: 'die',
    value: 'Firmen',
    singular_id: 'firma',
    plural_id: null,
    translations: {
      en: 'companies',
      de: 'Firmen',
      es: 'empresas',
      tr: 'şirketler',
      te: 'సంస్థలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'work']
  },
  {
    id: 'stadt',
    type: 'noun',
    article: 'die',
    value: 'Stadt',
    singular_id: null,
    plural_id: 'städte',
    translations: {
      en: 'city',
      de: 'Stadt',
      es: 'ciudad',
      tr: 'şehir',
      te: 'నగరం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'städte',
    type: 'noun',
    article: 'die',
    value: 'Städte',
    singular_id: 'stadt',
    plural_id: null,
    translations: {
      en: 'cities',
      de: 'Städte',
      es: 'ciudades',
      tr: 'şehirler',
      te: 'నగరాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'travel']
  },
  {
    id: 'nachricht',
    type: 'noun',
    article: 'die',
    value: 'Nachricht',
    singular_id: null,
    plural_id: 'nachrichten',
    translations: {
      en: 'message / news',
      de: 'Nachricht',
      es: 'mensaje / noticia',
      tr: 'mesaj / haber',
      te: 'సందేశం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication']
  },
  {
    id: 'nachrichten',
    type: 'noun',
    article: 'die',
    value: 'Nachrichten',
    singular_id: 'nachricht',
    plural_id: null,
    translations: {
      en: 'messages / news',
      de: 'Nachrichten',
      es: 'mensajes / noticias',
      tr: 'mesajlar / haberler',
      te: 'సందేశాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['communication']
  },
  {
    id: 'party',
    type: 'noun',
    article: 'die',
    value: 'Party',
    singular_id: null,
    plural_id: 'partys',
    translations: {
      en: 'party',
      de: 'Party',
      es: 'fiesta',
      tr: 'parti',
      te: 'పార్టీ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'partys',
    type: 'noun',
    article: 'die',
    value: 'Partys',
    singular_id: 'party',
    plural_id: null,
    translations: {
      en: 'parties',
      de: 'Partys',
      es: 'fiestas',
      tr: 'partiler',
      te: 'పార్టీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['leisure']
  },
  {
    id: 'universität',
    type: 'noun',
    article: 'die',
    value: 'Universität',
    singular_id: null,
    plural_id: 'universitäten',
    translations: {
      en: 'university',
      de: 'Universität',
      es: 'universidad',
      tr: 'üniversite',
      te: 'విశ్వవిద్యాలయం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'locations', 'work']
  },
  {
    id: 'universitäten',
    type: 'noun',
    article: 'die',
    value: 'Universitäten',
    singular_id: 'universität',
    plural_id: null,
    translations: {
      en: 'universities',
      de: 'Universitäten',
      es: 'universidades',
      tr: 'üniversiteler',
      te: 'విశ్వవిద్యాలయాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'locations', 'work']
  },
  {
    id: 'arbeiterin',
    type: 'noun',
    article: 'die',
    value: 'Arbeiterin',
    singular_id: null,
    plural_id: 'arbeiterinnen',
    translations: {
      en: 'female worker',
      de: 'Arbeiterin',
      es: 'trabajadora',
      tr: 'kadın işçi',
      te: 'మహిళా కార్మికురాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'arbeiterinnen',
    type: 'noun',
    article: 'die',
    value: 'Arbeiterinnen',
    singular_id: 'arbeiterin',
    plural_id: null,
    translations: {
      en: 'female workers',
      de: 'Arbeiterinnen',
      es: 'trabajadoras',
      tr: 'kadın işçiler',
      te: 'మహిళా కార్మికురాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'professions', 'work']
  },
  {
    id: 'prüfung',
    type: 'noun',
    article: 'die',
    value: 'Prüfung',
    singular_id: null,
    plural_id: 'prüfungen',
    translations: {
      en: 'exam',
      de: 'Prüfung',
      es: 'examen',
      tr: 'sınav',
      te: 'పరీక్ష'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'education']
  },
  {
    id: 'prüfungen',
    type: 'noun',
    article: 'die',
    value: 'Prüfungen',
    singular_id: 'prüfung',
    plural_id: null,
    translations: {
      en: 'exams',
      de: 'Prüfungen',
      es: 'exámenes',
      tr: 'sınavlar',
      te: 'పరీక్షలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'education']
  },
  {
    id: 'schule',
    type: 'noun',
    article: 'die',
    value: 'Schule',
    singular_id: null,
    plural_id: 'schulen',
    translations: {
      en: 'school',
      de: 'Schule',
      es: 'escuela',
      tr: 'okul',
      te: 'బడి'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'locations', 'work']
  },
  {
    id: 'schulen',
    type: 'noun',
    article: 'die',
    value: 'Schulen',
    singular_id: 'schule',
    plural_id: null,
    translations: {
      en: 'schools',
      de: 'Schulen',
      es: 'escuelas',
      tr: 'okullar',
      te: 'బడులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['education', 'locations', 'work']
  },
  {
    id: 'stelle',
    type: 'noun',
    article: 'die',
    value: 'Stelle',
    singular_id: null,
    plural_id: 'stellen',
    translations: {
      en: 'position / place',
      de: 'Stelle',
      es: 'puesto / lugar',
      tr: 'pozisyon / yer',
      te: 'ఉద్యోగం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'work']
  },
  {
    id: 'stellen',
    type: 'noun',
    article: 'die',
    value: 'Stellen',
    singular_id: 'stelle',
    plural_id: null,
    translations: {
      en: 'positions / places',
      de: 'Stellen',
      es: 'puestos / lugares',
      tr: 'pozisyonlar / yerler',
      te: 'ఉద్యోగాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['abstract', 'work']
  },
  {
    id: 'app',
    type: 'noun',
    article: 'die',
    value: 'App',
    singular_id: null,
    plural_id: 'apps',
    translations: {
      en: 'app',
      de: 'App',
      es: 'aplicación',
      tr: 'uygulama',
      te: 'అనువర్తనం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['technology']
  },
  {
    id: 'apps',
    type: 'noun',
    article: 'die',
    value: 'Apps',
    singular_id: 'app',
    plural_id: null,
    translations: {
      en: 'apps',
      de: 'Apps',
      es: 'aplicaciones',
      tr: 'uygulamalar',
      te: 'అనువర్తనాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['technology']
  },
  {
    id: 'touristin',
    type: 'noun',
    article: 'die',
    value: 'Touristin',
    singular_id: null,
    plural_id: 'touristinnen',
    translations: {
      en: 'female tourist',
      de: 'Touristin',
      es: 'turista',
      tr: 'kadın turist',
      te: 'మహిళా పర్యాటకురాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'travel']
  },
  {
    id: 'touristinnen',
    type: 'noun',
    article: 'die',
    value: 'Touristinnen',
    singular_id: 'touristin',
    plural_id: null,
    translations: {
      en: 'female tourists',
      de: 'Touristinnen',
      es: 'turistas',
      tr: 'kadın turistler',
      te: 'మహిళా పర్యాటకురాళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['people', 'travel']
  },
  {
    id: 'u-bahn',
    type: 'noun',
    article: 'die',
    value: 'U-Bahn',
    singular_id: null,
    plural_id: 'u-bahnen',
    translations: {
      en: 'subway / metro',
      de: 'U-Bahn',
      es: 'metro',
      tr: 'metro',
      te: 'సబ్‌వే'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'u-bahnen',
    type: 'noun',
    article: 'die',
    value: 'U-Bahnen',
    singular_id: 'u-bahn',
    plural_id: null,
    translations: {
      en: 'subways / metros',
      de: 'U-Bahnen',
      es: 'metros',
      tr: 'metrolar',
      te: 'సబ్‌వేలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 's-bahn',
    type: 'noun',
    article: 'die',
    value: 'S-Bahn',
    singular_id: null,
    plural_id: 's-bahnen',
    translations: {
      en: 'urban train',
      de: 'S-Bahn',
      es: 'tren urbano',
      tr: 'şehir treni',
      te: 'ఎస్-బాన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 's-bahnen',
    type: 'noun',
    article: 'die',
    value: 'S-Bahnen',
    singular_id: 's-bahn',
    plural_id: null,
    translations: {
      en: 'urban trains',
      de: 'S-Bahnen',
      es: 'trenes urbanos',
      tr: 'şehir trenleri',
      te: 'ఎస్-బాన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'straßenbahn',
    type: 'noun',
    article: 'die',
    value: 'Straßenbahn',
    singular_id: null,
    plural_id: 'straßenbahnen',
    translations: {
      en: 'tram',
      de: 'Straßenbahn',
      es: 'tranvía',
      tr: 'tramvay',
      te: 'ట్రామ్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'straßenbahnen',
    type: 'noun',
    article: 'die',
    value: 'Straßenbahnen',
    singular_id: 'straßenbahn',
    plural_id: null,
    translations: {
      en: 'trams',
      de: 'Straßenbahnen',
      es: 'tranvías',
      tr: 'tramvaylar',
      te: 'ట్రామ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['transportation', 'travel']
  },
  {
    id: 'station',
    type: 'noun',
    article: 'die',
    value: 'Station',
    singular_id: null,
    plural_id: 'stationen',
    translations: {
      en: 'station',
      de: 'Station',
      es: 'estación',
      tr: 'istasyon',
      te: 'రైల్వే స్టేషన్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'transportation', 'travel']
  },
  {
    id: 'stationen',
    type: 'noun',
    article: 'die',
    value: 'Stationen',
    singular_id: 'station',
    plural_id: null,
    translations: {
      en: 'stations',
      de: 'Stationen',
      es: 'estaciones',
      tr: 'istasyonlar',
      te: 'రైల్వే స్టేషన్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'transportation', 'travel']
  },
  {
    id: 'haltestelle',
    type: 'noun',
    article: 'die',
    value: 'Haltestelle',
    singular_id: null,
    plural_id: 'haltestellen',
    translations: {
      en: 'stop',
      de: 'Haltestelle',
      es: 'parada',
      tr: 'durak',
      te: 'బస్ స్టాప్'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'transportation', 'travel']
  },
  {
    id: 'haltestellen',
    type: 'noun',
    article: 'die',
    value: 'Haltestellen',
    singular_id: 'haltestelle',
    plural_id: null,
    translations: {
      en: 'stops',
      de: 'Haltestellen',
      es: 'paradas',
      tr: 'duraklar',
      te: 'బస్ స్టాప్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['locations', 'transportation', 'travel']
  },
  {
    id: 'tisch',
    type: 'noun',
    article: 'der',
    value: 'Tisch',
    singular_id: null,
    plural_id: 'tische',
    translations: {
      en: 'table',
      de: 'Tisch',
      es: 'mesa',
      tr: 'masa',
      te: 'బల్ల'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'tische',
    type: 'noun',
    article: 'die',
    value: 'Tische',
    singular_id: 'tisch',
    plural_id: null,
    translations: {
      en: 'tables',
      de: 'Tische',
      es: 'mesas',
      tr: 'masalar',
      te: 'బల్లలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'stuhl',
    type: 'noun',
    article: 'der',
    value: 'Stuhl',
    singular_id: null,
    plural_id: 'stühle',
    translations: {
      en: 'chair',
      de: 'Stuhl',
      es: 'silla',
      tr: 'sandalye',
      te: 'కుర్చీ'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'stühle',
    type: 'noun',
    article: 'die',
    value: 'Stühle',
    singular_id: 'stuhl',
    plural_id: null,
    translations: {
      en: 'chairs',
      de: 'Stühle',
      es: 'sillas',
      tr: 'sandalyeler',
      te: 'కుర్చీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'fenster',
    type: 'noun',
    article: 'das',
    value: 'Fenster',
    singular_id: null,
    plural_id: 'fenster-plural',
    translations: {
      en: 'window',
      de: 'Fenster',
      es: 'ventana',
      tr: 'pencere',
      te: 'కిటికీ'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'fenster-plural',
    type: 'noun',
    article: 'die',
    value: 'Fenster',
    singular_id: 'fenster',
    plural_id: null,
    translations: {
      en: 'windows',
      de: 'Fenster',
      es: 'ventanas',
      tr: 'pencereler',
      te: 'కిటికీలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'tür',
    type: 'noun',
    article: 'die',
    value: 'Tür',
    singular_id: null,
    plural_id: 'türen',
    translations: {
      en: 'door',
      de: 'Tür',
      es: 'puerta',
      tr: 'kapı',
      te: 'తలుపు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'türen',
    type: 'noun',
    article: 'die',
    value: 'Türen',
    singular_id: 'tür',
    plural_id: null,
    translations: {
      en: 'doors',
      de: 'Türen',
      es: 'puertas',
      tr: 'kapılar',
      te: 'తలుపులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'bett',
    type: 'noun',
    article: 'das',
    value: 'Bett',
    singular_id: null,
    plural_id: 'betten',
    translations: {
      en: 'bed',
      de: 'Bett',
      es: 'cama',
      tr: 'yatak',
      te: 'మంచం'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'betten',
    type: 'noun',
    article: 'die',
    value: 'Betten',
    singular_id: 'bett',
    plural_id: null,
    translations: {
      en: 'beds',
      de: 'Betten',
      es: 'camas',
      tr: 'yataklar',
      te: 'మంచాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'sofa',
    type: 'noun',
    article: 'das',
    value: 'Sofa',
    singular_id: null,
    plural_id: 'sofas',
    translations: {
      en: 'sofa',
      de: 'Sofa',
      es: 'sofá',
      tr: 'kanepe',
      te: 'సోఫా'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'sofas',
    type: 'noun',
    article: 'die',
    value: 'Sofas',
    singular_id: 'sofa',
    plural_id: null,
    translations: {
      en: 'sofas',
      de: 'Sofas',
      es: 'sofás',
      tr: 'kanepeler',
      te: 'సోఫాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'lampe',
    type: 'noun',
    article: 'die',
    value: 'Lampe',
    singular_id: null,
    plural_id: 'lampen',
    translations: {
      en: 'lamp',
      de: 'Lampe',
      es: 'lámpara',
      tr: 'lamba',
      te: 'దీపం'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'lampen',
    type: 'noun',
    article: 'die',
    value: 'Lampen',
    singular_id: 'lampe',
    plural_id: null,
    translations: {
      en: 'lamps',
      de: 'Lampen',
      es: 'lámparas',
      tr: 'lambalar',
      te: 'దీపాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'regal',
    type: 'noun',
    article: 'das',
    value: 'Regal',
    singular_id: null,
    plural_id: 'regale',
    translations: {
      en: 'shelf',
      de: 'Regal',
      es: 'estantería',
      tr: 'raf',
      te: 'షెల్ఫ్'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'regale',
    type: 'noun',
    article: 'die',
    value: 'Regale',
    singular_id: 'regal',
    plural_id: null,
    translations: {
      en: 'shelves',
      de: 'Regale',
      es: 'estanterías',
      tr: 'raflar',
      te: 'షెల్ఫ్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'schrank',
    type: 'noun',
    article: 'der',
    value: 'Schrank',
    singular_id: null,
    plural_id: 'schränke',
    translations: {
      en: 'wardrobe',
      de: 'Schrank',
      es: 'armario',
      tr: 'dolap',
      te: 'అల్మారా'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'schränke',
    type: 'noun',
    article: 'die',
    value: 'Schränke',
    singular_id: 'schrank',
    plural_id: null,
    translations: {
      en: 'wardrobes',
      de: 'Schränke',
      es: 'armarios',
      tr: 'dolaplar',
      te: 'అల్మారాలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'wand',
    type: 'noun',
    article: 'die',
    value: 'Wand',
    singular_id: null,
    plural_id: 'wände',
    translations: {
      en: 'wall',
      de: 'Wand',
      es: 'pared',
      tr: 'duvar',
      te: 'గోడ'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'wände',
    type: 'noun',
    article: 'die',
    value: 'Wände',
    singular_id: 'wand',
    plural_id: null,
    translations: {
      en: 'walls',
      de: 'Wände',
      es: 'paredes',
      tr: 'duvarlar',
      te: 'గోడలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'boden',
    type: 'noun',
    article: 'der',
    value: 'Boden',
    singular_id: null,
    plural_id: 'böden',
    translations: {
      en: 'floor',
      de: 'Boden',
      es: 'suelo',
      tr: 'zemin',
      te: 'నేల'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'böden',
    type: 'noun',
    article: 'die',
    value: 'Böden',
    singular_id: 'boden',
    plural_id: null,
    translations: {
      en: 'floors',
      de: 'Böden',
      es: 'suelos',
      tr: 'zeminler',
      te: 'నేలలు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'decke',
    type: 'noun',
    article: 'die',
    value: 'Decke',
    singular_id: null,
    plural_id: 'decken',
    translations: {
      en: 'ceiling',
      de: 'Decke',
      es: 'techo',
      tr: 'tavan',
      te: 'పైకప్పు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'decken',
    type: 'noun',
    article: 'die',
    value: 'Decken',
    singular_id: 'decke',
    plural_id: null,
    translations: {
      en: 'ceilings',
      de: 'Decken',
      es: 'techos',
      tr: 'tavanlar',
      te: 'పైకప్పులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household']
  },
  {
    id: 'zimmer',
    type: 'noun',
    article: 'das',
    value: 'Zimmer',
    singular_id: null,
    plural_id: 'zimmer-plural',
    translations: {
      en: 'room',
      de: 'Zimmer',
      es: 'habitación',
      tr: 'oda',
      te: 'గది'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'zimmer-plural',
    type: 'noun',
    article: 'die',
    value: 'Zimmer',
    singular_id: 'zimmer',
    plural_id: null,
    translations: {
      en: 'rooms',
      de: 'Zimmer',
      es: 'habitaciones',
      tr: 'odalar',
      te: 'గదులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'küche',
    type: 'noun',
    article: 'die',
    value: 'Küche',
    singular_id: null,
    plural_id: 'küchen',
    translations: {
      en: 'kitchen',
      de: 'Küche',
      es: 'cocina',
      tr: 'mutfak',
      te: 'వంటగది'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'küchen',
    type: 'noun',
    article: 'die',
    value: 'Küchen',
    singular_id: 'küche',
    plural_id: null,
    translations: {
      en: 'kitchens',
      de: 'Küchen',
      es: 'cocinas',
      tr: 'mutfaklar',
      te: 'వంటగదులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'bad',
    type: 'noun',
    article: 'das',
    value: 'Bad',
    singular_id: null,
    plural_id: 'bäder',
    translations: {
      en: 'bathroom',
      de: 'Bad',
      es: 'baño',
      tr: 'banyo',
      te: 'స్నానపు గది'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'bäder',
    type: 'noun',
    article: 'die',
    value: 'Bäder',
    singular_id: 'bad',
    plural_id: null,
    translations: {
      en: 'bathrooms',
      de: 'Bäder',
      es: 'baños',
      tr: 'banyolar',
      te: 'స్నానపు గదులు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'haus',
    type: 'noun',
    article: 'das',
    value: 'Haus',
    singular_id: null,
    plural_id: 'häuser',
    translations: {
      en: 'house',
      de: 'Haus',
      es: 'casa',
      tr: 'ev',
      te: 'ఇల్లు'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  },
  {
    id: 'häuser',
    type: 'noun',
    article: 'die',
    value: 'Häuser',
    singular_id: 'haus',
    plural_id: null,
    translations: {
      en: 'houses',
      de: 'Häuser',
      es: 'casas',
      tr: 'evler',
      te: 'ఇళ్ళు'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null,
      te: null
    },
    levels: [],
    categories: ['household', 'locations']
  }
]
