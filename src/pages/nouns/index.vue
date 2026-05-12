<script setup lang="ts">
import { nouns } from '@/data/nouns'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { GermanNoun } from '@/interfaces/GermanNoun'

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
    label: t('nouns.table.article'),
    class: thClass
  },
  {
    label: t('nouns.table.singular'),
    class: thClass
  },
  {
    label: t('nouns.table.plural'),
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
  value: (noun: GermanNoun) => string
}

const tds: Td[] = [
  {
    label: 'Article',
    class: tdClass,
    value: noun => noun.article
  },
  {
    label: 'Singular',
    class: tdClass,
    value: noun => noun.singular
  },
  {
    label: 'Plural',
    class: tdClass,
    value: noun => 'Die ' + noun.plural
  },
  {
    label: '🇪🇸',
    class: tdClass,
    value: noun => noun.translationArticles.es ? noun.translationArticles.es + ' ' + noun.translations.es : noun.translations.es
  },
  {
    label: '🇬🇧',
    class: tdClass,
    value: noun => noun.translationArticles.en ? noun.translationArticles.en + ' ' + noun.translations.en : noun.translations.en
  },
  {
    label: '🇹🇷',
    class: tdClass,
    value: noun => noun.translationArticles.tr ? noun.translationArticles.tr + ' ' + noun.translations.tr : noun.translations.tr
  }
]

// FILTER SEARCH
const filterSearch = ref('')

// FILTER NOUNS
const filteredNouns = computed(() => {
  if (!filterSearch.value) return nouns

  const sanitizedFilterSearch = filterSearch.value.toLowerCase().trim()

  return nouns.filter(noun =>
    noun.singular.toLowerCase().includes(sanitizedFilterSearch)
    || noun.plural.toLowerCase().includes(sanitizedFilterSearch)
    || noun.translations.en.toLowerCase().includes(sanitizedFilterSearch)
    || noun.translations.de.toLowerCase().includes(sanitizedFilterSearch)
    || noun.translations.es.toLowerCase().includes(sanitizedFilterSearch)
    || noun.translations.tr.toLowerCase().includes(sanitizedFilterSearch)
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
      :placeholder="t('nouns.searchPlaceholder')"
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
            v-if="filteredNouns.length"
          >
            <tr
              v-for="noun in filteredNouns"
              :key="noun.id"
            >
              <td
                v-for="td in tds"
                :key="td.label"
                :class="td.class"
              >
                {{ td.value(noun) }}
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
                {{ t('nouns.noResults') }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
