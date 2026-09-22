<script setup lang="ts">
import { vocabulary } from '@/data/vocabulary'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import {
  BookOpen, ChartNoAxesColumn, Dumbbell, List
} from '@lucide/vue'

const router = useRouter()
const {
  t
} = useI18n()

const columns = computed(() => [
  {
    label: t('home.navigation.vocabulary'),
    icon: BookOpen,
    path: '/vocabulary'
  },
  {
    label: t('home.navigation.dashboard'),
    icon: ChartNoAxesColumn,
    path: '/dashboard'
  },
  {
    label: t('home.navigation.verbs'),
    icon: List,
    path: '/verbs'
  },
  {
    label: t('home.navigation.adjectives'),
    icon: List,
    path: '/adjectives'
  },
  {
    label: t('home.navigation.nouns'),
    icon: List,
    path: '/nouns'
  },
  {
    label: t('home.navigation.practice'),
    icon: Dumbbell,
    path: '/practice'
  }
])

const globalSearch = ref('')

const normalizedSearch = computed(() => normalize(globalSearch.value))
const filteredVocabulary = computed(() => {
  if (!normalizedSearch.value) return []

  return vocabulary.filter((entry) =>
    normalize(
      [entry.german, entry.forms, entry.translations.en, entry.translations.es, entry.example].join(
        ' '
      )
    ).includes(normalizedSearch.value)
  )
})

const visibleResults = computed(() => filteredVocabulary.value.slice(0, 50))

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
    <p>
      🇩🇪 German to Practice
      <br />
      <span
        class="text-sm text-gray-300"
      >
        {{ t('home.description') }}
      </span>
    </p>

    <input
      v-model="globalSearch"
      type="search"
      :placeholder="t('home.search.placeholder')"
      class="w-full p-2 border border-gray-300 rounded-md"
    />

    <div
      v-if="!normalizedSearch"
      class="grid grid-cols-2 gap-4 items-start justify-start text-sm sm:text-base"
    >
      <button
        v-for="item in columns"
        :key="item.path"
        class="btn min-h-32 min-w-32 flex items-center justify-center gap-2 w-full"
        @click="router.push(item.path)"
      >
        <component
          :is="item.icon"
          class="size-4 flex-none"
          aria-hidden="true"
        />
        <span>{{ item.label }}</span>
      </button>
    </div>

    <div
      v-else
      class="space-y-3"
    >
      <p
        class="text-sm text-gray-300"
      >
        {{ t('home.search.resultsSummary', { count: filteredVocabulary.length }) }}
      </p>

      <p
        v-if="!filteredVocabulary.length"
        class="rounded-md border border-gray-300 p-4 text-sm text-gray-300"
      >
        {{ t('home.search.noResults') }}
      </p>

      <div
        v-else
        class="overflow-x-auto"
      >
        <table
          class="w-full border border-gray-300 text-xs"
        >
          <thead>
            <tr
              class="bg-gray-900 uppercase"
            >
              <th
                class="border border-gray-300 p-2 text-left"
              >
                {{ t('vocabulary.table.german') }}
              </th>
              <th
                class="border border-gray-300 p-2 text-left"
              >🇪🇸</th>
              <th
                class="border border-gray-300 p-2 text-left"
              >🇬🇧</th>
              <th
                class="border border-gray-300 p-2 text-left"
              >
                {{ t('vocabulary.table.level') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="entry in visibleResults"
              :key="entry.id"
            >
              <td
                class="border border-gray-300 p-2 font-semibold"
              >{{ entry.german }}</td>
              <td
                class="border border-gray-300 p-2"
              >{{ entry.translations.es }}</td>
              <td
                class="border border-gray-300 p-2"
              >{{ entry.translations.en }}</td>
              <td
                class="border border-gray-300 p-2"
              >{{ entry.level }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        v-if="filteredVocabulary.length > visibleResults.length"
        class="btn w-full"
        @click="router.push({ path: '/vocabulary', query: { search: globalSearch } })"
      >
        {{ t('home.search.showAll') }}
      </button>
    </div>
  </div>
</template>
