<script setup lang="ts">
import { verbs } from '@/data/verbs'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

const {
  t
} = useI18n()

const tableClass = 'w-full border border-gray-300 text-[10px] sm:text-xs'
const thClass = 'border border-gray-300 p-2 capitalize text-left uppercase py-4 bg-gray-900 font-bold text-[10px] sm:text-xs'
const tdClass = 'border border-gray-300 p-2 capitalize text-left font-light text-[10px] sm:text-xs'

// TABLE HEADERS
type Th = {
  label: string
  class: string
}

const ths = computed<Th[]>(() => [
  {
    label: t('verbs.table.verb'),
    class: thClass
  },
  {
    label: t('verbs.table.infinitive'),
    class: thClass
  },
  {
    label: t('verbs.table.preteritum'),
    class: thClass
  },
  {
    label: t('verbs.table.perfekt'),
    class: thClass
  },
  {
    label: '🇪🇸',
    class: thClass
  },
  {
    label: '🇬🇧',
    class: thClass
  },
  {
    label: '🇹🇷',
    class: thClass
  }
])

// TABLE DATA
type Td = {
  class: string
  label: string
  value: (verb: GermanVerb) => string
}

const tds: Td[] = [
  {
    label: 'Verb',
    class: tdClass,
    value: verb => verb.id
  },
  {
    label: 'Infinitive',
    class: tdClass,
    value: verb => verb.infinitive
  },
  {
    label: 'Preteritum',
    class: tdClass,
    value: verb => verb.preteritum
  },
  {
    label: 'Perfekt',
    class: tdClass,
    value: verb => verb.perfekt
  },
  {
    label: '🇪🇸',
    class: tdClass,
    value: verb => verb.translations.es
  },
  {
    label: '🇬🇧',
    class: tdClass,
    value: verb => verb.translations.en
  },
  {
    label: '🇹🇷',
    class: tdClass,
    value: verb => verb.translations.tr
  }
]

// FILTER SEARCH
const filterSearch = ref('')

// FILTER VERBS
const filteredVerbs = computed(() => {
  if (!filterSearch.value) return verbs

  const sanitizedFilterSearch = filterSearch.value.toLowerCase().trim()

  return verbs.filter(verb =>
    verb.id.toLowerCase().includes(sanitizedFilterSearch)
    || verb.infinitive.toLowerCase().includes(sanitizedFilterSearch)
    || verb.preteritum.toLowerCase().includes(sanitizedFilterSearch)
    || verb.perfekt.toLowerCase().includes(sanitizedFilterSearch)
    || verb.translations.en.toLowerCase().includes(sanitizedFilterSearch)
    || verb.translations.de.toLowerCase().includes(sanitizedFilterSearch)
    || verb.translations.es.toLowerCase().includes(sanitizedFilterSearch)
    || verb.translations.tr.toLowerCase().includes(sanitizedFilterSearch)
  )
})
</script>
<template>
  <div
    class="py-4 space-y-4"
  >
    <input
      v-model="filterSearch"
      type="text"
      :placeholder="t('verbs.searchPlaceholder')"
      class="w-full p-2 border border-gray-300 rounded-md"
    >

    <div
      class="overflow-x-auto"
    >
      <table
        :class="tableClass"
      >
        <thead>
          <tr>
            <th
              v-for="th in ths"
              :key="th.label"
              :class="th.class"
            >
              {{ th.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template
            v-if="filteredVerbs.length"
          >
            <tr
              v-for="verb in filteredVerbs"
              :key="verb.id"
            >
              <td
                v-for="td in tds"
                :key="td.label"
                :class="td.class"
              >
                {{ td.value(verb) }}
              </td>
            </tr>
          </template>
          <template
            v-else
          >
            <tr>
              <td
                :colspan="ths.length"
                class="text-center py-4"
              >
                {{ t('verbs.noResults') }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
