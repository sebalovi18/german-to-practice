<script setup lang="ts">
import { nouns } from '@/data/nouns'

import { computed, ref } from 'vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

const tableClass = 'border border-gray-300'
const thClass = 'border border-gray-300 p-2 capitalize text-left uppercase py-4 font-bold'
const tdClass = 'border border-gray-300 p-2 capitalize text-left font-light'

// TABLE HEADERS
type Th = {
  label: string
  class: string
}

const ths: Th[] = [
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
    label: '🇹🇷',
    class: thClass
  }
]

// TABLE DATA
type Td = {
  class: string
  label: string
  value: (noun: GermanNoun) => string
}

const tds: Td[] = [
  {
    label: 'ID',
    class: tdClass,
    value: noun => noun.id
  },
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
    value: noun => noun.translations.es
  },
  {
    label: '🇬🇧',
    class: tdClass,
    value: noun => noun.translations.en
  },
  {
    label: '🇹🇷',
    class: tdClass,
    value: noun => noun.translations.tr
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
            {{ td.value(noun) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
