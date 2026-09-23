<script setup lang="ts">
import { vocabulary } from '@/data/vocabulary'

import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const {
  t
} = useI18n()
const route = useRoute()

const pageSize = 50
const search = ref(typeof route.query.search === 'string' ? route.query.search : '')
const selectedLevel = ref('')
const selectedKind = ref('')
const currentPage = ref(1)

const levels = [...new Set(vocabulary.map(entry => entry.level))]
const kinds = [...new Set(vocabulary.map((entry) => entry.kind))].sort((a, b) =>
  a.localeCompare(b, 'es')
)

const filteredVocabulary = computed(() => {
  const query = normalize(search.value)

  return vocabulary.filter((entry) => {
    if (selectedLevel.value && entry.level !== selectedLevel.value) return false
    if (selectedKind.value && entry.kind !== selectedKind.value) return false
    if (!query) return true

    return normalize(
      [
        entry.german,
        entry.forms,
        entry.translations.en,
        entry.translations.es,
        entry.example,
        entry.lesson,
        entry.kind
      ].join(' ')
    ).includes(query)
  })
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredVocabulary.value.length / pageSize))
)
const visibleEntries = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredVocabulary.value.slice(start, start + pageSize)
})

watch([search, selectedLevel, selectedKind], () => {
  currentPage.value = 1
})

function normalize (value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}
</script>

<template>
  <div
    class="space-y-4"
  >
    <header
      class="space-y-1"
    >
      <h1
        class="text-xl font-bold"
      >{{ t('vocabulary.title') }}</h1>
      <p
        class="text-sm text-gray-300"
      >
        {{ t('vocabulary.summary', { count: filteredVocabulary.length }) }}
      </p>
    </header>

    <div
      class="grid gap-2 sm:grid-cols-3"
    >
      <input
        v-model="search"
        type="search"
        :placeholder="t('vocabulary.searchPlaceholder')"
        class="w-full p-2 border border-gray-300 rounded-md"
      />

      <select
        v-model="selectedLevel"
        class="w-full p-2 border border-gray-300 rounded-md bg-background"
      >
        <option
          value=""
        >{{ t('vocabulary.allLevels') }}</option>
        <option
          v-for="level in levels"
          :key="level"
          :value="level"
        >
          {{ level }}
        </option>
      </select>

      <select
        v-model="selectedKind"
        class="w-full p-2 border border-gray-300 rounded-md bg-background"
      >
        <option
          value=""
        >{{ t('vocabulary.allTypes') }}</option>
        <option
          v-for="kind in kinds"
          :key="kind"
          :value="kind"
        >
          {{ kind }}
        </option>
      </select>
    </div>

    <div
      class="overflow-x-auto"
    >
      <table
        class="w-full border border-gray-300 text-[10px] sm:text-xs"
      >
        <thead>
          <tr
            class="bg-gray-900 uppercase"
          >
            <th
              class="border border-gray-300 p-2 text-left"
            >{{ t('vocabulary.table.level') }}</th>
            <th
              class="border border-gray-300 p-2 text-left"
            >{{ t('vocabulary.table.type') }}</th>
            <th
              class="border border-gray-300 p-2 text-left"
            >{{ t('vocabulary.table.german') }}</th>
            <th
              class="border border-gray-300 p-2 text-left"
            >{{ t('vocabulary.table.forms') }}</th>
            <th
              class="border border-gray-300 p-2 text-left"
            >🇪🇸</th>
            <th
              class="border border-gray-300 p-2 text-left"
            >🇬🇧</th>
            <th
              class="border border-gray-300 p-2 text-left"
            >
              {{ t('vocabulary.table.example') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="entry in visibleEntries"
            :key="entry.id"
          >
            <td
              class="border border-gray-300 p-2"
            >{{ entry.level }}</td>
            <td
              class="border border-gray-300 p-2"
            >{{ entry.kind }}</td>
            <td
              class="border border-gray-300 p-2 font-semibold"
            >{{ entry.german }}</td>
            <td
              class="border border-gray-300 p-2"
            >{{ entry.forms || '—' }}</td>
            <td
              class="border border-gray-300 p-2"
            >{{ entry.translations.es }}</td>
            <td
              class="border border-gray-300 p-2"
            >{{ entry.translations.en }}</td>
            <td
              class="border border-gray-300 p-2 normal-case"
            >{{ entry.example || '—' }}</td>
          </tr>
          <tr
            v-if="!visibleEntries.length"
          >
            <td
              colspan="7"
              class="border border-gray-300 p-4 text-center"
            >
              {{ t('vocabulary.noResults') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="flex items-center justify-between gap-2"
    >
      <button
        class="btn"
        :disabled="currentPage === 1"
        @click="currentPage -= 1"
      >
        {{ t('vocabulary.previous') }}
      </button>
      <span
        class="text-sm"
      >
        {{ t('vocabulary.page', { current: currentPage, total: totalPages }) }}
      </span>
      <button
        class="btn"
        :disabled="currentPage === totalPages"
        @click="currentPage += 1"
      >
        {{ t('vocabulary.next') }}
      </button>
    </div>
  </div>
</template>
