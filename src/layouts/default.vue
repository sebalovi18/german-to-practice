<script setup lang="ts">
import TheLanguageSelector from '@/components/TheLanguageSelector.vue'
import TheFontSelector from '@/components/TheFontSelector.vue'

import { ref, watch } from 'vue'

import {
  DEFAULT_FONT_CLASS,
  isFontClass
} from '@/constants/fonts'

import { FONT_STORAGE_KEY } from '@/constants/storage'

const savedFontClass = localStorage.getItem(FONT_STORAGE_KEY)
const selectedFontClass = ref(
  isFontClass(savedFontClass)
    ? savedFontClass
    : DEFAULT_FONT_CLASS
)

watch(selectedFontClass, (fontClass) => {
  localStorage.setItem(FONT_STORAGE_KEY, fontClass)
})
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
      :class="selectedFontClass"
    >
      <slot />
    </div>
  </div>
</template>
