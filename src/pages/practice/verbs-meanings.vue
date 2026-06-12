<script setup lang="ts">
import { ref } from 'vue'

import { useAudios } from '@/composables/useAudios'
import { useVerbs } from '@/composables/useVerbs'

import { useVerbsStore } from '@/store/useVerbsStore'

import BaseVerbExercise from '@/components/BaseVerbExercise.vue'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

const verbsStore = useVerbsStore()

const {
  addVerbToHistory
} = verbsStore

const {
  getRandomVerbBasedOnHistory,
  getRandomVerbs
} = useVerbs()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

// ----------------------------------------
// RANDOM VERBS
// ----------------------------------------
const answerVerb = ref<GermanVerb>(getRandomVerbBasedOnHistory())
const randomVerbs = ref<GermanVerb[]>(getRandomVerbs({
  excludeVerbs: [answerVerb.value]
}))

// ERROR COUNT
const errorCount = ref<number>(0)
const onIncorrect = (verb: GermanVerb) => {
  addVerbToHistory(verb, false)

  errorCount.value++

  playIncorrectSound()
}

// CORRECT COUNT
const correctCount = ref<number>(0)
const onCorrect = (verb: GermanVerb) => {
  addVerbToHistory(verb, true)

  correctCount.value++

  playCorrectSound()
}

const handleNext = () => {
  answerVerb.value = getRandomVerbBasedOnHistory()
  randomVerbs.value = getRandomVerbs({
    excludeVerbs: [answerVerb.value]
  })
}
</script>

<template>
  <div
    v-auto-animate
    class="space-y-4"
  >
    <BaseVerbExercise
      :key="answerVerb.id"
      :answer="answerVerb"
      :options="randomVerbs"
      @correct="onCorrect"
      @incorrect="onIncorrect"
      @next="handleNext"
    />
  </div>
</template>
