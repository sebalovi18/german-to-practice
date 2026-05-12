<script setup lang="ts">
import { adjectives } from '@/data/adjectives'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { GermanAdjective } from '@/interfaces/GermanAdjetives'

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
    label: t('adjectives.table.adjective'),
    class: thClass
  },
  {
    label: t('adjectives.table.comparative'),
    class: thClass
  },
  {
    label: t('adjectives.table.superlative'),
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
  value: (adjective: GermanAdjective) => string
}

const tds: Td[] = [
  {
    label: 'Adjective',
    class: tdClass,
    value: adjective => adjective.adjective
  },
  {
    label: 'Comparative',
    class: tdClass,
    value: adjective => adjective.comparative
  },
  {
    label: 'Superlative',
    class: tdClass,
    value: adjective => adjective.superlative
  },
  {
    label: '🇪🇸',
    class: tdClass,
    value: adjective => adjective.translations.es
  },
  {
    label: '🇬🇧',
    class: tdClass,
    value: adjective => adjective.translations.en
  },
  {
    label: '🇹🇷',
    class: tdClass,
    value: adjective => adjective.translations.tr
  }
]

// FILTER SEARCH
const filterSearch = ref('')

// FILTER ADJECTIVES
const filteredAdjectives = computed(() => {
  if (!filterSearch.value) return adjectives

  const sanitizedFilterSearch = filterSearch.value.toLowerCase().trim()

  return adjectives.filter(adjective =>
    adjective.id.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.adjective.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.comparative.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.superlative.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.translations.en.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.translations.de.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.translations.es.toLowerCase().includes(sanitizedFilterSearch)
    || adjective.translations.tr.toLowerCase().includes(sanitizedFilterSearch)
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
      :placeholder="t('adjectives.searchPlaceholder')"
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
            v-if="filteredAdjectives.length"
          >
            <tr
              v-for="adjective in filteredAdjectives"
              :key="adjective.id"
            >
              <td
                v-for="td in tds"
                :key="td.label"
                :class="td.class"
              >
                {{ td.value(adjective) }}
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
                {{ t('adjectives.noResults') }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
