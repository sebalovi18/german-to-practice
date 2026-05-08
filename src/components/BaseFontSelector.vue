<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

const fonts = [
  'Audiowide',
  'Bitcount',
  'Bitcount Grid Double Ink',
  'Eater',
  'Fontdiner Swanky',
  'Londrina Shadow',
  'Luckiest Guy',
  'Monoton',
  'Press Start 2P',
]
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>
      <button
        class="btn min-w-32 capitalize"
      >
        Font
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-32 bg-background dark:bg-background rounded-md divide-y divide-gray-200 mt-1"
      >
        <DropdownMenuItem 
          v-for="font in fonts" 
          :key="font"
        >
          <button
            class="btn w-full capitalize"
          >
            {{ font }}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>