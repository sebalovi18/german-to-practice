<script setup lang="ts">
import { computed, ref } from 'vue'

import { useI18n } from 'vue-i18n'

import BaseButton from '@/components/BaseButton.vue'
import BaseOptionCard from '@/components/BaseOptionCard.vue'

import type { GermanVerb } from '@/interfaces/GermanVerbs'

interface Props {
  answer: GermanVerb
  options: GermanVerb[]
  attempts?: number
  optionsCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  attempts: 2,
  optionsCount: 6
})

interface Emits {
  (event: 'correct', verb: GermanVerb): void
  (event: 'incorrect', verb: GermanVerb): void
  (event: 'next'): void
}

const emit = defineEmits<Emits>()

const {
  locale,
  t
} = useI18n()

// ----------------------------------------
// IS FINISHED
// ----------------------------------------
const isFinished = ref<boolean>(false)

// ----------------------------------------
// COMPUTED OPTIONS ORDERED RANDOMLY
// ----------------------------------------
const computedOptions = computed((): GermanVerb[] =>
  [...props.options, props.answer].sort(() => Math.random() - 0.5)
)

// ----------------------------------------
// SELECTED OPTION
// ----------------------------------------
const selectedOption = ref<GermanVerb | null>(null)
const incorrectOptions = ref<GermanVerb[]>([])

const handleSelectOption = (option: GermanVerb) => {
  if (selectedOption.value === option) return
  if (isFinished.value) return

  selectedOption.value = option

  if (option.id === props.answer.id) {
    isFinished.value = true

    emit('correct', props.answer)
  } else {
    incorrectOptions.value.push(option)

    emit('incorrect', props.answer)
  }
}

// ----------------------------------------
// HANDLE SHOW ANSWER EVENT
// ----------------------------------------
const handleShowAnswer = () => {
  if (isFinished.value) return

  isFinished.value = true

  selectedOption.value = props.answer
  incorrectOptions.value = props.options.filter(option => option.id !== selectedOption.value!.id)
}

// ----------------------------------------
// HANDLE NEXT EVENT
// ----------------------------------------
const handleNext = () => {
  if (!isFinished.value) return

  emit('next')
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
      {{ answer.infinitive }}
    </p>

    <!-- CARD OPTIONS -->
    <div
      class="grid grid-cols-2 gap-4"
    >
      <BaseOptionCard
        v-for="(option, index) in computedOptions"
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
