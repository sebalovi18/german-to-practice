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
      class="flex flex-col gap-4 items-center justify-center"
    >
      <h1
        class="text-4xl font-Londrina-Shadow"
      >
        You did it!
      </h1>
      <h1
        class="text-4xl font-Eater"
      >
        You did it!
      </h1>
      <h1
        class="text-4xl font-Londrina-Shadow"
      >
        You did it!
      </h1>
      <h1
        class="text-4xl font-Luckiest-Guy"
      >
        You did it!
      </h1>
      <h1
        class="text-4xl font-Cinzel"
      >
        You did it!
      </h1>
      <h1
        class="text-4xl font-Monoton"
      >
        You did it!
      </h1>
      <h1
        class="text-4xl font-Press-Start-2P"
      >
        You did it!
      </h1>
    </div>
  </div>
</template>
