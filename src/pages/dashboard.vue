<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { ExternalLink, Info, Trash2 } from '@lucide/vue'
import { storeToRefs } from 'pinia'

import BaseChart from '@/components/BaseChart.vue'

import { useAdjectivesStore } from '@/store/useAdjectivesStore'
import { useArticlesStore } from '@/store/useArticlesStore'
import { useNounsStore } from '@/store/useNounsStore'
import { useVerbsStore } from '@/store/useVerbsStore'

import type { ChartBarItem } from '@/interfaces/ChartBarItem'
import type { HistoryAdjective } from '@/interfaces/HistoryAdjetives'
import type { HistoryArticle } from '@/interfaces/HistoryArticles'
import type { HistoryNoun } from '@/interfaces/HistoryNouns'
import type { HistoryStats } from '@/interfaces/HistoryStats'
import type { HistoryVerb } from '@/interfaces/HistoryVerbs'

const {
  t
} = useI18n()
const router = useRouter()

const verbsStore = useVerbsStore()
const nounsStore = useNounsStore()
const adjectivesStore = useAdjectivesStore()
const articlesStore = useArticlesStore()

const {
  verbsHistory
} = storeToRefs(verbsStore)

const {
  nounsHistory
} = storeToRefs(nounsStore)

const {
  adjectivesHistory
} = storeToRefs(adjectivesStore)

const {
  articlesHistory
} = storeToRefs(articlesStore)

type DashboardSectionId = 'verbs' | 'nouns' | 'adjectives' | 'articles'
type DashboardSection = {
  id: DashboardSectionId
  title: string
  description: string
  path: string
  items: ChartBarItem[]
}

const toSortedChartItems = <T extends HistoryStats>(
  items: T[],
  getLabel: (item: T) => string
): ChartBarItem[] =>
  items
    .map(item => ({
      id: 'id' in item && typeof item.id === 'string' ? item.id : getLabel(item),
      label: getLabel(item),
      successAttempts: item.successAttempts,
      failedAttempts: item.failedAttempts,
      totalAttempts: item.totalAttempts
    }))
    .sort((a, b) => b.totalAttempts - a.totalAttempts)

const sections = computed<DashboardSection[]>(() => [
  {
    id: 'verbs',
    title: t('dashboard.sections.verbs.title'),
    description: t('dashboard.sections.verbs.description'),
    path: '/practice/verbs-meanings',
    items: toSortedChartItems(
      Array.from(verbsHistory.value.values()) as HistoryVerb[],
      item => item.infinitive
    )
  },
  {
    id: 'nouns',
    title: t('dashboard.sections.nouns.title'),
    description: t('dashboard.sections.nouns.description'),
    path: '/practice/nouns-meanings',
    items: toSortedChartItems(
      Array.from(nounsHistory.value.values()) as HistoryNoun[],
      item => item.value
    )
  },
  {
    id: 'adjectives',
    title: t('dashboard.sections.adjectives.title'),
    description: t('dashboard.sections.adjectives.description'),
    path: '/practice/adjetives-meanings',
    items: toSortedChartItems(
      Array.from(adjectivesHistory.value.values()) as HistoryAdjective[],
      item => item.adjective
    )
  },
  {
    id: 'articles',
    title: t('dashboard.sections.articles.title'),
    description: t('dashboard.sections.articles.description'),
    path: '/practice/articles',
    items: toSortedChartItems(
      Array.from(articlesHistory.value.values()) as HistoryArticle[],
      item => `${item.article} ${item.value}`
    )
  }
])

const allItems = computed<ChartBarItem[]>(() =>
  sections.value.flatMap(section => section.items)
)

const totalWords = computed(() =>
  allItems.value.length
)

const totalAttempts = computed(() =>
  allItems.value.reduce((total, item) => total + item.totalAttempts, 0)
)

const totalSuccesses = computed(() =>
  allItems.value.reduce((total, item) => total + item.successAttempts, 0)
)

const masteredWords = computed(() =>
  allItems.value.filter(item =>
    item.successAttempts > 0 && item.failedAttempts === 0
  ).length
)

const successRate = computed(() => {
  if (!totalAttempts.value) return 0

  return Math.round((totalSuccesses.value / totalAttempts.value) * 100)
})

const mostFailedItems = computed(() =>
  [...allItems.value]
    .filter(item => item.failedAttempts > 0)
    .sort((a, b) => b.failedAttempts - a.failedAttempts)
    .slice(0, 10)
)

const summaryCards = computed(() => [
  {
    label: t('dashboard.summary.words'),
    value: totalWords.value,
    description: ''
  },
  {
    label: t('dashboard.summary.attempts'),
    value: totalAttempts.value,
    description: ''
  },
  {
    label: t('dashboard.summary.successRate'),
    value: `${successRate.value}%`,
    description: t('dashboard.summaryDescriptions.successRate')
  },
  {
    label: t('dashboard.summary.masteredWords'),
    value: masteredWords.value,
    description: t('dashboard.summaryDescriptions.masteredWords')
  }
])

const sectionPendingClear = ref<DashboardSection | null>(null)

const openClearHistoryDialog = (section: DashboardSection) => {
  sectionPendingClear.value = section
}

const closeClearHistoryDialog = () => {
  sectionPendingClear.value = null
}

const confirmClearHistory = () => {
  if (!sectionPendingClear.value) return

  const resetHistoryBySectionId: Record<DashboardSectionId, () => void> = {
    verbs: verbsStore.resetVerbsHistory,
    nouns: nounsStore.resetNounsHistory,
    adjectives: adjectivesStore.resetAdjectivesHistory,
    articles: articlesStore.resetArticlesHistory
  }

  resetHistoryBySectionId[sectionPendingClear.value.id]()
  closeClearHistoryDialog()
}
</script>

<template>
  <main
    class="space-y-8"
  >
    <!-- EYEBROW AND TITLE -->
    <section
      class="space-y-3"
    >
      <p
        class="text-sm uppercase tracking-[0.3em]"
      >
        {{ t('dashboard.eyebrow') }}
      </p>
      <div
        class="space-y-2"
      >
        <h1
          class="text-3xl font-bold"
        >
          {{ t('dashboard.title') }}
        </h1>
        <p
          class="max-w-2xl text-sm text-gray-300"
        >
          {{ t('dashboard.description') }}
        </p>
      </div>
    </section>

    <!-- SUMMARY CARDS -->
    <section
      class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      <article
        v-for="card in summaryCards"
        :key="card.label"
        class="rounded-xl border border-background/10 bg-background/5 px-4 pb-4 pt-2"
      >
        <div
          class="flex min-h-6 items-center justify-between gap-3"
        >
          <p
            class="text-xs uppercase leading-none tracking-[0.2em]"
          >
            {{ card.label }}
          </p>
          <div
            v-if="card.description"
            class="group relative"
          >
            <button
              type="button"
              class="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 focus:bg-foreground/10"
              :aria-label="card.description"
            >
              <Info
                class="size-4"
                aria-hidden="true"
              />
            </button>
            <div
              role="tooltip"
              class="pointer-events-none absolute right-0 top-7 z-10 hidden w-56 rounded-md border border-foreground/10 bg-background p-3 text-xs normal-case tracking-normal text-foreground shadow-lg group-focus-within:block group-hover:block"
            >
              {{ card.description }}
            </div>
          </div>
          <span
            v-else
            class="size-6 flex-none"
            aria-hidden="true"
          />
        </div>
        <p
          class="mt-4 text-3xl font-bold leading-none"
        >
          {{ card.value }}
        </p>
      </article>
    </section>

    <!-- MOST FAILED ITEMS -->
    <section
      v-if="mostFailedItems.length"
      class="rounded-xl border border-red-200 p-4"
    >
      <h2
        class="font-bold"
      >
        {{ t('dashboard.mostFailed.title') }}
      </h2>
      <div
        class="mt-3 flex flex-wrap gap-2"
      >
        <span
          v-for="item in mostFailedItems"
          :key="item.id"
          class="rounded-full border border-gray-600 px-3 py-1 text-xs"
        >
          {{ item.label }}
        </span>
      </div>
    </section>

    <!-- SECTIONS -->
    <section
      class="flex flex-col gap-4"
    >
      <article
        v-for="section in sections"
        :key="section.id"
        class="rounded-xl border border-background/10 bg-background/3 p-4"
      >
        <div
          class="mb-4 flex items-start justify-between gap-4"
        >
          <div>
            <div
              class="flex items-center gap-2"
            >
              <h2
                class="font-bold"
              >
                {{ section.title }}
              </h2>
              <button
                :aria-label="t('dashboard.practiceLink', { section: section.title })"
                class="-mt-1 rounded-md p-1 transition-colors hover:bg-foreground/10"
                @click="router.push(section.path)"
              >
                <ExternalLink
                  class="size-4"
                  aria-hidden="true"
                />
              </button>
              <button
                :aria-label="t('dashboard.clearHistory.open', { section: section.title })"
                class="-mt-1 rounded-md p-1 transition-colors hover:bg-red-200/20 disabled:cursor-not-allowed disabled:opacity-40"
                :disabled="!section.items.length"
                @click="openClearHistoryDialog(section)"
              >
                <Trash2
                  class="size-4"
                  aria-hidden="true"
                />
              </button>
            </div>
            <p
              class="text-sm text-gray-300"
            >
              {{ section.description }}
            </p>
          </div>
          <span
            class="rounded-full bg-background px-3 py-1 text-xs text-foreground"
          >
            {{ section.items.length }}
          </span>
        </div>

        <BaseChart
          v-if="section.items.length"
          :data="section.items"
        />

        <p
          v-else
          class="rounded-lg border border-dashed border-foreground/20 p-6 text-center text-sm text-gray-500"
        >
          {{ t('dashboard.empty') }}
        </p>
      </article>
    </section>

    <Teleport
      to="body"
    >
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="sectionPendingClear"
          class="fixed inset-0 z-50 flex items-center justify-center bg-background/10 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          :aria-label="t('dashboard.clearHistory.title')"
        >
          <div
            class="w-full max-w-md rounded-xl border border-foreground/15 bg-foreground p-5 shadow-xl backdrop-blur-xl"
          >
            <h2
              class="text-lg font-bold"
            >
              {{ t('dashboard.clearHistory.title') }}
            </h2>
            <p
              class="mt-2 text-sm"
            >
              {{ t('dashboard.clearHistory.description', { section: sectionPendingClear.title }) }}
            </p>
            <div
              class="mt-5 flex justify-end gap-3"
            >
              <button
                class="btn px-4 py-2"
                type="button"
                @click="closeClearHistoryDialog"
              >
                {{ t('dashboard.clearHistory.cancel') }}
              </button>
              <button
                class="rounded-md bg-red-200 px-4 py-2 text-sm text-foreground transition-colors hover:bg-red-300"
                type="button"
                @click="confirmClearHistory"
              >
                {{ t('dashboard.clearHistory.confirm') }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>
