import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import tr from './locales/tr.json'

import App from './App.vue'

import {
  DEFAULT_LOCALE,
  isSupportedLocale
} from './constants/locales'

import { LANGUAGE_STORAGE_KEY } from './constants/storage'

import './assets/css/tailwind.css'

const savedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY)
const initialLocale = isSupportedLocale(savedLocale)
  ? savedLocale
  : DEFAULT_LOCALE

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en: en,
    de: de,
    es: es,
    tr: tr
  }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
