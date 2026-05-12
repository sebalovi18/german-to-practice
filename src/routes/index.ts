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
    path: '/'
  },
  {
    component: NounsList,
    path: '/nouns'
  },
  {
    component: VerbsList,
    path: '/verbs'
  },
  {
    component: AdjetivesList,
    path: '/adjetives'
  },
  {
    path: '/practice',
    children: [
      {
        component: PracticeIndex,
        path: ''
      },
      {
        component: ArticlesPractice,
        path: 'articles'
      },
      {
        component: NounsMeaningsPractice,
        path: 'nouns-meanings'
      },
      {
        component: AdjetivesMeaningsPractice,
        path: 'adjetives-meanings'
      },
      {
        component: VerbsMeaningsPractice,
        path: 'verbs-meanings'
      }
    ]
  }
]
