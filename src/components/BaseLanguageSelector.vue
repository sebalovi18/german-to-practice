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
        class="btn min-w-32 capitalize"
      >
        {{ locale }}
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-32 bg-background dark:bg-background rounded-md divide-y divide-gray-200 mt-1"
      >
        <DropdownMenuItem 
          v-for="availableLocale in availableLocales" 
          :key="availableLocale"
        >
          <button
            class="btn w-full capitalize"
          >
            {{ availableLocale }}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>