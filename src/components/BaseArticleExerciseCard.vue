<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { GermanArticle } from '@/interfaces/GermanArticle'
import type { GermanNoun } from '@/interfaces/GermanNoun'

import BaseOptionCard from '@/components/BaseOptionCard.vue'

interface Props {
  noun: GermanNoun
}

const props = defineProps<Props>()

interface Emits {
  (event: 'correct'): void
  (event: 'incorrect'): void
  (event: 'next'): void
}

const emit = defineEmits<Emits>()

const {
  locale
} = useI18n()

// GERMAN ARTICLES
const germanArticles = ['der', 'die', 'das'] as GermanArticle[]
const selectedArticle = ref<GermanArticle | null>(null)
const incorrectAnswers = ref<Array<GermanArticle>>([])

// ATTEMPTS
const attemps = ref(2)

// HINT VISIBLE
const isHintVisible = ref(false)

// FINISH EXERCISE
const isFinished = ref(false)
const finishExercise = () => {
  // GET INCORRECT ANSWERS
  incorrectAnswers.value = germanArticles.filter(article =>
    article !== props.noun.article
  )

  // SELECTED CORRECT ANSWER
  selectedArticle.value = props.noun.article

  // FINISH EXERCISE
  isFinished.value = true
}

// HANDLE CLICK ON ARTICLE OPTION
const handleClick = (article: GermanArticle) => {
  // IF FINISHED, DO NOTHING
  if (isFinished.value) return

  // SELECTED ARTICLE
  selectedArticle.value = article

  // INCORRECT ANSWER - IF ATTEMPS ARE 0, FINISH THE EXERCISE
  if (article !== props.noun.article) {
    // ADD INCORRECT ANSWER TO LIST
    incorrectAnswers.value.push(article)

    // IF ATTEMPTS ARE 2, DECREASE ATTEMPTS AND EMIT INCORRECT EVENT
    if (attemps.value === 2) {
      attemps.value--

      emit('incorrect')

      return
    }

    // IF ATTEMPTS ARE 1, FINISH THE EXERCISE AND EMIT INCORRECT EVENT
    if (attemps.value === 1) {
      attemps.value--

      finishExercise()

      emit('incorrect')

      return
    }
  }

  // CORRECT ANSWER
  isFinished.value = true

  emit('correct')
}
</script>
<template>
  <div
    v-auto-animate
    class="flex flex-col gap-4 items-center justify-center"
  >
    <p>
      Attempts: {{ attemps }}
    </p>
    <!-- ARTICLE SELECTION -->
    <div
      class="flex gap-4 items-center justify-center"
    >
      <BaseOptionCard
        v-for="article in germanArticles"
        :is-incorrect="incorrectAnswers.includes(article)"
        :is-correct="article === props.noun.article && isFinished"
        :key="article"
        :option="article"
        @click="handleClick(article)"
      />
    </div>

    <!-- COMPLETE WORD DISPLAY -->
    <div
      v-auto-animate
      class="w-full flex items-center justify-center gap-2 text-center text-xl capitalize bg-foreground dark:bg-background dark:text-foreground text-background p-4 rounded-md"
    >
      <span
        v-if="isFinished"
      >
        {{ props.noun.article }}
      </span>
      <span>
        {{ props.noun.singular }}
      </span>
    </div>

    <!-- TRANSLATION DISPLAY -->
    <div
      v-if="isHintVisible || isFinished"
      class="w-full flex items-center justify-center gap-2 text-center text-xl capitalize bg-foreground dark:bg-background dark:text-foreground text-background p-4 rounded-md"
    >
      <span
        v-if="locale === 'es'"
      >
        🇪🇸
      </span>

      <span
        v-if="locale === 'en'"
      >
        🇬🇧
      </span>

      <span
        v-if="locale === 'tr'"
      >
        🇹🇷
      </span>

      <span
        v-if="locale === 'de'"
      >
        🇩🇪
      </span>

      <span>
        {{ props.noun.translations[locale as keyof typeof props.noun.translations] }}
      </span>
    </div>

    <!-- HINT BUTTON | SHOW ANSWER BUTTON | NEXT BUTTON -->
    <div
      class="flex items-center justify-between gap-2 w-full"
    >
      <button
        class="btn"
        :class="{
          'disabled:opacity-50 cursor-not-allowed': isHintVisible || isFinished
        }"
        :disabled="isHintVisible || isFinished"
        @click="isHintVisible = true"
      >
        Hint 🕵️‍♀️
      </button>
      <button
        class="btn"
        :class="{
          'disabled:opacity-50 cursor-not-allowed': isFinished
        }"
        :disabled="isFinished"
        @click="finishExercise"
      >
        Show Answer 🧐
      </button>
      <button
        class="btn"
        @click="emit('next')"
      >
        Next ➡️
      </button>
    </div>
  </div>
</template>
