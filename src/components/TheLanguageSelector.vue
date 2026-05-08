<script setup lang="ts">
import { Globe } from '@lucide/vue'

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger
} from 'radix-vue'

import { useI18n } from 'vue-i18n'

import { LANGUAGE_STORAGE_KEY } from '../constants/storage'

const {
  availableLocales,
  locale,
  t
} = useI18n()

const selectLocale = (selectedLocale: string) => {
  locale.value = selectedLocale
  localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLocale)
}

</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>
      <button
        class="btn min-w-32 capitalize flex items-center gap-2"
      >
        <Globe
          class="size-4"
          aria-hidden="true"
        />
        {{ t(`language.${locale}`) }}
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
            type="button"
            class="btn w-full capitalize"
            @click="selectLocale(availableLocale)"
          >
            {{ t(`language.${availableLocale}`) }}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
