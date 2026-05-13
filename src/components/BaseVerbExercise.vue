<script setup lang="ts">
import { computed, ref } from 'vue'

import { useVerbs } from '@/composables/useVerbs'
import { useI18n } from 'vue-i18n'

import BaseButton from '@/components/BaseButton.vue'
import BaseOptionCard from '@/components/BaseOptionCard.vue'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

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
// VERBS
// ----------------------------------------
const {
  getRandomVerbs
} = useVerbs()

const randomVerbs = ref<GermanVerb[]>(getRandomVerbs(props.optionsCount))
const computedRandomVerbsOrdered = computed((): GermanVerb[] =>
  [...randomVerbs.value].sort(() => Math.random() - 0.5)
)

// ----------------------------------------
// SELECTED OPTION
// ----------------------------------------
const selectedOption = ref<GermanVerb | null>(null)
const incorrectOptions = ref<GermanVerb[]>([])

const handleSelectOption = (option: GermanVerb) => {
  selectedOption.value = option

  if (option.id === randomVerbs.value[0]!.id) {
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
  randomVerbs.value = getRandomVerbs(props.optionsCount)
  selectedOption.value = null
  incorrectOptions.value = []
  isFinished.value = false
}

// HANDLE SHOW ANSWER EVENT
const handleShowAnswer = () => {
  if (isFinished.value) return

  isFinished.value = true

  selectedOption.value = randomVerbs.value[0]!
  incorrectOptions.value = randomVerbs.value.filter(verb => verb.id !== selectedOption.value!.id)
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
    <!-- VERB DISPLAY -->
    <p
      class="text-2xl font-bold text-center"
    >
      {{ randomVerbs[0]!.infinitive }}
    </p>

    <!-- CARD OPTIONS -->
    <div
      class="grid grid-cols-2 gap-4"
    >
      <BaseOptionCard
        v-for="(option, index) in computedRandomVerbsOrdered"
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
