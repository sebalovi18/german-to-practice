import { createApp } from 'vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './routes'

import { createI18n } from 'vue-i18n'
import locales from './locales'


import App from './App.vue'

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
  history: createMemoryHistory(),
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

// ----------------------------------------
// INITIALIZE APP
// ----------------------------------------
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
