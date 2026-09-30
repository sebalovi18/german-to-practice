<script setup lang="ts">
import { computed, ref } from 'vue'

import { verbs } from '@/data/verbs'

import { useAudios } from '@/composables/useAudios'
import { useVerbs } from '@/composables/useVerbs'

import { useVerbsStore } from '@/store/useVerbsStore'

import BaseVerbExercise from '@/components/BaseVerbExercise.vue'
import BaseCategorySelector from '@/components/BaseCategorySelector.vue'

import type { GermanVerb } from '@/interfaces/GermanVerbs'
import type { Category } from '@/data/categories'

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

const selectedCategories = ref<Category[]>([])
const isPracticeStarted = ref(false)
const answerVerb = ref<GermanVerb | null>(null)
const randomVerbs = ref<GermanVerb[]>([])

const practiceVerbs = computed(() => {
  const selected = new Set(selectedCategories.value)

  return verbs.filter(verb =>
    verb.categories.some(category => selected.has(category))
  )
})

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
  answerVerb.value = getRandomVerbBasedOnHistory(practiceVerbs.value)
  randomVerbs.value = getRandomVerbs({
    n: Math.min(5, practiceVerbs.value.length - 1),
    excludeVerbs: [answerVerb.value],
    sourceVerbs: practiceVerbs.value
  })
}

const startPractice = (categories: Category[]) => {
  selectedCategories.value = categories
  isPracticeStarted.value = true
  handleNext()
}

const changeCategories = () => {
  isPracticeStarted.value = false
  answerVerb.value = null
  randomVerbs.value = []
}
</script>

<template>
  <div
    v-auto-animate
    class="space-y-4"
  >
    <BaseCategorySelector
      v-if="!isPracticeStarted"
      :items="verbs"
      @start="startPractice"
    />

    <template
      v-else
    >
      <button
        type="button"
        class="btn"
        @click="changeCategories"
      >
        {{ $t('practice.categories.change') }}
      </button>

      <BaseVerbExercise
        v-if="answerVerb"
        :key="answerVerb.id"
        :answer="answerVerb"
        :options="randomVerbs"
        @correct="onCorrect"
        @incorrect="onIncorrect"
        @next="handleNext"
      />
    </template>
  </div>
</template>
