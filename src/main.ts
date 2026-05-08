import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import tr from './locales/tr.json'

import App from './App.vue'

import './assets/css/tailwind.css'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
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
