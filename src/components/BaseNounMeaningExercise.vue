<script setup lang="ts">
import { computed, ref } from 'vue'

import { useNouns } from '@/composables/useNouns'
import { useI18n } from 'vue-i18n'

import BaseButton from '@/components/BaseButton.vue'
import BaseOptionCard from '@/components/BaseOptionCard.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

interface Props {
  attempts?: number
  optionsCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  attempts: 2,
  optionsCount: 6
})

interface Emits {
  (event: 'correct'): void
  (event: 'incorrect'): void
}

const emit = defineEmits<Emits>()

const {
  locale,
  t
} = useI18n()

// ----------------------------------------
// NOUNS
// ----------------------------------------
const {
  getRandomNouns
} = useNouns()

const randomNouns = ref<GermanNoun[]>(getRandomNouns(props.optionsCount))
const computedRandomNounsOrdered = computed((): GermanNoun[] =>
  [...randomNouns.value].sort(() => Math.random() - 0.5)
)

// ----------------------------------------
// HISTORY
// ----------------------------------------
type HistoryEntry = Map<string, {
  id: string
  correct: boolean
  errors: number
}>

const history = ref<HistoryEntry>(new Map())
const isWordAlreadySeenAndCorrect = (word: GermanNoun): boolean =>
  history.value.get(word.id)?.correct ?? false

const setHistory = (word: GermanNoun, correct: boolean) => {
  const wordHistory = history.value.get(word.id)

  if (!wordHistory) {
    history.value.set(word.id, {
      id: word.id,
      correct: correct,
      errors: 0
    })

    return
  }

  wordHistory.errors++
}
// ----------------------------------------
// SELECTED OPTION
// ----------------------------------------
const selectedOption = ref<GermanNoun | null>(null)
const incorrectOptions = ref<GermanNoun[]>([])

const handleSelectOption = (option: GermanNoun) => {
  selectedOption.value = option

  const isCorrect = option.id === randomNouns.value[0]!.id

  const event = isCorrect ? 'correct' : 'incorrect' as Emits[keyof Emits]

  if (isCorrect) {
    isFinished.value = true
  }

  if (!isCorrect) {
    incorrectOptions.value.push(option)
  }

  setHistory(option, isCorrect)

  emit(event)
}

// ----------------------------------------
// IS FINISHED
// ----------------------------------------
const isFinished = ref<boolean>(false)

const startNewExercise = () => {
  do {
    randomNouns.value = getRandomNouns(props.optionsCount)
  } while (isWordAlreadySeenAndCorrect(randomNouns.value[0]!))

  selectedOption.value = null
  incorrectOptions.value = []
  isFinished.value = false
}

// HANDLE SHOW ANSWER EVENT
const handleShowAnswer = () => {
  if (isFinished.value) return

  isFinished.value = true

  selectedOption.value = randomNouns.value[0]!
  incorrectOptions.value = randomNouns.value.filter(noun => noun.id !== selectedOption.value!.id)
}

// HANDLE NEXT EVENT
const handleNext = () => {
  if (!isFinished.value) return

  startNewExercise()
}
</script>
<template>
  <div
    class="space-y-4"
  >
    <!-- NOUN DISPLAY -->
    <div
      class="flex items-center justify-center gap-2"
    >
      <span
        class="text-2xl font-bold text-center"
      >
        {{ randomNouns[0]!.value }}
      </span>
      <sub
        class="text-[10px] dark:text-background text-foreground"
      >
        {{ !randomNouns[0]!.plural_id ? '(Plural)' : '' }}
      </sub>
    </div>

    <!-- CARD OPTIONS -->
    <div
      class="grid grid-cols-2 gap-4"
    >
      <BaseOptionCard
        v-for="(option, index) in computedRandomNounsOrdered"
        :disabled="isFinished"
        :is-correct="selectedOption?.id === option.id && isFinished"
        :is-incorrect="incorrectOptions.includes(option)"
        :key="option.id"
        :option="option.translations[locale as keyof typeof option.translations]"
        :shortcut-key="(index + 1).toString()"
        @click="handleSelectOption(option)"
      />
    </div>

    <div
      class="space-y-4"
    >
      <!-- SHOW ANSWER BUTTON -->
      <BaseButton
        class="w-full"
        :disabled="isFinished"
        :shortcut-key="'a'"
        @click="handleShowAnswer"
      >
        {{ t('exercise.showAnswer') }} 🧐
      </BaseButton>

      <!-- NEXT BUTTON -->
      <BaseButton
        class="w-full"
        :disabled="!isFinished"
        :shortcut-key="'n'"
        @click="handleNext"
      >
        {{ t('exercise.next') }} ➡️
      </BaseButton>
    </div>
  </div>
</template>
