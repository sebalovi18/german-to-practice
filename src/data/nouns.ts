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
      tr: 'akşam yemeği'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'akşam yemekleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'yaş'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'yaşlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
    },
    levels: [],
    categories: ['abstract', 'personal-info', 'time']
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
      tr: 'araba'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'arabalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['transportation']
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
      tr: 'bira'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'biralar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'ekmek'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'ekmekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'küçük ekmek'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'küçük ekmekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kitap'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
    },
    levels: [],
    categories: ['documents', 'education']
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
      tr: 'kitaplar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['documents', 'education']
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
      tr: 'kruvasan'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'kruvasanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'Almanca'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'Almanca'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['education', 'language']
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
      tr: 'yumurta'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'yumurtalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'dondurma'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'dondurmalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'İngilizce'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'İngilizce'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yemek'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'yemekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'bisiklet'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'bisikletler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
    },
    levels: [],
    categories: ['transportation']
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
      tr: 'çakmak'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'çakmaklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'et'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'etler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'fotoğraf'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'fotoğraflar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'Fransızca'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'Fransızca'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kahvaltı'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'kahvaltılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['food']
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
      tr: 'sebze'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'sebzeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'içecek'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'içecekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'derece'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'dereceler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'gram'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'gramlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['measurements']
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
      tr: 'cep telefonu'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'cep telefonları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['communication', 'household', 'technology']
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
      tr: 'defter'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'defterler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['documents', 'education']
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
      tr: 'menşe ülke'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'menşe ülkeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'hobi'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'hobiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['leisure']
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
      tr: 'internet'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'internetler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yıl'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'yıllar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['dates', 'time']
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
      tr: 'kilo'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'kilolar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kilogram'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'kilogramlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'çocuk'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'çocuklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'piyano'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'piyanolar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'hastane'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'hastaneler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['health', 'locations', 'work']
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
      tr: 'gıda maddeleri'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'los',
      tr: null
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
      tr: 'gıda maddeleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'en sevilen yemek'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'en sevilen yemekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'cetvel'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'cetveller'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
    },
    levels: [],
    categories: ['education', 'household']
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
      tr: 'öğle yemeği'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'öğle yemekleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['food']
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
      tr: 'müsli'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'müsliler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['food']
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
      tr: 'meyve'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'meyveler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kağıt'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'kağıtlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'piknik'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'piknikler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['food', 'leisure']
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
      tr: 'tekerlek / bisiklet'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
    },
    levels: [],
    categories: ['transportation']
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
      tr: 'tekerlekler / bisikletler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'restoran'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'restoranlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['food', 'locations', 'work']
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
      tr: 'oyun'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'oyunlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['arts', 'leisure', 'sports']
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
      tr: 'taksi'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'taksiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'telefon'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'telefonlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['communication', 'household', 'technology']
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
      tr: 'antrenman'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'antrenmanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['leisure', 'sports']
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
      tr: 'video'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'videolar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'çeyrek'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'çeyrekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['measurements', 'numbers']
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
      tr: 'su'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'sular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
    },
    levels: [],
    categories: ['drink', 'nature', 'weather']
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
      tr: 'hava durumu'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'hava durumları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'hafta sonu'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'hafta sonları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'akşam'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'akşamlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'elma'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
    },
    levels: [],
    categories: ['food', 'nature']
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
      tr: 'elmalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'nisan'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'nisanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'doktor'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'doktorlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ağustos'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ağustoslar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ağaç'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ağaçlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'bardak'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'bardaklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'meslek'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'meslekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kurşun kalem'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kurşun kalemler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'erkek kardeş'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'erkek kardeşler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'sent'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'sentler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'erkek kuzen'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'erkek kuzenler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'teşekkür'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'las',
      tr: null
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
      tr: 'teşekkürler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'Almanca kursu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'Almanca kursları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'aralık'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'aralıklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'salı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'salılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'perşembe'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'perşembeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yazıcı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'yazıcılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'alışveriş'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'alışverişler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'elektronik teknisyeni'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'elektronik teknisyenler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'erkek torun'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'erkek torunlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'avro'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'avrolar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'soyadı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'soyadları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'medeni durum'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'medeni durumlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şubat'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'şubatlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'hata'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'hatalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'film'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'filmler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'balık'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'balıklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'fotoğrafçı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'fotoğrafçılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'cuma'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'cumalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'arkadaş'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'arkadaşlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kuaför'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kuaförler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ilkbahar'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'ilkbaharlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'ehliyet'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ehliyetler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'futbol topu / futbol'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'futbol topları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'doğum günü'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'doğum günleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'cüzdan'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'cüzdanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'büyükbaba'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'büyükbabalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ev erkeği'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ev erkekleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'sonbahar'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'sonbaharlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'bay'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'baylar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'mühendis'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'mühendisler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ocak'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ocaklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yoğurt'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'yoğurtlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'genç'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'gençler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'temmuz'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'temmuzlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'haziran'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'haziranlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kahve'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kahveler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'takvim'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'takvimler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'peynir'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'peynirler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'garson'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'garsonlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'anaokulu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'anaokulları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yapıştırıcı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'yapıştırıcılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'aşçı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'aşçılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'bavul'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'bavullar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'iş arkadaşı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'iş arkadaşları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'erkek hemşire'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'erkek hemşireler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kek'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'tükenmez kalem'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'tükenmez kalemler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'müşteri'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'müşteriler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kurs'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kurslar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'dükkan'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'dükkanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'dizüstü bilgisayar'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'dizüstü bilgisayarlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'öğretmen'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'öğretmenler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'litre'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'litreler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'mayıs'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'mayıslar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'adam'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'adamlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'mart'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'martlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'öğle'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'öğleler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'çarşamba'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'çarşambalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ay'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'aylar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'pazartesi'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'pazartesiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'sabah'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'sabahlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'komşu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'komşular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'öğleden sonra'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'öğleden sonralar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'tatlı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'tatlılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ad'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'adlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kasım'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kasımlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ekim'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ekimler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'amca'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'amcalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'dede'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'dedeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'partner'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'partnerler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'krep'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'krepler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'plan'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'planlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'polis'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'polisler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'nokta'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'noktalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'saçmalık'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'saçmalıklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'pirinç'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'pirinçler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'sırt çantası'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'sırt çantaları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'meyve suyu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'meyve suları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'salata'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'salatalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'cumartesi'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'cumartesiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şarkıcı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'şarkıcılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'cümle'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'cümleler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'oyuncu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'oyuncular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'jambon'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'jambonlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şemsiye'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'şemsiyeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'anahtar'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'anahtarlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'eylül'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'eylüller'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'bekar'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'bekarlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'oğul'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'oğullar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yaz'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'yazlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'pazar'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'pazarlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'eğlence'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'eğlenceler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'oyuncu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'oyuncular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'spor'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'sporlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'öğrenci'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'öğrenciler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'süpermarket'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'süpermarketler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'gün'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'günler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'taksi şoförü'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'taksi şoförleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'çay'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'çaylar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'randevu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'randevular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'metin'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'metinler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'antrenör'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'antrenörler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'tatil'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'las',
      tr: null
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
      tr: 'tatiller'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'baba'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'babalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'dernek'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'dernekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'satıcı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'satıcılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'öğleden önce'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'öğleden önceler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'ad'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'adlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kış'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kışlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ikamet yeri'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ikamet yerleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'dişçi'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'dişçiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'adres'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'adresler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'cevap'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'cevaplar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'iş'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'işler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kadın doktor'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın doktorlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'eğitim'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'eğitimler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'muz'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'muzlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'armut'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'armutlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'çiçek'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'çiçekler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'posta pulu'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'posta pulları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'gözlük'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'gözlükler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'tereyağı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'tereyağları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kız kuzen'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kız kuzenler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kutu'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kutular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'e-posta'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'e-postalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'e-posta adresi'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'e-posta adresleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın elektronik teknisyeni'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın elektronik teknisyenler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'ebeveynler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ebeveynler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kız torun'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kız torunlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'özür'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'özürler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'aile'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'aileler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'renk'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'renkler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şişe'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'şişeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın fotoğrafçı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın fotoğrafçılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'soru'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'sorular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadınlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'boş zaman'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'boş zamanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kız arkadaş'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kız arkadaşlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın kuaför'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın kuaförler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kardeşler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kardeşler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'gitar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'gitarlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'büyükanne ve büyükbaba'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'büyükanne ve büyükbabalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'büyükanne'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'büyükanneler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'grup'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'gruplar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ev ödevi'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ev ödevleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ev hanımı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'ev hanımları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kapı numarası'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'kapı numaraları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yardım'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'yardımlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'bilgi'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'bilgiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın mühendis'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın mühendisler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kamera'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kameralar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'patates'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'patatesler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'garson kadın'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'garson kadınlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın aşçı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın aşçılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın iş arkadaşı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın iş arkadaşları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'hemşire'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'hemşireler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın müşteri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın müşteriler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın öğretmen'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın öğretmenler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'takım'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'takımlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'süt'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'sütler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'müzik'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'müzikler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'anne'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'anneler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın komşu'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın komşular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'gece'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'geceler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'numara'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'numaralar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'açılış saati'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'açılış saatleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'nine'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'nineler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın partner'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın partnerler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'mola'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'molalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın polis'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın polisler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'posta kodu'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'posta kodları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'fatura'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'faturalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'krema'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kremalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın şarkıcı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın şarkıcılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın oyuncu'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın oyuncular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'makas'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'makaslar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'çikolata'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'çikolatalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kız kardeş'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kız kardeşler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'dizi'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'diziler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'güneş'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'güneşler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kadın oyuncu'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın oyuncular'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'dil'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'diller'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'sokak'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'sokaklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın öğrenci'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın öğrenciler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'saat'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'saatler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'çorba'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'çorbalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'teyze'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'teyzeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'çanta'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'çantalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'fincan'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'fincanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın taksi şoförü'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın taksi şoförleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'telefon numarası'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'telefon numaraları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'sıcaklık'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'sıcaklıklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kız evlat'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kız evlatlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'domates'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'domatesler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kadın antrenör'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın antrenörler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'poşet'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'poşetler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'saat'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'saatler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'imza'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'imzalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın satıcı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın satıcılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'daire'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'daireler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'sosis'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'sosisler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'sayı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'sayılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kadın dişçi'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın dişçiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'zaman'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'zamanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'gazete'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'gazeteler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'para'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'resim'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'resimler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'merkez'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'merkezler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şans / mutluluk'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'saç'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'saçlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'konser'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'konserler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şanssızlık'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'lise diploması'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'problem'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'problemler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'müze'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'müzeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'misafir'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'misafirler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'havaalanı'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'havaalanları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'trafik'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kulüp'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kulüpler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'yürüyüş'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'yürüyüşler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'kilometre'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'kilometreler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'metre'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'metreler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'gezi'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'geziler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'park'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'parklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'göl'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'göller'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'mezuniyet / diploma'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'mezuniyetler / diplomalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'işçi'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'işçiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'turist'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'turistler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ziyaret'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'ziyaretler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'ipucu'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'ipuçları'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'otobüs'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'otobüsler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'insanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'şirket'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'şirketler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'şehir'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'şehirler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'mesaj / haber'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'mesajlar / haberler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'parti'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'partiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'üniversite'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'üniversiteler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın işçi'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın işçiler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'sınav'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'sınavlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'okul'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'okullar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'pozisyon / yer'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'pozisyonlar / yerler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'uygulama'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'uygulamalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kadın turist'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kadın turistler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'metro'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'metrolar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'şehir treni'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'şehir trenleri'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'tramvay'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'tramvaylar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'istasyon'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'istasyonlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'durak'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'duraklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'masa'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'masalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'sandalye'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'la',
      tr: null
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
      tr: 'sandalyeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'pencere'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'pencereler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kapı'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'kapılar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'yatak'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'yataklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'kanepe'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'kanepeler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'lamba'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'lambalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'raf'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'raflar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'dolap'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'dolaplar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'duvar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'duvarlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'zemin'
    },
    translationArticles: {
      en: 'the',
      de: 'der',
      es: 'el',
      tr: null
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
      tr: 'zeminler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'tavan'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'el',
      tr: null
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
      tr: 'tavanlar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'oda'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'odalar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'mutfak'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'la',
      tr: null
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
      tr: 'mutfaklar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
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
      tr: 'banyo'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'el',
      tr: null
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
      tr: 'banyolar'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'los',
      tr: null
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
      tr: 'ev'
    },
    translationArticles: {
      en: 'the',
      de: 'das',
      es: 'la',
      tr: null
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
      tr: 'evler'
    },
    translationArticles: {
      en: 'the',
      de: 'die',
      es: 'las',
      tr: null
    },
    levels: [],
    categories: ['household', 'locations']
  }
]
