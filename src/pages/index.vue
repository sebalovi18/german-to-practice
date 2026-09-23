<script setup lang="ts">
import { adjectives } from '@/data/adjectives'
import { verbs } from '@/data/verbs'
import { vocabulary } from '@/data/vocabulary'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { ChartNoAxesColumn, Dumbbell, List } from '@lucide/vue'

import type { GermanAdjective } from '@/interfaces/GermanAdjectives'
import type { GermanVerb } from '@/interfaces/GermanVerbs'
import type { VocabularyEntry } from '@/interfaces/VocabularyEntry'

const router = useRouter()
const {
  t
} = useI18n()

const columns = computed(() => [
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

const tableClass = 'w-full border border-gray-300 text-[10px] sm:text-xs'
const thClass = 'border border-gray-300 p-2 capitalize text-left uppercase py-4 bg-gray-900 font-bold text-[10px] sm:text-xs'
const tdClass = 'border border-gray-300 p-2 capitalize text-left font-light text-[10px] sm:text-xs'

const globalSearch = ref('')
const normalizedSearch = computed(() => normalize(globalSearch.value))

const verbsByInfinitive = new Map<string, GermanVerb>()

verbs.forEach((verb) => {
  verbsByInfinitive.set(normalizeGermanWord(verb.id), verb)
  verbsByInfinitive.set(normalizeGermanWord(verb.infinitive), verb)
})

const adjectivesByValue = new Map<string, GermanAdjective>()

adjectives.forEach((adjective) => {
  adjectivesByValue.set(normalizeGermanWord(adjective.id), adjective)
  adjectivesByValue.set(normalizeGermanWord(adjective.adjective), adjective)
})

type VerbResult = {
  entry: VocabularyEntry
  details: GermanVerb | null
}

type AdjectiveResult = {
  entry: VocabularyEntry
  details: GermanAdjective | null
}

type NounResult = {
  entry: VocabularyEntry
  article: string
  singular: string
  plural: string
}

const filteredVerbs = computed<VerbResult[]>(() => {
  if (!normalizedSearch.value) return []

  return vocabulary
    .filter(entry => ['Verbo', 'Verbo modal'].includes(entry.kind))
    .map(entry => ({
      entry,
      details: verbsByInfinitive.get(normalizeGermanWord(entry.german)) ?? null
    }))
    .filter(result => matchesSearch(result.entry, [
      result.details?.infinitive,
      result.details?.preteritum,
      result.details?.perfekt
    ]))
})

const filteredAdjectives = computed<AdjectiveResult[]>(() => {
  if (!normalizedSearch.value) return []

  return vocabulary
    .filter(entry => entry.kind === 'Adjetivo')
    .map(entry => ({
      entry,
      details: adjectivesByValue.get(normalizeGermanWord(entry.german)) ?? null
    }))
    .filter(result => matchesSearch(result.entry, [
      result.details?.comparative,
      result.details?.superlative
    ]))
})

const filteredNouns = computed<NounResult[]>(() => {
  if (!normalizedSearch.value) return []

  return vocabulary
    .filter(entry => entry.kind === 'Sustantivo')
    .map(entry => {
      const nounMatch = entry.german.match(/^(der\/die|der|die|das)\s+(.+)$/i)

      return {
        entry,
        article: nounMatch?.[1] ?? '—',
        singular: nounMatch?.[2] ?? entry.german,
        plural: formatPlural(entry.forms)
      }
    })
    .filter(result => matchesSearch(result.entry, [
      result.article,
      result.singular,
      result.plural
    ]))
})

const totalResults = computed(() => (
  filteredVerbs.value.length
  + filteredAdjectives.value.length
  + filteredNouns.value.length
))

function matchesSearch (entry: VocabularyEntry, additionalValues: unknown[] = []): boolean {
  return normalize([
    entry.german,
    entry.forms,
    entry.translations.en,
    entry.translations.es,
    entry.example,
    ...additionalValues
  ].join(' ')).includes(normalizedSearch.value)
}

function formatPlural (forms: string | null): string {
  if (!forms || /^(—|solo singular)/i.test(forms)) return '—'

  return forms
}

function normalizeGermanWord (value: string): string {
  return normalize(value
    .replaceAll('|', '')
    .replaceAll('(', '')
    .replaceAll(')', ''))
}

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
      <br>
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
    >

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
        <span>
          {{ item.label }}
        </span>
      </button>
    </div>

    <div
      v-else
      class="space-y-6"
    >
      <p
        class="text-sm text-gray-300"
      >
        {{ t('home.search.resultsSummary', { count: totalResults }) }}
      </p>

      <p
        v-if="!totalResults"
        class="rounded-md border border-gray-300 p-4 text-sm text-gray-300"
      >
        {{ t('home.search.noResults') }}
      </p>

      <section
        v-if="filteredVerbs.length"
        class="space-y-2"
      >
        <h2
          class="font-bold"
        >
          {{ t('home.navigation.verbs') }} ({{ filteredVerbs.length }})
        </h2>
        <div
          class="overflow-x-auto"
        >
          <table
            :class="tableClass"
          >
            <thead>
              <tr>
                <th
                  :class="thClass"
                >{{ t('verbs.table.verb') }}</th>
                <th
                  :class="thClass"
                >{{ t('verbs.table.infinitive') }}</th>
                <th
                  :class="thClass"
                >{{ t('verbs.table.preteritum') }}</th>
                <th
                  :class="thClass"
                >{{ t('verbs.table.perfekt') }}</th>
                <th
                  :class="thClass"
                >🇪🇸</th>
                <th
                  :class="thClass"
                >🇬🇧</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="result in filteredVerbs"
                :key="result.entry.id"
              >
                <td
                  :class="tdClass"
                >{{ result.entry.german }}</td>
                <td
                  :class="tdClass"
                >{{ result.details?.infinitive.replaceAll('|', '') ?? result.entry.german }}</td>
                <td
                  :class="tdClass"
                >{{ result.details?.preteritum ?? '—' }}</td>
                <td
                  :class="tdClass"
                >{{ result.details?.perfekt ?? '—' }}</td>
                <td
                  :class="tdClass"
                >{{ result.entry.translations.es }}</td>
                <td
                  :class="tdClass"
                >{{ result.entry.translations.en }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section
        v-if="filteredAdjectives.length"
        class="space-y-2"
      >
        <h2
          class="font-bold"
        >
          {{ t('home.navigation.adjectives') }} ({{ filteredAdjectives.length }})
        </h2>
        <div
          class="overflow-x-auto"
        >
          <table
            :class="tableClass"
          >
            <thead>
              <tr>
                <th
                  :class="thClass"
                >{{ t('adjectives.table.adjective') }}</th>
                <th
                  :class="thClass"
                >{{ t('adjectives.table.comparative') }}</th>
                <th
                  :class="thClass"
                >{{ t('adjectives.table.superlative') }}</th>
                <th
                  :class="thClass"
                >🇪🇸</th>
                <th
                  :class="thClass"
                >🇬🇧</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="result in filteredAdjectives"
                :key="result.entry.id"
              >
                <td
                  :class="tdClass"
                >{{ result.entry.german }}</td>
                <td
                  :class="tdClass"
                >{{ result.details?.comparative ?? '—' }}</td>
                <td
                  :class="tdClass"
                >{{ result.details?.superlative ?? '—' }}</td>
                <td
                  :class="tdClass"
                >{{ result.entry.translations.es }}</td>
                <td
                  :class="tdClass"
                >{{ result.entry.translations.en }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section
        v-if="filteredNouns.length"
        class="space-y-2"
      >
        <h2
          class="font-bold"
        >
          {{ t('home.navigation.nouns') }} ({{ filteredNouns.length }})
        </h2>
        <div
          class="overflow-x-auto"
        >
          <table
            :class="tableClass"
          >
            <thead>
              <tr>
                <th
                  :class="thClass"
                >{{ t('nouns.table.article') }}</th>
                <th
                  :class="thClass"
                >{{ t('nouns.table.singular') }}</th>
                <th
                  :class="thClass"
                >{{ t('nouns.table.plural') }}</th>
                <th
                  :class="thClass"
                >🇪🇸</th>
                <th
                  :class="thClass"
                >🇬🇧</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="result in filteredNouns"
                :key="result.entry.id"
              >
                <td
                  :class="tdClass"
                >{{ result.article }}</td>
                <td
                  :class="tdClass"
                >{{ result.singular }}</td>
                <td
                  :class="tdClass"
                >{{ result.plural }}</td>
                <td
                  :class="tdClass"
                >{{ result.entry.translations.es }}</td>
                <td
                  :class="tdClass"
                >{{ result.entry.translations.en }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
