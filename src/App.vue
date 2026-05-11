<script setup lang="ts">
import { RouterView } from 'vue-router'

import DefaultLayout from '@/layouts/default.vue'
</script>

<template>
  <div>
    <DefaultLayout>
      <RouterView
        v-slot="{ Component }"
      >
        <transition
          name="fade"
        >
          <component
            :is="Component"
          />
        </transition>
      </RouterView>
    </DefaultLayout>
  </div>
</template>
