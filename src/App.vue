<script setup lang="ts">
import { RouterView } from 'vue-router'

import DefaultLayout from '@/layouts/default.vue'
</script>

<template>
  <div>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>
