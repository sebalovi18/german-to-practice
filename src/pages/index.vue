<script setup lang="ts">

</script>

<template>
  <div
    class="h-dvh w-dvw overflow-auto container mx-auto p-2 rounded-md"
  >
    <div
      class="flex gap-4 items-center justify-center"
    >
      <div
        v-for="article in ['der', 'die', 'das']"
        :key="article"
        class="h-32 w-32 bg-foreground dark:bg-background dark:hover:bg-background-hover text-background dark:text-foreground rounded-md flex items-center justify-center capitalize cursor-pointer"
      >
        {{ article }}
      </div>
    </div>
  </div>
</template>
