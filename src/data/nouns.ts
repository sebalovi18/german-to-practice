import { CATEGORIES } from '@/data/categories'

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
      es: 'cena'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'cenas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'edad'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PERSONAL_INFO, CATEGORIES.TIME]
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
      es: 'edades'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PERSONAL_INFO, CATEGORIES.TIME]
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
      es: 'anuncio'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION]
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
      es: 'anuncios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION]
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
      es: 'ascensor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'ascensores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'coche'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'coches'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'bañera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'bañeras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'estación de tren'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'estaciones de tren'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'balcón'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'balcones'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'ejemplo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EDUCATION]
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
      es: 'ejemplos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EDUCATION]
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
      es: 'cerveza'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.DRINK]
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
      es: 'cervezas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.DRINK]
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
      es: 'pan'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'panes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'panecillo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'panecillos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'libro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'panadería'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SHOPPING]
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
      es: 'panaderías'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SHOPPING]
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
      es: 'libros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'cafetería'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.FOOD]
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
      es: 'cafeterías'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.FOOD]
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
      es: 'ordenador'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TECHNOLOGY]
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
      es: 'ordenadores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TECHNOLOGY]
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
      es: 'cruasán'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'cruasanes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'alemán'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'alemán'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'catedral'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'catedrales'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'ducha'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'duchas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'huevo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'huevos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'helado'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'helados'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'inglés'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'inglés'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'comida'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'comidas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'bicicleta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'bicicletas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'televisor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'televisores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'encendedor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'encendedores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'carne'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'carnes'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'foto'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS]
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
      es: 'fotos'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS]
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
      es: 'francés'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'francés'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'desayuno'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'desayunos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'jardín'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.NATURE]
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
      es: 'verdura'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE, CATEGORIES.KITCHEN]
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
      es: 'verduras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE, CATEGORIES.KITCHEN]
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
      es: 'bebida'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.KITCHEN]
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
      es: 'bebidas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.KITCHEN]
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
      es: 'grado'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS, CATEGORIES.WEATHER]
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
      es: 'grados'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS, CATEGORIES.WEATHER]
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
      es: 'gramo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'gramos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'jardines'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.NATURE]
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
      es: 'móvil'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'móviles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'estación central'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'estaciones centrales'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'cuaderno'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'cuadernos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'calefacción'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'calefacciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'estufa'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'estufas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'país de origen'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO, CATEGORIES.TRAVEL]
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
      es: 'países de origen'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO, CATEGORIES.TRAVEL]
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
      es: 'pasatiempo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'pasatiempos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'hotel'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'hoteles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'internet'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TECHNOLOGY]
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
      es: 'internetes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TECHNOLOGY]
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
      es: 'año'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'años'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'sótano'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'sótanos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'kilo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'kilos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'kilogramo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'kilogramos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'niño'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'niños'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'piano'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'pianos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'hospital'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'hospitales'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'nevera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'neveras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'alimentos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.SHOPPING, CATEGORIES.KITCHEN]
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
      es: 'alimentos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.SHOPPING, CATEGORIES.KITCHEN]
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
      es: 'comida favorita'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'comida favoritas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'regla'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD]
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
      es: 'reglas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD]
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
      es: 'alquiler'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.HOUSEHOLD]
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
      es: 'alquileres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.HOUSEHOLD]
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
      es: 'minuto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TIME, CATEGORIES.MEASUREMENTS]
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
      es: 'minutos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TIME, CATEGORIES.MEASUREMENTS]
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
      es: 'compañero de piso'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'compañeros de piso'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'compañera de piso'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'compañeras de piso'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'almuerzo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'almuerzos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'muebles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'muesli'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'mueslis'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'gastos adicionales'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.MONEY]
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
      es: 'cercanía'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.LOCATIONS]
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
      es: 'fruta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'frutas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'papel'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'papeles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'picnic'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.LEISURE]
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
      es: 'picnics'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.LEISURE]
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
      es: 'policía'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PROFESSIONS]
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
      es: 'correo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.COMMUNICATION]
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
      es: 'rueda / bici'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'receta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN]
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
      es: 'recetas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.HEALTH, CATEGORIES.KITCHEN]
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
      es: 'dirección'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TRAVEL]
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
      es: 'direcciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TRAVEL]
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
      es: 'ruedas / bicis'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'restaurante'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'restaurantes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'dormitorio'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'dormitorios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'castillo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'castillos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'piscina'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SPORTS, CATEGORIES.LEISURE]
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
      es: 'piscinas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SPORTS, CATEGORIES.LEISURE]
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
      es: 'juego'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'juegos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'lavavajillas'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'lavavajillas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'estadios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SPORTS]
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
      es: 'estadio'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SPORTS]
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
      es: 'enchufe'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'enchufes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'piso'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'pisos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'electricidad'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'taxi'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'taxis'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'teléfono'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'teléfonos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'baño'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'baños'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'entrenamiento'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'entrenamientos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'medio ambiente'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE]
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
      es: 'medio de transporte'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'medios de transporte'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION]
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
      es: 'video'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.TECHNOLOGY]
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
      es: 'videos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.TECHNOLOGY]
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
      es: 'cuarto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'cuartos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'lavadora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'lavadoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'agua'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.NATURE, CATEGORIES.WEATHER, CATEGORIES.KITCHEN]
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
      es: 'aguas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.NATURE, CATEGORIES.WEATHER, CATEGORIES.KITCHEN]
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
      es: 'camino'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'caminos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'tiempo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
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
      es: 'tiempos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
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
      es: 'fin de semana'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'fines de semana'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'tarde'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'tardes'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'manzana'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'piso compartido'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'pisos compartidos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'salón'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'salones'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'consultorios dentales'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.HEALTH]
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
      es: 'consultorio dental'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.HEALTH]
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
      es: 'zoológico'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.LEISURE]
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
      es: 'zoológicos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.LEISURE]
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
      es: 'manzanas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'abril'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'abriles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'médico'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'médicos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'agosto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'agostos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'árbol'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE]
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
      es: 'árboles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.NATURE]
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
      es: 'vaso'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'vasos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'profesión'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PERSONAL_INFO, CATEGORIES.WORK]
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
      es: 'profesiones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PERSONAL_INFO, CATEGORIES.WORK]
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
      es: 'lápiz'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD]
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
      es: 'lápices'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD]
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
      es: 'hermano'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'hermanos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'céntimo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
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
      es: 'céntimos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
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
      es: 'primo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'primos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'gracias'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'gracias'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'curso de alemán'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.WORK]
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
      es: 'cursos de alemán'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE, CATEGORIES.WORK]
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
      es: 'diciembre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'diciembres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'martes'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'martes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'jueves'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'jueves'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'impresora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'impresoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'compra'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.SHOPPING]
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
      es: 'compras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.SHOPPING]
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
      es: 'técnico electrónico'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'técnicos electrónicos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'nieto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'nietos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'euro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
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
      es: 'euros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.NUMBERS, CATEGORIES.SHOPPING]
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
      es: 'apellido'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'apellidos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'estado civil'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PERSONAL_INFO]
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
      es: 'estados civiles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PERSONAL_INFO]
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
      es: 'febrero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'febreros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'error'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'errores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'película'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
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
      es: 'películas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
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
      es: 'pez / pescado'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'peces / pescados'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'fotógrafo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'fotógrafos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'viernes'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'viernes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'amigo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'amigos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'peluquero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'peluqueros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'primavera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'primaveras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'carné de conducir'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.TRANSPORTATION]
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
      es: 'carnés de conducir'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.TRANSPORTATION]
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
      es: 'balón de fútbol / fútbol'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'balones de fútbol'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'cumpleaños'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PERSONAL_INFO, CATEGORIES.TIME]
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
      es: 'cumpleaños'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PERSONAL_INFO, CATEGORIES.TIME]
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
      es: 'monedero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.MONEY]
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
      es: 'monederos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.MONEY]
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
      es: 'abuelo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'abuelos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'amo de casa'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'amos de casa'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'otoño'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'otoños'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'señor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'señores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'ingeniero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'ingenieros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'enero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'eneros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'yogur'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'yogures'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'joven'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'jóvenes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'julio'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'julios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'junio'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'junios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'café'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.KITCHEN]
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
      es: 'cafés'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.KITCHEN]
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
      es: 'calendario'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.HOUSEHOLD, CATEGORIES.TIME]
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
      es: 'calendarios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.HOUSEHOLD, CATEGORIES.TIME]
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
      es: 'queso'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'quesos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'camarero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'camareros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'jardín de infancia'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LOCATIONS]
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
      es: 'jardines de infancia'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LOCATIONS]
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
      es: 'pegamento'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'pegamentos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'cocinero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'cocineros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'maleta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TRAVEL]
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
      es: 'maletas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TRAVEL]
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
      es: 'compañero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.WORK]
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
      es: 'compañeros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.WORK]
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
      es: 'enfermero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'enfermeros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'pastel'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'pasteles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'bolígrafo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD]
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
      es: 'bolígrafos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.HOUSEHOLD]
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
      es: 'cliente'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'clientes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'curso'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.WORK]
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
      es: 'cursos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.WORK]
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
      es: 'tienda'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'tiendas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'portátil'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'portátiles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'profesor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'profesores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'litro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'litros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'mayo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'mayos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'hombre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'hombres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'marzo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'marzos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'mediodía'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'mediodías'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'miércoles'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'miércoles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'mes'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'meses'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'lunes'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'lunes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'mañana'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'mañanas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'vecino'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'vecinos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'tarde'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'tardes'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'postre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'postres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'nombre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'nombres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'noviembre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'noviembres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'octubre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'octubres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'tío'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'tíos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'abuelo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'abuelos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'pareja'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'parejas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'tortita'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'tortitas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'plan'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'planes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'policía'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'policías'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'punto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'puntos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'tontería'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'tonterías'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'arroz'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'arroces'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'mochila'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.TRAVEL]
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
      es: 'mochilas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.TRAVEL]
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
      es: 'zumo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.KITCHEN]
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
      es: 'zumos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DRINK, CATEGORIES.KITCHEN]
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
      es: 'ensalada'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'ensaladas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'sábado'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'sábados'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'cantante'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'cantantes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'frase'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'frases'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'actor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'actores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'jamón'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'jamones'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'paraguas'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD]
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
      es: 'paraguas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD]
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
      es: 'llave'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'llaves'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'septiembre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'septiembres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'soltero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'solteros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'hijo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'hijos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'verano'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'veranos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'domingo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'domingos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'diversión'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS, CATEGORIES.LEISURE]
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
      es: 'diversiones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS, CATEGORIES.LEISURE]
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
      es: 'jugador'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS]
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
      es: 'jugadores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS]
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
      es: 'deporte'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'deportes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.SPORTS]
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
      es: 'estudiante'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'estudiantes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'supermercado'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'supermercados'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'día'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'días'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DATES, CATEGORIES.TIME]
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
      es: 'taxista'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.WORK]
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
      es: 'taxistas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.WORK]
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
      es: 'té'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DRINK]
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
      es: 'tés'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DRINK]
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
      es: 'cita'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TIME, CATEGORIES.WORK]
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
      es: 'citas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TIME, CATEGORIES.WORK]
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
      es: 'texto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'textos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'entrenador'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS, CATEGORIES.WORK]
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
      es: 'entrenadores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS, CATEGORIES.WORK]
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
      es: 'vacaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.TRAVEL]
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
      es: 'vacaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.TRAVEL]
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
      es: 'padre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'padres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'asociación'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.LOCATIONS, CATEGORIES.SPORTS]
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
      es: 'asociaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.LOCATIONS, CATEGORIES.SPORTS]
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
      es: 'vendedor'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'vendedores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'mañana'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'mañanas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'nombre de pila'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'nombres de pila'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LANGUAGE, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'invierno'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'inviernos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.TIME, CATEGORIES.WEATHER]
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
      es: 'lugar de residencia'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO, CATEGORIES.TRAVEL]
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
      es: 'lugares de residencia'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO, CATEGORIES.TRAVEL]
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
      es: 'dentista'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'dentistas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'dirección'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO]
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
      es: 'direcciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO]
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
      es: 'respuesta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'respuestas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'trabajo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
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
      es: 'trabajos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
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
      es: 'médica'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'médicas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'formación'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EDUCATION, CATEGORIES.WORK]
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
      es: 'formaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EDUCATION, CATEGORIES.WORK]
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
      es: 'plátano'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'plátanos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'pera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'peras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'flor'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.NATURE]
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
      es: 'flores'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.NATURE]
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
      es: 'sello'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS]
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
      es: 'sellos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS]
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
      es: 'gafas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD]
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
      es: 'gafas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD]
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
      es: 'mantequilla'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'mantequillas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'prima'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'primas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'lata'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'latas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'correo electrónico'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.TECHNOLOGY]
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
      es: 'correos electrónicos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.TECHNOLOGY]
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
      es: 'dirección de correo electrónico'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.TECHNOLOGY]
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
      es: 'direcciones de correo electrónico'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.TECHNOLOGY]
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
      es: 'técnica electrónica'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'técnicas electrónicas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'padres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'padres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'nieta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'nietas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'disculpa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.EMOTIONS]
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
      es: 'disculpas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.EMOTIONS]
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
      es: 'familia'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'familias'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PERSONAL_INFO]
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
      es: 'color'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.ARTS]
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
      es: 'colores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.ARTS]
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
      es: 'botella'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'botellas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'fotógrafa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'fotógrafas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'pregunta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'preguntas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'mujer'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'mujeres'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'tiempo libre'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'tiempo libres'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'amiga'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'amigas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'peluquera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'peluqueras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'hermanos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'hermanos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'guitarra'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'guitarras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'abuelos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'abuelos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'abuela'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY]
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
      es: 'abuelas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY]
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
      es: 'grupo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PEOPLE]
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
      es: 'grupos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.PEOPLE]
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
      es: 'deberes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'deberes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'ama de casa'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'amas de casa'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'número de casa'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'números de casa'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'ayuda'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'ayudas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'información'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION]
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
      es: 'informaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.COMMUNICATION]
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
      es: 'ingeniera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'ingenieras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'cámara'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'cámaras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.HOUSEHOLD, CATEGORIES.TECHNOLOGY]
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
      es: 'patata'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'patatas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'camarera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'camareras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'cocinera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'cocineras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'compañera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.WORK]
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
      es: 'compañeras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.WORK]
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
      es: 'enfermera'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'enfermeras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'clienta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'clientas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'profesora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'profesoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'equipo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.SPORTS]
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
      es: 'equipos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.SPORTS]
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
      es: 'leche'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.DRINK]
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
      es: 'leches'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.DRINK]
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
      es: 'música'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'músicas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'madre'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'madres'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'vecina'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'vecinas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'noche'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'noches'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'número'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'números'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'horario de apertura'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TIME, CATEGORIES.WORK]
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
      es: 'horarios de apertura'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TIME, CATEGORIES.WORK]
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
      es: 'abuela'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'abuelas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'pareja'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'parejas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'pausa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'pausas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'policía'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'policías'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'código postal'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO]
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
      es: 'códigos postales'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.LOCATIONS, CATEGORIES.PERSONAL_INFO]
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
      es: 'factura'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
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
      es: 'facturas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.MONEY, CATEGORIES.SHOPPING]
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
      es: 'nata'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'natas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'cantante'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'cantantes'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'actriz'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'actrices'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'tijeras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'tijeras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'chocolate'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.SHOPPING]
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
      es: 'chocolates'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.SHOPPING]
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
      es: 'hermana'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'hermanas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'serie'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
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
      es: 'series'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE]
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
      es: 'sol'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
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
      es: 'soles'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.NATURE, CATEGORIES.WEATHER]
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
      es: 'jugadora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS]
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
      es: 'jugadoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS]
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
      es: 'idioma'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'idiomas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.EDUCATION, CATEGORIES.LANGUAGE]
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
      es: 'calle'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS]
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
      es: 'calles'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS]
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
      es: 'estudiante'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.WORK]
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
      es: 'estudiantes'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.WORK]
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
      es: 'hora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'horas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TIME]
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
      es: 'sopa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'sopas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.KITCHEN]
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
      es: 'tía'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'tías'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'bolsa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.SHOPPING]
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
      es: 'bolsas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.CLOTHING, CATEGORIES.HOUSEHOLD, CATEGORIES.SHOPPING]
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
      es: 'taza'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'tazas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.KITCHEN]
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
      es: 'taxista'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.WORK]
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
      es: 'taxistas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.WORK]
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
      es: 'número de teléfono'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PERSONAL_INFO]
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
      es: 'números de teléfono'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.PERSONAL_INFO]
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
      es: 'temperatura'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.MEASUREMENTS, CATEGORIES.NATURE, CATEGORIES.WEATHER]
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
      es: 'temperaturas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.MEASUREMENTS, CATEGORIES.NATURE, CATEGORIES.WEATHER]
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
      es: 'hija'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'hijas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FAMILY, CATEGORIES.PEOPLE]
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
      es: 'tomate'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'tomates'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.FOOD, CATEGORIES.NATURE]
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
      es: 'entrenadora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS, CATEGORIES.WORK]
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
      es: 'entrenadoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SPORTS, CATEGORIES.WORK]
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
      es: 'bolsa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.SHOPPING]
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
      es: 'bolsas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.SHOPPING]
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
      es: 'reloj'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TIME]
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
      es: 'relojes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.TIME]
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
      es: 'firma'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.PERSONAL_INFO]
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
      es: 'firmas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS, CATEGORIES.PERSONAL_INFO]
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
      es: 'vendedora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'vendedoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.SHOPPING, CATEGORIES.WORK]
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
      es: 'vivienda'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'viviendas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'salchicha'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'salchichas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.FOOD]
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
      es: 'número'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'números'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS, CATEGORIES.NUMBERS]
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
      es: 'dentista'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'dentistas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HEALTH, CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'tiempo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TIME]
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
      es: 'tiempos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TIME]
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
      es: 'periódico'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS]
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
      es: 'periódicos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION, CATEGORIES.DOCUMENTS]
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
      es: 'dinero'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MONEY, CATEGORIES.SHOPPING]
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
      es: 'imagen / foto'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ARTS]
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
      es: 'imágenes / fotos'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ARTS]
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
      es: 'centro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS]
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
      es: 'centros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS]
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
      es: 'suerte / felicidad'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
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
      es: 'cabello'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.BODY]
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
      es: 'cabellos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.BODY]
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
      es: 'concierto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'conciertos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.MUSIC]
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
      es: 'mala suerte'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EMOTIONS]
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
      es: 'bachillerato'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.DOCUMENTS, CATEGORIES.EDUCATION]
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
      es: 'problema'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'problemas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'museo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.LOCATIONS]
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
      es: 'museos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ARTS, CATEGORIES.LEISURE, CATEGORIES.LOCATIONS]
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
      es: 'invitado / huésped'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.TRAVEL]
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
      es: 'invitados / huéspedes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.TRAVEL]
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
      es: 'aeropuerto'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'aeropuertos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'tráfico'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'club'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.LOCATIONS]
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
      es: 'clubes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.LOCATIONS]
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
      es: 'paseo / caminata'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'paseos / caminatas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'kilómetro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'kilómetros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'metro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'metros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.MEASUREMENTS]
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
      es: 'excursión'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.TRAVEL]
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
      es: 'excursiones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.TRAVEL]
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
      es: 'parque'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.LOCATIONS, CATEGORIES.NATURE]
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
      es: 'parques'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE, CATEGORIES.LOCATIONS, CATEGORIES.NATURE]
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
      es: 'lago'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.NATURE]
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
      es: 'lagos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.NATURE]
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
      es: 'graduación / título'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
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
      es: 'graduaciones / títulos'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
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
      es: 'trabajador'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'trabajadores'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'turista'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.TRAVEL]
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
      es: 'turistas'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.TRAVEL]
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
      es: 'visita'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TRAVEL]
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
      es: 'visitas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.TRAVEL]
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
      es: 'consejo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'consejos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT]
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
      es: 'autobús'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'autobuses'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'gente / personas'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE]
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
      es: 'empresa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'empresas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'ciudad'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'ciudades'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRAVEL]
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
      es: 'mensaje / noticia'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION]
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
      es: 'mensajes / noticias'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.COMMUNICATION]
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
      es: 'fiesta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'fiestas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LEISURE]
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
      es: 'universidad'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'universidades'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'trabajadora'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'trabajadoras'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.PROFESSIONS, CATEGORIES.WORK]
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
      es: 'examen'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EDUCATION]
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
      es: 'exámenes'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.EDUCATION]
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
      es: 'escuela'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'escuelas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.EDUCATION, CATEGORIES.LOCATIONS, CATEGORIES.WORK]
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
      es: 'puesto / lugar'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
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
      es: 'puestos / lugares'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.ABSTRACT, CATEGORIES.WORK]
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
      es: 'aplicación'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.TECHNOLOGY]
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
      es: 'aplicaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.TECHNOLOGY]
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
      es: 'turista'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.TRAVEL]
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
      es: 'turistas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.PEOPLE, CATEGORIES.TRAVEL]
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
      es: 'metro'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'metros'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'tren urbano'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'trenes urbanos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'tranvía'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'tranvías'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'estación'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'estaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'parada'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'paradas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.LOCATIONS, CATEGORIES.TRANSPORTATION, CATEGORIES.TRAVEL]
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
      es: 'mesa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'mesas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'silla'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'sillas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'ventana'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'ventanas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'puerta'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'puertas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'cama'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'camas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'sofá'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'sofás'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'lámpara'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'lámparas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'estantería'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'estanterías'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'armario'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'armarios'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'pared'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'paredes'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'suelo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'suelos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'techo'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'techos'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD]
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
      es: 'habitación'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'habitaciones'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'cocina'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.KITCHEN]
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
      es: 'cocinas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS, CATEGORIES.KITCHEN]
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
      es: 'baño'
    },
    translationArticles: {
      en: 'the',
      es: 'el'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'baños'
    },
    translationArticles: {
      en: 'the',
      es: 'los'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'casa'
    },
    translationArticles: {
      en: 'the',
      es: 'la'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
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
      es: 'casas'
    },
    translationArticles: {
      en: 'the',
      es: 'las'
    },
    levels: [],
    categories: [CATEGORIES.HOUSEHOLD, CATEGORIES.LOCATIONS]
  }
]
