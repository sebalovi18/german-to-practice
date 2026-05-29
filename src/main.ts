import {
  createApp,
  watch
} from 'vue'

// VUE ROUTER
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

// VUE I18N
import { createI18n } from 'vue-i18n'
import locales from './locales'

// PINIA
import { createPinia } from 'pinia'

// FORMKIT AUTO ANIMATE
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

// APP
import App from './App.vue'

// CONSTANTS
import {
  DEFAULT_LOCALE,
  isSupportedLocale
} from './constants/locales'

import { LANGUAGE_STORAGE_KEY } from './constants/storage'

import './assets/css/tailwind.css'

// ----------------------------------------
// INITIALIZE ROUTER
// ----------------------------------------
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ----------------------------------------
// INITIALIZE I18N
// ----------------------------------------
const savedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY)
const initialLocale = isSupportedLocale(savedLocale)
  ? savedLocale
  : DEFAULT_LOCALE

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: locales
})

const updateDocumentTitle = () => {
  const titleKey = router.currentRoute.value.meta.titleKey as string | undefined
  const appTitle = 'German to Practice'

  document.title = titleKey
    ? `${i18n.global.t(titleKey)} | ${appTitle}`
    : appTitle
}

router.afterEach(() => {
  updateDocumentTitle()
})

watch(i18n.global.locale, () => {
  updateDocumentTitle()
})

// ----------------------------------------
// INITIALIZE PINIA
// ----------------------------------------
const pinia = createPinia()

// ----------------------------------------
// INITIALIZE APP
// ----------------------------------------
const app = createApp(App)

app.use(router)

app.use(i18n)

app.use(pinia)

app.use(autoAnimatePlugin)

// ----------------------------------------
// MOUNT APP
// ----------------------------------------
app.mount('#app')
