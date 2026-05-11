<script setup lang="ts">
import { useRouter } from 'vue-router'

import { Dumbbell, List } from '@lucide/vue'

const router = useRouter()

const leftColumn = [
  {
    label: 'Nouns',
    icon: List,
    path: '/nouns'
  },
  {
    label: 'Verbs',
    icon: List,
    path: '/verbs'
  }
]

const rightColumn = [
  {
    label: 'Adjectives',
    icon: List,
    path: '/adjetives'
  },
  {
    label: 'Practice',
    icon: Dumbbell,
    path: '/practice'
  }
]
</script>
<template>
  <div
    class="mx-auto max-w-xl space-y-4"
  >
    <p>
      🇩🇪 German to Practice
      <br>
      <span
        class="text-sm text-gray-500"
      >
        A small Vue app for studying German vocabulary through searchable reference lists and focused exercises.
      </span>
    </p>

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
