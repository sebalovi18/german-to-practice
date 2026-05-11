<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  isCorrect?: boolean
  isIncorrect?: boolean
  option: string
  shortcutKey?: string
}

const props = defineProps<Props>()

interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

const isNeutralClass = computed((): string =>
  'bg-foreground hover:bg-foreground-hover dark:bg-background dark:hover:bg-background-hover text-background dark:text-foreground'
)

const isCorrectClass = computed((): string =>
  'bg-green-200 hover:bg-green-200 dark:bg-green-200 dark:hover:bg-green-200 text-background dark:text-foreground'
)

const isIncorrectClass = computed((): string =>
  'bg-red-200 hover:bg-red-200 dark:bg-red-200 dark:hover:bg-red-200 text-background dark:text-foreground'
)

const computedClass = computed((): string => {
  if (props.isCorrect) {
    return isCorrectClass.value
  }

  if (props.isIncorrect) {
    return isIncorrectClass.value
  }

  return isNeutralClass.value
})

const handleClick = () => {
  emit('click')
}
</script>
<template>
  <button
    :aria-keyshortcuts="shortcutKey"
    :class="[
      'h-32',
      'w-32',
      'rounded-md',
      'flex',
      'relative',
      'items-center',
      'justify-center',
      'gap-2',
      'capitalize',
      'cursor-pointer',
      computedClass
    ]"
    @click="handleClick"
  >
    <kbd
      v-if="shortcutKey"
      class="absolute right-2 top-2 rounded bg-background/20 px-1.5 py-0.5 text-xs uppercase dark:bg-foreground/20"
    >
      {{ shortcutKey }}
    </kbd>
    <span
      v-if="isCorrect"
    >
      ✅
    </span>
    <span
      v-else-if="isIncorrect"
    >
      ❌
    </span>
    <span>
      {{ option }}
    </span>
  </button>
</template>
