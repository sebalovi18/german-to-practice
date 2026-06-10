<script setup lang="ts">
import { ref } from 'vue'

import { useAudios } from '@/composables/useAudios'
import { useNouns } from '@/composables/useNouns'

import { useNounsStore } from '@/store/useNounsStore'

import BaseNounMeaningExercise from '@/components/BaseNounMeaningExercise.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

const nounsStore = useNounsStore()

const {
  addNounToHistory
} = nounsStore

const {
  getRandomNounBasedOnHistory,
  getRandomNouns
} = useNouns()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

// ----------------------------------------
// RANDOM NOUNS
// ----------------------------------------
const answerNoun = ref<GermanNoun>(getRandomNounBasedOnHistory())
const randomNouns = ref<GermanNoun[]>(getRandomNouns({
  excludeNouns: [answerNoun.value]
}))

// ERROR COUNT
const errorCount = ref<number>(0)
const onIncorrect = (noun: GermanNoun) => {
  addNounToHistory(noun, false)

  errorCount.value++

  playIncorrectSound()
}

// CORRECT COUNT
const correctCount = ref<number>(0)
const onCorrect = (noun: GermanNoun) => {
  addNounToHistory(noun, true)

  correctCount.value++

  playCorrectSound()
}

const handleNext = () => {
  answerNoun.value = getRandomNounBasedOnHistory()
  randomNouns.value = getRandomNouns({
    excludeNouns: [answerNoun.value]
  })
}
</script>
<template>
  <div
    v-auto-animate
    class="space-y-4 mx-auto max-w-xl"
  >
    <BaseNounMeaningExercise
      :key="answerNoun.id"
      :answer="answerNoun"
      :options="randomNouns"
      @correct="onCorrect"
      @incorrect="onIncorrect"
      @next="handleNext"
    />
  </div>
</template>
