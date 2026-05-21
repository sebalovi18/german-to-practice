<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section
    class="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center space-y-6 text-center"
  >
    <div
      class="space-y-3"
    >
      <p
        class="text-sm uppercase tracking-[0.35em] text-gray-500"
      >
        Page not found
      </p>
      <h1
        class="text-7xl font-semibold sm:text-8xl"
      >
        404
      </h1>
      <p
        class="mx-auto max-w-md text-sm leading-6 text-gray-500 sm:text-base"
      >
        The page you are looking for could not be found. You can return to the
        German to Practice home page or go back to the previous page.
      </p>
    </div>

    <div
      class="flex flex-wrap justify-center gap-3"
    >
      <button
        class="btn min-h-12 px-5"
        @click="router.push('/home')"
      >
        Go back home
      </button>
      <button
        class="btn min-h-12 px-5"
        @click="router.back()"
      >
        Go back
      </button>
    </div>
  </section>
</template>
