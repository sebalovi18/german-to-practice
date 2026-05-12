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

// ACTION SHORTCUT KEYS
const articleShortcutKeys = ['1', '2', '3'] as const
const actionShortcutKeys = {
  hint: 'h',
  next: 'n',
  showAnswer: 'a'
} as const

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

// IS KEYBOARD SHORTCUT IGNORED
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

// HANDLE KEYDOWN EVENT
const handleKeydown = (event: KeyboardEvent) => {
  if (isKeyboardShortcutIgnored(event)) return

  const articleIndex = articleShortcutKeys.indexOf(event.key as typeof articleShortcutKeys[number])

  if (articleIndex !== -1) {
    const article = germanArticles[articleIndex]

    if (article) {
      event.preventDefault()
      handleAnswer(article)
    }

    return
  }

  const eventKey = event.key.toLowerCase()

  if (eventKey === actionShortcutKeys.hint && !isHintVisible.value && !isFinished.value) {
    event.preventDefault()

    showHint()

    return
  }

  if (eventKey === actionShortcutKeys.showAnswer && !isFinished.value) {
    event.preventDefault()

    showAnswer()

    return
  }

  if (eventKey === actionShortcutKeys.next && isFinished.value) {
    event.preventDefault()

    handleNext()

    return
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
          :is-incorrect="incorrectAnswers.includes(article)"
          :is-correct="article === props.noun.article && isFinished"
          :key="article"
          :option="article"
          :shortcut-key="articleShortcutKeys[index]"
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
        <button
          class="btn"
          :class="{
            'disabled:opacity-50 cursor-not-allowed': isHintVisible || isFinished
          }"
          :disabled="isHintVisible || isFinished"
          :aria-keyshortcuts="actionShortcutKeys.hint"
          @click="showHint"
        >
          {{ t('exercise.hint') }} 📚
          <kbd
            class="ml-2 rounded bg-background/20 px-1.5 py-0.5 text-xs uppercase dark:bg-foreground/20"
          >
            {{ actionShortcutKeys.hint }}
          </kbd>
        </button>

        <!-- SHOW ANSWER BUTTON -->
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

        <!-- NEXT BUTTON -->
        <button
          :aria-keyshortcuts="actionShortcutKeys.next"
          class="btn"
          :class="{
            'disabled:opacity-50 cursor-not-allowed': !isFinished
          }"
          :disabled="!isFinished"
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
  </div>
</template>
