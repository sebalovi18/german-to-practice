<script setup lang="ts">
import BaseLanguageSelector from './components/BaseLanguageSelector.vue'
import BaseFontSelector from './components/BaseFontSelector.vue'

console.log('Hello World')
</script>

<template>
  <div
    class="h-dvh w-dvw overflow-auto container mx-auto p-2 rounded-md"
  >
    <div
      class="flex items-center justify-end gap-4"
    >
      <BaseLanguageSelector />
      <BaseFontSelector />
    </div>
    <div
      class="flex gap-4 items-center justify-center"
    >
      <div
        v-for="article in ['der', 'die', 'das']"
        :key="article"
        class="font-Eater h-32 w-32 bg-foreground dark:bg-background dark:hover:bg-background-hover text-background dark:text-foreground rounded-md flex items-center justify-center capitalize cursor-pointer"
      >
        {{ article }}
      </div>
    </div>
  </div>
</template>
