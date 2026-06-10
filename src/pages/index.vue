<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { ChartNoAxesColumn, Dumbbell, List } from '@lucide/vue'

const router = useRouter()
const {
  t
} = useI18n()

const leftColumn = computed(() => [
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
    label: t('home.navigation.practice'),
    icon: Dumbbell,
    path: '/practice'
  }
])

const rightColumn = computed(() => [
  {
    label: t('home.navigation.nouns'),
    icon: List,
    path: '/nouns'
  },
  {
    label: t('home.navigation.adjectives'),
    icon: List,
    path: '/adjetives'
  }
])
</script>
<template>
  <div
    class="space-y-4"
  >
    <p>
      🇩🇪 German to Practice
      <br>
      <span
        class="text-sm text-gray-500"
      >
        {{ t('home.description') }}
      </span>
    </p>

    <div
      class="grid grid-cols-2 gap-4 items-start justify-start text-sm sm:text-base"
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
            class="size-4 flex-none"
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
            class="size-4 flex-none"
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
