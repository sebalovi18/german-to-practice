<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { List } from '@lucide/vue'

import type { Component } from 'vue'

const router = useRouter()
const {
  t
} = useI18n()

type ColumnItem = {
  label: string
  icon: Component
  path: string
}

const leftColumn = computed<ColumnItem[]>(() => [
  {
    label: t('practice.labels.articles'),
    icon: List,
    path: '/practice/articles'
  },
  {
    label: t('practice.labels.adjectivesMeanings'),
    icon: List,
    path: '/practice/adjetives-meanings'
  }
])

const rightColumn = computed<ColumnItem[]>(() => [
  {
    label: t('practice.labels.nounsMeanings'),
    icon: List,
    path: '/practice/nouns-meanings'
  },
  {
    label: t('practice.labels.verbsMeanings'),
    icon: List,
    path: '/practice/verbs-meanings'
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
          <component
            :is="item.icon"
            :key="item.path"
            class="size-4"
            aria-hidden="true"
          />
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
          <component
            :is="item.icon"
            :key="item.path"
            class="size-4"
            aria-hidden="true"
          />
          <span>
            {{ item.label }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
