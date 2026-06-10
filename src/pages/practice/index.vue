<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const {
  t
} = useI18n()

type ColumnItem = {
  label: string
  path: string
}

const leftColumn = computed<ColumnItem[]>(() => [
  {
    label: t('practice.labels.articles'),
    path: '/practice/articles'
  },
  {
    label: t('practice.labels.adjectivesMeanings'),
    path: '/practice/adjetives-meanings'
  }
])

const rightColumn = computed<ColumnItem[]>(() => [
  {
    label: t('practice.labels.nounsMeanings'),
    path: '/practice/nouns-meanings'
  },
  {
    label: t('practice.labels.verbsMeanings'),
    path: '/practice/verbs-meanings'
  },
  {
    label: t('practice.labels.dashboard'),
    path: '/dashboard'
  }
])
</script>
<template>
  <div>
    <div
      class="grid grid-cols-2 gap-4 items-center justify-center"
    >
      <!-- LEFT COLUMN -->
      <div
        class="flex flex-col gap-4 items-end justify-center"
      >
        <button
          v-for="item in leftColumn"
          :key="item.path"
          class="btn min-h-32 min-w-32 flex items-center justify-center gap-2 w-full"
          @click="router.push(item.path)"
        >
          <span>
            {{ item.label }}
          </span>
        </button>
      </div>

      <!-- RIGHT COLUMN -->
      <div
        class="flex flex-col gap-4 items-start justify-center"
      >
        <button
          v-for="item in rightColumn"
          :key="item.path"
          class="btn min-h-32 min-w-32 flex items-center justify-center gap-2 w-full"
          @click="router.push(item.path)"
        >
          <span>
            {{ item.label }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
