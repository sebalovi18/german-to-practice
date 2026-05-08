import Home from '../pages/index.vue'
import Nouns from '../pages/nouns.vue'
import Verbs from '../pages/verbs.vue'
import Adjetives from '../pages/adjetives.vue'

export default [
  {
    alias: '/home',
    component: Home,
    path: '/'
  },
  {
    component: Nouns,
    path: '/nouns'
  },
  {
    component: Verbs,
    path: '/verbs'
  },
  {
    component: Adjetives,
    path: '/adjetives'
  }
]
