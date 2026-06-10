<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

interface Props {
  label?: string
  shortcutKey?: string
}

const props = defineProps<Props>()

interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

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
      'btn',
      'flex',
      'relative',
      'items-center',
      'justify-center',
      'gap-2',
      'transition-colors',
      'duration-300',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed'
    ]"
    @click="handleClick"
  >
    <kbd
      v-if="shortcutKey"
      class="absolute right-2 top-2 rounded bg-foreground/60 px-1.5 py-0.5 text-xs uppercase text-background"
    >
      {{ shortcutKey }}
    </kbd>
    <slot>
      {{ label ?? 'ADD A LABEL ❌' }}
    </slot>
  </button>
</template>
