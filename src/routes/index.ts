// HOME
import Home from '@/pages/index.vue'

// NOUNS
import NounsList from '@/pages/nouns/index.vue'

// VERBS
import VerbsList from '@/pages/verbs/index.vue'

// ADJECTIVES
import AdjetivesList from '@/pages/adjetives/index.vue'

// PRACTICE
import ArticlesPractice from '@/pages/practice/articles.vue'
import PracticeIndex from '@/pages/practice/index.vue'
import NounsMeaningsPractice from '@/pages/practice/nouns-meanings.vue'
import AdjetivesMeaningsPractice from '@/pages/practice/adjetives-meanings.vue'
import VerbsMeaningsPractice from '@/pages/practice/verbs-meanings.vue'

export default [
  {
    alias: '/home',
    component: Home,
    meta: {
      titleKey: 'pageTitles.home'
    },
    path: '/'
  },
  {
    component: NounsList,
    meta: {
      titleKey: 'pageTitles.nouns'
    },
    path: '/nouns'
  },
  {
    component: VerbsList,
    meta: {
      titleKey: 'pageTitles.verbs'
    },
    path: '/verbs'
  },
  {
    component: AdjetivesList,
    meta: {
      titleKey: 'pageTitles.adjectives'
    },
    path: '/adjetives'
  },
  {
    meta: {
      titleKey: 'pageTitles.practice'
    },
    path: '/practice',
    children: [
      {
        component: PracticeIndex,
        meta: {
          titleKey: 'pageTitles.practice'
        },
        path: ''
      },
      {
        component: ArticlesPractice,
        meta: {
          titleKey: 'pageTitles.articlesPractice'
        },
        path: 'articles'
      },
      {
        component: NounsMeaningsPractice,
        meta: {
          titleKey: 'pageTitles.nounsMeaningsPractice'
        },
        path: 'nouns-meanings'
      },
      {
        component: AdjetivesMeaningsPractice,
        meta: {
          titleKey: 'pageTitles.adjectivesMeaningsPractice'
        },
        path: 'adjetives-meanings'
      },
      {
        component: VerbsMeaningsPractice,
        meta: {
          titleKey: 'pageTitles.verbsMeaningsPractice'
        },
        path: 'verbs-meanings'
      }
    ]
  }
]
