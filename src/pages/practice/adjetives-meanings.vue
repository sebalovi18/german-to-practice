<script setup lang="ts">
import { ref } from 'vue'

import { useAdjectives } from '@/composables/useAdjectives'
import { useAudios } from '@/composables/useAudios'

import { useAdjectivesStore } from '@/store/useAdjectivesStore'

import BaseAdjetiveExercise from '@/components/BaseAdjetiveExercise.vue'

import type { GermanAdjective } from '@/interfaces/GermanAdjetives'

const adjectivesStore = useAdjectivesStore()

const {
  addAdjectiveToHistory
} = adjectivesStore

const {
  getRandomAdjectiveBasedOnHistory,
  getRandomAdjectives
} = useAdjectives()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

// ----------------------------------------
// RANDOM ADJECTIVES
// ----------------------------------------
const answerAdjective = ref<GermanAdjective>(getRandomAdjectiveBasedOnHistory())
const randomAdjectives = ref<GermanAdjective[]>(getRandomAdjectives({
  excludeAdjectives: [answerAdjective.value]
}))

// ERROR COUNT
const errorCount = ref<number>(0)
const onIncorrect = (adjective: GermanAdjective) => {
  addAdjectiveToHistory(adjective, false)

  errorCount.value++

  playIncorrectSound()
}

// CORRECT COUNT
const correctCount = ref<number>(0)
const onCorrect = (adjective: GermanAdjective) => {
  addAdjectiveToHistory(adjective, true)

  correctCount.value++

  playCorrectSound()
}

const handleNext = () => {
  answerAdjective.value = getRandomAdjectiveBasedOnHistory()
  randomAdjectives.value = getRandomAdjectives({
    excludeAdjectives: [answerAdjective.value]
  })
}
</script>
<template>
  <div
    v-auto-animate
    class="space-y-4"
  >
    <BaseAdjetiveExercise
      :key="answerAdjective.id"
      :answer="answerAdjective"
      :options="randomAdjectives"
      @correct="onCorrect"
      @incorrect="onIncorrect"
      @next="handleNext"
    />
  </div>
</template>
