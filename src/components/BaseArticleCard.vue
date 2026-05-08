<script setup lang="ts">
import type { GermanArticle } from '@/interfaces/GermanArticle'

interface Props {
  article: GermanArticle
}

defineProps<Props>()

interface Emits {
  (event: 'click'): void
}

const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('click')
}
</script>
<template>
  <button
    :class="[
      'h-32',
      'w-32',
      'bg-foreground',
      'dark:bg-background',
      'dark:hover:bg-background-hover',
      'text-background',
      'dark:text-foreground',
      'rounded-md',
      'flex',
      'items-center',
      'justify-center',
      'capitalize',
      'cursor-pointer'
    ]"
    @click="handleClick"
  >
    {{ article }}
  </button>
</template>
