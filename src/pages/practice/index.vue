<script setup lang="ts">
import { useRouter } from 'vue-router'

import { Dumbbell } from '@lucide/vue'

const router = useRouter()
</script>
<template>
  <div
    class="flex gap-4 items-center justify-center h-full"
  >
    <button
      class="btn h-32 w-32 flex items-center justify-center gap-2"
      @click="router.push('/practice/articles')"
    >
      <Dumbbell
        class="size-4"
        aria-hidden="true"
      />
      <span>
        Articles
      </span>
    </button>
  </div>
</template>
