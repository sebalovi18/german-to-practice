<script setup lang="ts">
import { ref } from 'vue'

import { useAudios } from '@/composables/useAudios'
import { useNouns } from '@/composables/useNouns'

import BaseArticleExercise from '@/components/BaseArticleExercise.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

// NOUNS
const {
  getRandomNouns
} = useNouns()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

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
  playIncorrectSound()

  errorCount.value++

  attempts.value--
}

const handleCorrectEvent = () => {
  playCorrectSound()

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
    class="space-y-4 mx-auto max-w-xl"
  >
    <div
      class="flex gap-4 items-center justify-center"
    >
      <BaseArticleExercise
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
