<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { GermanArticle } from '@/interfaces/GermanArticle'
import type { GermanNoun } from '@/interfaces/GermanNoun'

import BaseButton from '@/components/BaseButton.vue'
import BaseOptionCard from '@/components/BaseOptionCard.vue'

interface Props {
  attempts: number
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
  locale,
  t
} = useI18n()

// GERMAN ARTICLES
const germanArticles = ['der', 'die', 'das'] as GermanArticle[]

// ANSWER
const selectedAnswer = ref<GermanArticle | null>(null)
const incorrectAnswers = ref<Array<GermanArticle>>([])

const showAnswer = () => {
  if (isFinished.value) return

  // EMIT INCORRECT EVENT TWICE SINCE THE USER HAS TWO ATTEMPTS
  emit('incorrect')
  emit('incorrect')

  // FINISH EXERCISE
  finishExercise()
}

const handleAnswer = (article: GermanArticle) => {
  // IF FINISHED, DO NOTHING
  if (isFinished.value) return

  // IF INCORRECT ANSWERS INCLUDE THE ARTICLE, DO NOTHING
  if (incorrectAnswers.value.includes(article)) return

  // SELECTED ARTICLE
  selectedAnswer.value = article

  // INCORRECT ANSWER - IF ATTEMPS ARE 0, FINISH THE EXERCISE
  if (article !== props.noun.article) {
    // ADD INCORRECT ANSWER TO LIST
    incorrectAnswers.value.push(article)

    emit('incorrect')

    // IF ATTEMPTS ARE 1, FINISH THE EXERCISE AND EMIT INCORRECT EVENT
    if (props.attempts === 1) {
      finishExercise()
    }

    return
  }

  // CORRECT ANSWER
  isFinished.value = true

  emit('correct')
}

// HINT VISIBLE
const isHintVisible = ref(false)
const showHint = () => {
  if (isHintVisible.value || isFinished.value) return

  isHintVisible.value = true
}

// FINISH EXERCISE
const isFinished = ref(false)
const finishExercise = () => {
  if (isFinished.value) return

  // SET INCORRECT ANSWERS
  incorrectAnswers.value = germanArticles.filter(article =>
    article !== props.noun.article
  )

  // SET CORRECT ANSWER
  selectedAnswer.value = props.noun.article

  // FINISH EXERCISE
  isFinished.value = true
}

// HANDLE NEXT EVENT
const handleNext = () => {
  if (!isFinished.value) return

  emit('next')
}
</script>
<template>
  <div
    v-auto-animate
    class="space-y-4 w-full"
  >
    <!-- ARTICLE SELECTION -->
    <div
      class="space-y-1"
    >
      <p>
        {{ t('exercise.articlePrompt') }} 👇
      </p>

      <div
        class="grid grid-cols-3 gap-4"
      >
        <BaseOptionCard
          v-for="(article, index) in germanArticles"
          :disabled="isFinished"
          :is-incorrect="incorrectAnswers.includes(article)"
          :is-correct="article === props.noun.article && isFinished"
          :key="article"
          :option="article"
          :shortcut-key="(index + 1).toString()"
          @click="handleAnswer(article)"
        />
      </div>
    </div>

    <!-- COMPLETE WORD DISPLAY -->
    <div
      v-auto-animate
      class="w-full flex items-center justify-center gap-2 text-center capitalize bg-foreground dark:bg-background dark:text-foreground text-background p-2 md:p-4 rounded-md"
    >
      <span
        v-if="isFinished"
        :class="{
          'text-blue-500 font-bold': props.noun.article === 'der',
          'text-pink-500 font-bold': props.noun.article === 'die',
          'text-gray-500 font-bold': props.noun.article === 'das'
        }"
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
      class="space-y-1"
    >
      <p>
        {{ t('exercise.meaning') }} 🌎
      </p>
      <div
        class="w-full flex items-center justify-center gap-2 text-center capitalize bg-foreground dark:bg-background dark:text-foreground text-background p-2 md:p-4 rounded-md"
      >
        <span>
          {{ props.noun.translationArticles[locale as keyof typeof props.noun.translationArticles] }}
        </span>
        <span>
          {{ props.noun.translations[locale as keyof typeof props.noun.translations] }}
        </span>
      </div>
    </div>

    <!-- HINT BUTTON | SHOW ANSWER BUTTON | NEXT BUTTON -->
    <div
      class="space-y-1"
    >
      <p>
        {{ t('exercise.actions') }} 🥸
      </p>

      <div
        class="flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 w-full"
      >
        <!-- HINT BUTTON -->
        <BaseButton
          aria-keyshortcuts="h"
          class="w-full"
          :disabled="isHintVisible || isFinished"
          :shortcut-key="'h'"
          @click="showHint"
        >
          {{ t('exercise.hint') }} 📚
        </BaseButton>

        <!-- SHOW ANSWER BUTTON -->
        <BaseButton
          aria-keyshortcuts="a"
          class="w-full"
          :disabled="isFinished"
          :shortcut-key="'a'"
          @click="showAnswer"
        >
          {{ t('exercise.showAnswer') }} 🧐
        </BaseButton>

        <!-- NEXT BUTTON -->
        <BaseButton
          aria-keyshortcuts="n"
          class="w-full"
          :disabled="!isFinished"
          :shortcut-key="'n'"
          @click="handleNext"
        >
          {{ t('exercise.next') }} ➡️
        </BaseButton>
      </div>
    </div>
  </div>
</template>
