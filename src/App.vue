<script setup lang="ts">
import { RouterView } from 'vue-router'

import DefaultLayout from '@/layouts/default.vue'
</script>

<template>
  <div>
    <DefaultLayout>
      <RouterView
        v-slot="{ Component, route }"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="route.path"
          />
        </transition>
      </RouterView>
    </DefaultLayout>
  </div>
</template>
