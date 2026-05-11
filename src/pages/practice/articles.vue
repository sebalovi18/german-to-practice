<script setup lang="ts">
import { ref } from 'vue'

import BaseArticleExerciseCard from '@/components/BaseArticleExerciseCard.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

import { nouns } from '@/data/nouns'

// NOUNS
const getRandomNouns = (n?: number): Array<GermanNoun> => {
  const randomNouns = nouns.sort(() => Math.random() - 0.5)

  if (!n) {
    return randomNouns
  }

  return randomNouns.slice(0, n)
}

const randomNouns = ref<Array<GermanNoun>>(getRandomNouns())
const randomNounIndex = ref<number>(0)

// ATTEMPTS
const attempts = ref<number>(2)

// ERROR COUNT
const errorCount = ref<number>(0)

// CORRECT COUNT
const correctCount = ref<number>(0)

// IS FINISHED
const isFinished = ref<boolean>(false)

// EVENT HANDLERS
const handleIncorrectEvent = () => {
  errorCount.value++

  attempts.value--
}

const handleCorrectEvent = () => {
  attempts.value = 2

  correctCount.value++
}

const handleNextEvent = () => {
  attempts.value = 2

  if (randomNounIndex.value === randomNouns.value.length - 1) {
    isFinished.value = true

    return
  }

  randomNounIndex.value++

}
</script>

<template>
  <div
    class="space-y-4 py-4"
  >
    <div
      class="flex gap-2 sm:flex-row items-center justify-between sm:justify-center text-[10px] sm:text-xs"
    >
      <p> Errors: {{ errorCount }} </p>
      <p> Corrects: {{ correctCount }} </p>
      <p> Noun: {{ randomNounIndex + 1 }} / {{ randomNouns.length }} </p>
      <p> Attempts: {{ attempts }} </p>
    </div>
    <div
      class="flex gap-4 items-center justify-center"
    >
      <BaseArticleExerciseCard
        :attempts="attempts"
        :key="randomNouns[randomNounIndex]!.id"
        :noun="randomNouns[randomNounIndex]!"
        @incorrect="handleIncorrectEvent"
        @correct="handleCorrectEvent"
        @next="handleNextEvent"
      />
    </div>
  </div>
</template>
