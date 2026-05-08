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
        class="btn"
      >
        Font
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem 
          v-for="font in fonts" 
          :key="font"
        >
          <button
            class="btn"
          >
            {{ font }}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>