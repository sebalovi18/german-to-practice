<script setup lang="ts">
import { computed, ref } from 'vue'

import { nouns } from '@/data/nouns'

import { useAudios } from '@/composables/useAudios'
import { useNouns } from '@/composables/useNouns'

import { useArticlesStore } from '@/store/useArticlesStore'

import BaseArticleExercise from '@/components/BaseArticleExercise.vue'
import BaseCategorySelector from '@/components/BaseCategorySelector.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'
import type { Category } from '@/data/categories'

const articlesStore = useArticlesStore()

const {
  addArticleToHistory
} = articlesStore

const {
  getRandomNounBasedOnHistory
} = useNouns()

const {
  playCorrectSound,
  playIncorrectSound
} = useAudios()

const selectedCategories = ref<Category[]>([])
const isPracticeStarted = ref(false)
const answerNoun = ref<GermanNoun | null>(null)

const practiceNouns = computed(() => {
  const selected = new Set(selectedCategories.value)

  return nouns.filter(noun =>
    noun.categories.some(category => selected.has(category))
  )
})

// ATTEMPTS
const attempts = ref<number>(2)

// ERROR COUNT
const errorCount = ref<number>(0)

// CORRECT COUNT
const correctCount = ref<number>(0)

// IS FINISHED
// EVENT HANDLERS
const handleIncorrectEvent = (noun: GermanNoun) => {
  addArticleToHistory(noun, false)

  playIncorrectSound()

  errorCount.value++

  attempts.value--
}

const handleCorrectEvent = (noun: GermanNoun) => {
  addArticleToHistory(noun, true)

  playCorrectSound()

  attempts.value = 2

  correctCount.value++
}

const handleNextEvent = () => {
  attempts.value = 2

  answerNoun.value = getRandomNounBasedOnHistory(practiceNouns.value)
}

const startPractice = (categories: Category[]) => {
  selectedCategories.value = categories
  isPracticeStarted.value = true
  handleNextEvent()
}

const changeCategories = () => {
  isPracticeStarted.value = false
  answerNoun.value = null
  attempts.value = 2
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

      <div
        class="flex gap-4 items-center justify-center"
      >
        <BaseArticleExercise
          v-if="answerNoun"
          :attempts="attempts"
          :key="answerNoun.id"
          :noun="answerNoun"
          @incorrect="handleIncorrectEvent"
          @correct="handleCorrectEvent"
          @next="handleNextEvent"
        />
      </div>
    </template>
  </div>
</template>
