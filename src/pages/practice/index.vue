<script setup lang="ts">
import { useRouter } from 'vue-router'

import { List } from '@lucide/vue'

import type { Component } from 'vue'

const router = useRouter()

type ColumnItem = {
  label: string
  icon: Component
  path: string
}

const leftColumn: ColumnItem[] = [
  {
    label: 'Articles',
    icon: List,
    path: '/practice/articles'
  },
  {
    label: 'Adjetives meanings',
    icon: List,
    path: '/practice/adjetives-meanings'
  }
]

const rightColumn: ColumnItem[] = [
  {
    label: 'Nouns meanings',
    icon: List,
    path: '/practice/nouns-meanings'
  },
  {
    label: 'Verbs meanings',
    icon: List,
    path: '/practice/verbs-meanings'
  }
]
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
