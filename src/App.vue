<script setup lang="ts">
import { ref, watch } from 'vue'

import TheLanguageSelector from './components/TheLanguageSelector.vue'
import TheFontSelector from './components/TheFontSelector.vue'
import {
  DEFAULT_FONT_CLASS,
  isFontClass
} from './constants/fonts'
import { FONT_STORAGE_KEY } from './constants/storage'

const savedFontClass = localStorage.getItem(FONT_STORAGE_KEY)
const selectedFontClass = ref(
  isFontClass(savedFontClass)
    ? savedFontClass
    : DEFAULT_FONT_CLASS
)

watch(selectedFontClass, (fontClass) => {
  localStorage.setItem(FONT_STORAGE_KEY, fontClass)
})

console.log('Hello World')
</script>

<template>
  <div
    class="h-dvh w-dvw overflow-auto container mx-auto p-2 rounded-md"
  >
    <div
      class="flex items-center justify-end gap-4"
    >
      <TheLanguageSelector />
      <TheFontSelector
        v-model="selectedFontClass"
      />
    </div>
    <div
      class="flex gap-4 items-center justify-center"
    >
      <div
        v-for="article in ['der', 'die', 'das']"
        :key="article"
        class="h-32 w-32 bg-foreground dark:bg-background dark:hover:bg-background-hover text-background dark:text-foreground rounded-md flex items-center justify-center capitalize cursor-pointer"
        :class="selectedFontClass"
      >
        {{ article }}
      </div>
    </div>
  </div>
</template>
