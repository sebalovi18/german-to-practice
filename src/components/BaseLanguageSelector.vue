<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n() 

console.log(availableLocales)
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>
      <button
        class="btn"
      >
        {{ locale }}
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem 
          v-for="availableLocale in availableLocales" 
          :key="availableLocale"
        >
          <button
            class="btn"
          >
            {{ availableLocale }}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>