<script setup lang="ts">
import { adjectives } from '@/data/adjectives'
import { nouns } from '@/data/nouns'
import { verbs } from '@/data/verbs'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { ChartNoAxesColumn, Dumbbell, List } from '@lucide/vue'

import type { GermanAdjective } from '@/interfaces/GermanAdjectives'
import type { GermanNoun } from '@/interfaces/GermanNoun'
import type { GermanVerb } from '@/interfaces/GermanVerbs'

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

type Th = {
  label: string
  class: string
}

type Td<T> = {
  label: string
  class: string
  value: (item: T) => string
}

const globalSearch = ref('')

const normalizedSearch = computed(() => normalizeValue(globalSearch.value).trim())
const isSearching = computed(() => normalizedSearch.value.length > 0)

const verbThs = computed<Th[]>(() => [
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
  },
  {
    label: '🇮🇳',
    class: thClass
  }
])

const verbTds: Td<GermanVerb>[] = [
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
  },
  {
    label: '🇮🇳',
    class: tdClass,
    value: verb => verb.translations.te
  }
]

const adjectiveThs = computed<Th[]>(() => [
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
  },
  {
    label: '🇮🇳',
    class: thClass
  }
])

const adjectiveTds: Td<GermanAdjective>[] = [
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
  },
  {
    label: '🇮🇳',
    class: tdClass,
    value: adjective => adjective.translations.te
  }
]

const nounThs = computed<Th[]>(() => [
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
  },
  {
    label: '🇮🇳',
    class: thClass
  }
])

const nounTds = computed((): Td<GermanNoun>[] => [
  {
    label: 'Article',
    class: tdClass,
    value: noun => noun.article
  },
  {
    label: t('nouns.table.singular'),
    class: tdClass,
    value: noun => noun.value
  },
  {
    label: t('nouns.table.plural'),
    class: tdClass,
    value: noun => {
      const pluralNoun = getPluralNoun(noun)
      return pluralNoun ? `${pluralNoun.article} ${pluralNoun.value}` : '-'
    }
  },
  {
    label: '🇪🇸',
    class: tdClass,
    value: noun => formatNounTranslation(noun, 'es')
  },
  {
    label: '🇬🇧',
    class: tdClass,
    value: noun => formatNounTranslation(noun, 'en')
  },
  {
    label: '🇹🇷',
    class: tdClass,
    value: noun => formatNounTranslation(noun, 'tr')
  },
  {
    label: '🇮🇳',
    class: tdClass,
    value: noun => noun.translations.te
  }
])

const singularNouns = computed(() => nouns.filter(noun => noun.singular_id === null))

const filteredVerbs = computed(() => {
  if (!isSearching.value) return []

  return verbs.filter(verb => matchesSearch(verb, normalizedSearch.value))
})

const filteredAdjectives = computed(() => {
  if (!isSearching.value) return []

  return adjectives.filter(adjective => matchesSearch(adjective, normalizedSearch.value))
})

const filteredNouns = computed(() => {
  if (!isSearching.value) return []

  return singularNouns.value.filter(noun =>
    matchesSearch([
      noun,
      getPluralNoun(noun)
    ], normalizedSearch.value)
  )
})

const totalResults = computed(() =>
  filteredVerbs.value.length
  + filteredAdjectives.value.length
  + filteredNouns.value.length
)

function getPluralNoun (noun: GermanNoun) {
  if (!noun.plural_id) return null

  return nouns.find(candidate => candidate.id === noun.plural_id) ?? null
}

function formatNounTranslation (noun: GermanNoun, language: 'en' | 'es' | 'tr') {
  const translationArticle = noun.translationArticles[language]
  return translationArticle ? `${translationArticle} ${noun.translations[language]}` : noun.translations[language]
}

function matchesSearch (value: unknown, search: string): boolean {
  return normalizeSearchContent(value).includes(search)
}

function normalizeSearchContent (value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(item => normalizeSearchContent(item)).join(' ')
  }

  if (value && typeof value === 'object') {
    return Object.values(value).map(item => normalizeSearchContent(item)).join(' ')
  }

  return normalizeValue(value)
}

function normalizeValue (value: unknown): string {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
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

    <!-- COLUMNS -->
    <div
      v-if="!isSearching"
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
          :key="item.path"
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
                  v-for="th in verbThs"
                  :key="th.label"
                  :class="th.class"
                >
                  {{ th.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="verb in filteredVerbs"
                :key="verb.id"
              >
                <td
                  v-for="td in verbTds"
                  :key="td.label"
                  :class="td.class"
                >
                  {{ td.value(verb) }}
                </td>
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
                  v-for="th in adjectiveThs"
                  :key="th.label"
                  :class="th.class"
                >
                  {{ th.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="adjective in filteredAdjectives"
                :key="adjective.id"
              >
                <td
                  v-for="td in adjectiveTds"
                  :key="td.label"
                  :class="td.class"
                >
                  {{ td.value(adjective) }}
                </td>
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
                  v-for="th in nounThs"
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
                  v-for="td in nounTds"
                  :key="td.label"
                  :class="td.class"
                >
                  {{ td.value(noun) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
