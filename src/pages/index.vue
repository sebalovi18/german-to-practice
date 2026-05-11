<script setup lang="ts">
import { useRouter } from 'vue-router'

import { Dumbbell, List } from '@lucide/vue'

const router = useRouter()
</script>
<template>
  <div
    class="flex gap-4 items-center justify-center h-full"
  >
    <button
      class="btn h-32 w-32 flex items-center justify-center gap-2"
      @click="router.push('/nouns')"
    >
      <List
        class="size-4"
        aria-hidden="true"
      />
      <span>
        Nouns
      </span>
    </button>

    <button
      class="btn h-32 w-32 flex items-center justify-center gap-2"
      @click="router.push('/practice')"
    >
      <Dumbbell
        class="size-4"
        aria-hidden="true"
      />
      <span>
        Practice
      </span>
    </button>
  </div>
</template>
