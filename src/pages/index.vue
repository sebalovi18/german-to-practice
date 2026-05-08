<script setup lang="ts">
import { ref } from 'vue'

import type { GermanArticle } from '@/interfaces/GermanArticle'

import BaseArticleCard from '@/components/BaseArticleCard.vue'

const germanArticles = ['der', 'die', 'das'] as GermanArticle[]

const selectedArticle = ref<GermanArticle | null>(null)
</script>

<template>
  <div
    class="flex gap-4 items-center justify-center"
  >
    <BaseArticleCard
      v-for="article in germanArticles"
      :key="article"
      :article="article"
      @click="selectedArticle = article"
    />
  </div>
</template>
