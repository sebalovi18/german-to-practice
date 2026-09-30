<script setup lang="ts">
import { computed, ref } from 'vue'

import { adjectives } from '@/data/adjectives'

import { useAdjectives } from '@/composables/useAdjectives'
import { useAudios } from '@/composables/useAudios'

import { useAdjectivesStore } from '@/store/useAdjectivesStore'

import BaseAdjectiveExercise from '@/components/BaseAdjectiveExercise.vue'
import BaseCategorySelector from '@/components/BaseCategorySelector.vue'

import type { GermanAdjective } from '@/interfaces/GermanAdjectives'
import type { Category } from '@/data/categories'

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

const selectedCategories = ref<Category[]>([])
const isPracticeStarted = ref(false)
const answerAdjective = ref<GermanAdjective | null>(null)
const randomAdjectives = ref<GermanAdjective[]>([])

const practiceAdjectives = computed(() => {
  const selected = new Set(selectedCategories.value)

  return adjectives.filter(adjective =>
    adjective.categories.some(category => selected.has(category))
  )
})

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
  answerAdjective.value = getRandomAdjectiveBasedOnHistory(practiceAdjectives.value)
  randomAdjectives.value = getRandomAdjectives({
    n: Math.min(5, practiceAdjectives.value.length - 1),
    excludeAdjectives: [answerAdjective.value],
    sourceAdjectives: practiceAdjectives.value
  })
}

const startPractice = (categories: Category[]) => {
  selectedCategories.value = categories
  isPracticeStarted.value = true
  handleNext()
}

const changeCategories = () => {
  isPracticeStarted.value = false
  answerAdjective.value = null
  randomAdjectives.value = []
}
</script>
<template>
  <div
    v-auto-animate
    class="space-y-4"
  >
    <BaseCategorySelector
      v-if="!isPracticeStarted"
      :items="adjectives"
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

      <BaseAdjectiveExercise
        v-if="answerAdjective"
        :key="answerAdjective.id"
        :answer="answerAdjective"
        :options="randomAdjectives"
        @correct="onCorrect"
        @incorrect="onIncorrect"
        @next="handleNext"
      />
    </template>
  </div>
</template>
