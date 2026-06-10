<script setup lang="ts">
import { Type as TypeIcon } from '@lucide/vue'
import { computed } from 'vue'

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger
} from 'radix-vue'

import { useI18n } from 'vue-i18n'

import { fonts } from '../constants/fonts'

const {
  t
} = useI18n()

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [fontClass: string]
}>()

const selectedFontLabel = computed(() => (
  fonts.find((font) => font.className === props.modelValue)?.label ?? t('common.font')
))
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>
      <button
        class="btn sm:min-w-32 capitalize flex items-center gap-2 h-10 sm:h-auto"
      >
        <TypeIcon
          class="size-4"
          aria-hidden="true"
        />
        <span
          class="hidden sm:block"
        >
          {{ selectedFontLabel }}
        </span>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-32 bg-background rounded-md divide-y divide-gray-200 mt-1"
      >
        <DropdownMenuItem
          v-for="font in fonts"
          :key="font.className"
        >
          <button
            type="button"
            class="btn w-full capitalize"
            :class="font.className"
            @click="emit('update:modelValue', font.className)"
          >
            {{ font.label }}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
