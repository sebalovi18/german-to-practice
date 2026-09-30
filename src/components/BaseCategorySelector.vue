<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { Check } from '@lucide/vue'

import { categories } from '@/data/categories'

import type { Category } from '@/data/categories'

type CategorizedItem = {
  id: string
  categories: Category[]
}

interface Props {
  items: CategorizedItem[]
}

const props = defineProps<Props>()

interface Emits {
  (event: 'start', categories: Category[]): void
}

const emit = defineEmits<Emits>()

const {
  locale,
  t
} = useI18n()

const selectedCategories = ref<Category[]>([])

const categoryOptions = computed(() => categories
  .map(category => ({
    id: category,
    count: props.items.filter(item => item.categories.includes(category)).length,
    label: t(`categories.${category}`)
  }))
  .filter(category => category.count > 0)
  .sort((a, b) => a.label.localeCompare(b.label, locale.value))
)

const availableCategories = computed(() =>
  categoryOptions.value.map(category => category.id)
)

const areAllCategoriesSelected = computed(() =>
  availableCategories.value.length > 0
  && availableCategories.value.every(category => selectedCategories.value.includes(category))
)

const selectedItemsCount = computed(() => {
  const selected = new Set(selectedCategories.value)

  return props.items.filter(item =>
    item.categories.some(category => selected.has(category))
  ).length
})

function toggleCategory (category: Category) {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter(item => item !== category)
    return
  }

  selectedCategories.value = [...selectedCategories.value, category]
}

function toggleAllCategories () {
  selectedCategories.value = areAllCategoriesSelected.value
    ? []
    : [...availableCategories.value]
}

function startPractice () {
  if (selectedItemsCount.value < 2) return

  emit('start', [...selectedCategories.value])
}
</script>

<template>
  <section
    class="space-y-5 pb-36 sm:pb-24"
  >
    <header
      class="space-y-1"
    >
      <h1
        class="text-xl font-bold"
      >
        {{ t('practice.categories.title') }}
      </h1>
      <p
        class="text-sm text-gray-300"
      >
        {{ t('practice.categories.description') }}
      </p>
    </header>

    <div
      class="fixed inset-x-0 bottom-0 z-20 border-t border-gray-500 bg-foreground/95 px-4 pb-4 pt-3 backdrop-blur"
    >
      <div
        class="mx-auto flex w-full max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <button
          type="button"
          class="btn disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="!selectedCategories.length"
          @click="selectedCategories = []"
        >
          {{ t('practice.categories.clear') }}
        </button>

        <div
          class="space-y-1 text-right"
        >
          <button
            type="button"
            class="btn w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            :disabled="selectedItemsCount < 2"
            @click="startPractice"
          >
            {{ t('practice.categories.start', { count: selectedItemsCount }) }}
          </button>
          <p
            v-if="selectedCategories.length && selectedItemsCount < 2"
            class="text-xs text-gray-300"
          >
            {{ t('practice.categories.minimum') }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
    >
      <button
        type="button"
        class="flex items-center justify-between gap-3 rounded-md border p-3 text-left transition-colors"
        :class="areAllCategoriesSelected ? 'border-blue-400 bg-blue-400/10 ring-1 ring-blue-400' : 'border-gray-500 hover:border-gray-300 hover:bg-foreground/5'"
        @click="toggleAllCategories"
      >
        <span
          class="flex items-center gap-2 font-semibold"
        >
          <span
            class="flex size-5 items-center justify-center rounded border border-current"
          >
            <Check
              v-if="areAllCategoriesSelected"
              class="size-4"
              aria-hidden="true"
            />
          </span>
          {{ t('practice.categories.all') }}
        </span>
        <span
          class="text-sm tabular-nums text-gray-300"
        >
          {{ items.length }}
        </span>
      </button>

      <button
        v-for="category in categoryOptions"
        :key="category.id"
        type="button"
        class="flex items-center justify-between gap-3 rounded-md border p-3 text-left transition-colors"
        :class="selectedCategories.includes(category.id) ? 'border-blue-400 bg-blue-400/10 ring-1 ring-blue-400' : 'border-gray-500 hover:border-gray-300 hover:bg-foreground/5'"
        @click="toggleCategory(category.id)"
      >
        <span
          class="flex items-center gap-2"
        >
          <span
            class="flex size-5 items-center justify-center rounded border border-current"
          >
            <Check
              v-if="selectedCategories.includes(category.id)"
              class="size-4"
              aria-hidden="true"
            />
          </span>
          {{ category.label }}
        </span>
        <span
          class="text-sm tabular-nums text-gray-300"
        >
          {{ category.count }}
        </span>
      </button>
    </div>

  </section>
</template>
