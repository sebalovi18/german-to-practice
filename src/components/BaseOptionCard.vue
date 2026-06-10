<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'

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
  'bg-background hover:bg-background-hover text-foreground'
)

const isCorrectClass = computed((): string =>
  'bg-green-200 hover:bg-green-200 text-foreground'
)

const isIncorrectClass = computed((): string =>
  'bg-red-200 hover:bg-red-200 text-foreground'
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

  if (event.key !== props.shortcutKey) return

  event.preventDefault()

  emit('click')
}

// ----------------------------------------
// HOOKS
// ----------------------------------------
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
<template>
  <button
    v-auto-animate
    :aria-keyshortcuts="shortcutKey"
    :class="[
      'min-h-24',
      'min-w-24',
      'rounded-md',
      'flex',
      'relative',
      'items-center',
      'justify-center',
      'gap-2',
      'capitalize',
      'cursor-pointer',
      'transition-colors',
      'duration-300',
      computedClass
    ]"
    @click="handleClick"
  >
    <kbd
      v-if="shortcutKey"
      class="absolute right-2 top-2 rounded bg-foreground/60 px-1.5 py-0.5 text-xs uppercase text-background"
    >
      {{ shortcutKey }}
    </kbd>
    <span
      class="absolute right-2 bottom-2 text-sm uppercase"
      v-if="isCorrect"
    >
      ✅
    </span>
    <span
      class="absolute right-2 bottom-2 text-sm uppercase"
      v-else-if="isIncorrect"
    >
      ❌
    </span>
    <span>
      {{ option }}
    </span>
  </button>
</template>
