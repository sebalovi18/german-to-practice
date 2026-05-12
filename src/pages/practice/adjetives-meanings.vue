<script setup lang="ts">
import { ref } from 'vue'

import { useAdjectives } from '@/composables/useAdjectives'
import { useAudios } from '@/composables/useAudios'

import BaseAdjetiveExercise from '@/components/BaseAdjetiveExercise.vue'

import type { GermanAdjective } from '@/interfaces/GermanAdjetives'

const {
  getRandomAdjectives
} = useAdjectives()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

const randomAdjectives = ref<GermanAdjective[]>(getRandomAdjectives(50))

const currentAdjectiveIndex = ref<number>(0)

const currentAdjective = ref<GermanAdjective>(randomAdjectives.value[currentAdjectiveIndex.value]!)

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
    <BaseAdjetiveExercise
      :adjective="currentAdjective"
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
