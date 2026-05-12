<script setup lang="ts">
import { ref } from 'vue'

import { useNouns } from '@/composables/useNouns'
import { useI18n } from 'vue-i18n'

import BaseButton from '@/components/BaseButton.vue'
import BaseOptionCard from '@/components/BaseOptionCard.vue'

import type { GermanNoun } from '@/interfaces/GermanNoun'

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

const OPTIONS_COUNT = 6
const randomNouns = ref<GermanNoun[]>(getRandomNouns(OPTIONS_COUNT))

// ----------------------------------------
// SELECTED OPTION
// ----------------------------------------
const selectedOption = ref<GermanNoun | null>(null)
const incorrectOptions = ref<GermanNoun[]>([])

const handleSelectOption = (option: GermanNoun) => {
  selectedOption.value = option

  if (option.id === randomNouns.value[0]!.id) {
    isFinished.value = true

    emit('correct')
  } else {
    incorrectOptions.value.push(option)

    emit('incorrect')
  }
}

// ----------------------------------------
// IS FINISHED
// ----------------------------------------
const isFinished = ref<boolean>(false)

const startNewExercise = () => {
  randomNouns.value = getRandomNouns(OPTIONS_COUNT)
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
    <p
      class="text-2xl font-bold text-center"
    >
      {{ randomNouns[0]!.id }}
    </p>

    <!-- CARD OPTIONS -->
    <div
      class="grid grid-cols-2 gap-4"
    >
      <BaseOptionCard
        v-for="(option, index) in randomNouns"
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
