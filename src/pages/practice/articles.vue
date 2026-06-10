<script setup lang="ts">
import { ref } from 'vue'

import { useAudios } from '@/composables/useAudios'
import { useNouns } from '@/composables/useNouns'

import { useArticlesStore } from '@/store/useArticlesStore'

import BaseArticleExercise from '@/components/BaseArticleExercise.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

const articlesStore = useArticlesStore()

const {
  addArticleToHistory
} = articlesStore

const {
  getRandomNounBasedOnHistory
} = useNouns()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

// ----------------------------------------
// RANDOM NOUN
// ----------------------------------------
const answerNoun = ref<GermanNoun>(getRandomNounBasedOnHistory())

// ATTEMPTS
const attempts = ref<number>(2)

// ERROR COUNT
const errorCount = ref<number>(0)

// CORRECT COUNT
const correctCount = ref<number>(0)

// IS FINISHED
// EVENT HANDLERS
const handleIncorrectEvent = (noun: GermanNoun) => {
  addArticleToHistory(noun, false)

  playIncorrectSound()

  errorCount.value++

  attempts.value--
}

const handleCorrectEvent = (noun: GermanNoun) => {
  addArticleToHistory(noun, true)

  playCorrectSound()

  attempts.value = 2

  correctCount.value++
}

const handleNextEvent = () => {
  attempts.value = 2

  answerNoun.value = getRandomNounBasedOnHistory()
}
</script>

<template>
  <div
    v-auto-animate
    class="space-y-4 mx-auto max-w-xl"
  >
    <div
      class="flex gap-4 items-center justify-center"
    >
      <BaseArticleExercise
        :attempts="attempts"
        :key="answerNoun.id"
        :noun="answerNoun"
        @incorrect="handleIncorrectEvent"
        @correct="handleCorrectEvent"
        @next="handleNextEvent"
      />
    </div>
  </div>
</template>
