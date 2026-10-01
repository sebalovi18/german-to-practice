<script setup lang="ts">
import { computed, ref } from 'vue'

import { nouns } from '@/data/learningCatalogs'

import { useAudios } from '@/composables/useAudios'
import { useNouns } from '@/composables/useNouns'

import { useNounsStore } from '@/store/useNounsStore'

import BaseNounMeaningExercise from '@/components/BaseNounMeaningExercise.vue'
import BaseCategorySelector from '@/components/BaseCategorySelector.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'
import type { Category } from '@/data/categories'

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

const selectedCategories = ref<Category[]>([])
const isPracticeStarted = ref(false)
const answerNoun = ref<GermanNoun | null>(null)
const randomNouns = ref<GermanNoun[]>([])

const practiceNouns = computed(() => {
  const selected = new Set(selectedCategories.value)

  return nouns.filter(noun =>
    noun.categories.some(category => selected.has(category))
  )
})

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
  answerNoun.value = getRandomNounBasedOnHistory(practiceNouns.value)
  randomNouns.value = getRandomNouns({
    n: Math.min(5, practiceNouns.value.length - 1),
    excludeNouns: [answerNoun.value],
    sourceNouns: practiceNouns.value
  })
}

const startPractice = (categories: Category[]) => {
  selectedCategories.value = categories
  isPracticeStarted.value = true
  handleNext()
}

const changeCategories = () => {
  isPracticeStarted.value = false
  answerNoun.value = null
  randomNouns.value = []
}
</script>
<template>
  <div
    v-auto-animate
    class="space-y-4"
  >
    <BaseCategorySelector
      v-if="!isPracticeStarted"
      :items="nouns"
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

      <BaseNounMeaningExercise
        v-if="answerNoun"
        :key="answerNoun.id"
        :answer="answerNoun"
        :options="randomNouns"
        @correct="onCorrect"
        @incorrect="onIncorrect"
        @next="handleNext"
      />
    </template>
  </div>
</template>
