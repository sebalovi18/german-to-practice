import Home from '../pages/index.vue'
import Nouns from '../pages/nouns.vue'
import Verbs from '../pages/verbs.vue'
import Adjetives from '../pages/adjetives.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/nouns',
    component: Nouns
  },
  {
    path: '/verbs',
    component: Verbs
  },
  {
    path: '/adjetives',
    component: Adjetives
  }
]
