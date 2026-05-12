<script setup lang="ts">
import { ref } from 'vue'

import { useAudios } from '@/composables/useAudios'
import { useNouns } from '@/composables/useNouns'

import BaseNounMeaningExerciseCard from '@/components/BaseNounMeaningExerciseCard.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

const {
  getRandomNouns
} = useNouns()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

const randomNouns = ref<GermanNoun[]>(getRandomNouns(50))

const currentNounIndex = ref<number>(0)

const currentNoun = ref<GermanNoun>(randomNouns.value[currentNounIndex.value]!)

// ERROR COUNT
const errorCount = ref<number>(0)
const onIncorrect = () => {
  errorCount.value++
  playIncorrectSound()
}

// CORRECT COUNT
const correctCount = ref<number>(0)
const onCorrect = () => {
  correctCount.value++
  playCorrectSound()
}
</script>
<template>
  <div
    class="space-y-4 mx-auto max-w-xl"
  >
    <BaseNounMeaningExerciseCard
      :noun="currentNoun"
      @correct="onCorrect"
      @incorrect="onIncorrect"
    />

    <!-- STATISTICS -->
    <div
      class="flex gap-2 sm:flex-row items-center justify-between sm:justify-center text-[10px] sm:text-xs"
    >
      <p> Errors: {{ errorCount }} </p>
      <p> Corrects: {{ correctCount }} </p>
    </div>
  </div>
</template>
