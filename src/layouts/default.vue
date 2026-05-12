<script setup lang="ts">
import TheLanguageSelector from '@/components/TheLanguageSelector.vue'
import TheFontSelector from '@/components/TheFontSelector.vue'

import { ArrowLeftIcon } from '@lucide/vue'

import { ref, watch } from 'vue'

import { useRouter } from 'vue-router'

import {
  DEFAULT_FONT_CLASS,
  isFontClass
} from '@/constants/fonts'

import { FONT_STORAGE_KEY } from '@/constants/storage'

const router = useRouter()

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
    class="h-dvh w-dvw overflow-auto max-w-5xl mx-auto p-4 rounded-md space-y-4"
  >
    <div
      class="flex items-center justify-between"
    >
      <div>
        <button
          v-if="router.currentRoute.value.path !== '/home'"
          class="btn h-[40px]"
          @click="router.push('/home')"
        >
          <ArrowLeftIcon
            class="size-4"
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        class="flex items-center justify-end gap-4"
      >
        <TheLanguageSelector />
        <TheFontSelector
          v-model="selectedFontClass"
        />
      </div>
    </div>
    <div
      :class="selectedFontClass"
    >
      <slot />
    </div>
  </div>
</template>
