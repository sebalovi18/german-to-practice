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
      }
    ]
  }
]
