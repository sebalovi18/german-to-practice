<script setup lang="ts">
import { ref } from 'vue'

import BaseArticleExerciseCard from '@/components/BaseArticleExerciseCard.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

import { nouns } from '@/data/nouns'

const getRandomNouns = (n?: number): Array<GermanNoun> => {
  const randomNouns = nouns.sort(() => Math.random() - 0.5)

  if (!n) {
    return randomNouns
  }

  return randomNouns.slice(0, n)
}

const randomNouns = ref<Array<GermanNoun>>(getRandomNouns())
const randomNounIndex = ref<number>(0)

const handleNextEvent = () => {
  randomNounIndex.value++
}
</script>

<template>
  <div
    class="space-y-4"
  >
    <div
      class="flex gap-4 items-center justify-center"
    >
      <BaseArticleExerciseCard
        :key="randomNouns[randomNounIndex]!.id"
        :noun="randomNouns[randomNounIndex]!"
        @next="handleNextEvent"
      />
    </div>
  </div>
</template>
