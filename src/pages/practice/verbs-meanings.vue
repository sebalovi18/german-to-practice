<script setup lang="ts">
import { ref } from 'vue'

import { useAudios } from '@/composables/useAudios'
import { useVerbs } from '@/composables/useVerbs'

import BaseVerbExercise from '@/components/BaseVerbExercise.vue'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

const {
  getRandomVerbs
} = useVerbs()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

const randomVerbs = ref<GermanVerb[]>(getRandomVerbs(50))

const currentVerbIndex = ref<number>(0)

const currentVerb = ref<GermanVerb>(randomVerbs.value[currentVerbIndex.value]!)

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
    <BaseVerbExercise
      :verb="currentVerb"
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
