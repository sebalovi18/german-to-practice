<script setup lang="ts">
import { nouns } from '@/data/nouns'

import { computed, ref } from 'vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

const tableClass = 'border border-gray-300'
const thClass = 'border border-gray-300 p-2 capitalize text-left'
const tdClass = 'border border-gray-300 p-2 capitalize text-left'

// TABLE HEADERS
const ths = [
  {
    label: 'ID',
    class: thClass
  },
  {
    label: 'Article',
    class: thClass
  },
  {
    label: 'Singular',
    class: thClass
  },
  {
    label: 'Plural',
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
    label: '🇩🇪',
    class: thClass
  },
  {
    label: '🇹🇷',
    class: thClass
  }
]

// TABLE DATA
type Td = {
  key: keyof GermanNoun
  label: string
  class: string
}

const tds: Td[] = [
  {
    key: 'id',
    label: 'ID',
    class: tdClass
  },
  {
    key: 'article',
    label: 'Article',
    class: tdClass
  },
  {
    key: 'singular',
    label: 'Singular',
    class: tdClass
  },
  {
    key: 'plural',
    label: 'Plural',
    class: tdClass
  },
  {
    key: 'translations',
    label: '🇪🇸',
    class: tdClass
  },
  {
    key: 'translations',
    label: '🇬🇧',
    class: tdClass
  },
  {
    key: 'translations',
    label: '🇩🇪',
    class: tdClass
  },
  {
    key: 'translations',
    label: '🇹🇷',
    class: tdClass
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
    class="py-2 space-y-4"
  >
    <input
      v-model="filterSearch"
      type="text"
      placeholder="Search by singular, plural, or translation..."
      class="w-full p-2 border border-gray-300 rounded-md"
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
        <tr
          v-for="noun in filteredNouns"
          :key="noun.id"
        >
          <td
            v-for="td in tds"
            :key="td.label"
            :class="td.class"
          >
            {{ noun[td.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
