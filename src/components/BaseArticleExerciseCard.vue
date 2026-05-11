<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue'
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
  locale,
  t
} = useI18n()

// GERMAN ARTICLES
const germanArticles = ['der', 'die', 'das'] as GermanArticle[]
const articleShortcutKeys = ['1', '2', '3'] as const

// ACTION SHORTCUT KEYS
const actionShortcutKeys = {
  hint: 'h',
  next: 'n',
  showAnswer: 'a'
} as const

// SELECTED ARTICLE
const selectedArticle = ref<GermanArticle | null>(null)

// INCORRECT ANSWERS
const incorrectAnswers = ref<Array<GermanArticle>>([])

// ATTEMPTS
const attemps = ref(2)

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

  // IF INCORRECT ANSWERS INCLUDE THE ARTICLE, DO NOTHING
  if (incorrectAnswers.value.includes(article)) return

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

const showAnswer = () => {
  if (isFinished.value) return

  finishExercise()
}

const handleNext = () => {
  emit('next')
}

const isKeyboardShortcutIgnored = (event: KeyboardEvent) => {
  if (event.repeat) {
    return true
  }

  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
    return true
  }

  const target = event.target

  if (!(target instanceof HTMLElement)) {
    return false
  }

  return target.isContentEditable || ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (isKeyboardShortcutIgnored(event)) return

  const articleIndex = articleShortcutKeys.indexOf(event.key as typeof articleShortcutKeys[number])

  if (articleIndex !== -1) {
    const article = germanArticles[articleIndex]

    if (article) {
      event.preventDefault()
      handleClick(article)
    }

    return
  }

  switch (event.key.toLowerCase()) {
    case actionShortcutKeys.hint:
      event.preventDefault()
      showHint()
      break

    case actionShortcutKeys.showAnswer:
      event.preventDefault()
      showAnswer()
      break

    case actionShortcutKeys.next:
      event.preventDefault()
      handleNext()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
<template>
  <div
    v-auto-animate
    class="flex flex-col gap-4 items-center justify-center"
  >
    <p>
      {{ t('exercise.attempts') }}: {{ attemps }}
    </p>
    <!-- ARTICLE SELECTION -->
    <div
      class="w-full flex gap-4 items-center justify-between"
    >
      <BaseOptionCard
        v-for="(article, index) in germanArticles"
        :is-incorrect="incorrectAnswers.includes(article)"
        :is-correct="article === props.noun.article && isFinished"
        :key="article"
        :option="article"
        :shortcut-key="articleShortcutKeys[index]"
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
        :aria-keyshortcuts="actionShortcutKeys.hint"
        @click="showHint"
      >
        {{ t('exercise.hint') }} 🕵️‍♀️
        <kbd
          class="ml-2 rounded bg-background/20 px-1.5 py-0.5 text-xs uppercase dark:bg-foreground/20"
        >
          {{ actionShortcutKeys.hint }}
        </kbd>
      </button>
      <button
        class="btn"
        :class="{
          'disabled:opacity-50 cursor-not-allowed': isFinished
        }"
        :disabled="isFinished"
        :aria-keyshortcuts="actionShortcutKeys.showAnswer"
        @click="showAnswer"
      >
        {{ t('exercise.showAnswer') }} 🧐
        <kbd
          class="ml-2 rounded bg-background/20 px-1.5 py-0.5 text-xs uppercase dark:bg-foreground/20"
        >
          {{ actionShortcutKeys.showAnswer }}
        </kbd>
      </button>
      <button
        class="btn"
        :aria-keyshortcuts="actionShortcutKeys.next"
        @click="handleNext"
      >
        {{ t('exercise.next') }} ➡️
        <kbd
          class="ml-2 rounded bg-background/20 px-1.5 py-0.5 text-xs uppercase dark:bg-foreground/20"
        >
          {{ actionShortcutKeys.next }}
        </kbd>
      </button>
    </div>
  </div>
</template>
