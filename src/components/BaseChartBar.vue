<script setup lang="ts">
import { computed, ref } from 'vue'

import Chart from 'primevue/chart'

import type { HistoryVerb } from '@/interfaces/HistoryVerbs'

interface Props {
  data: HistoryVerb[]
}

const props = withDefaults(defineProps<Props>(), {
  data: () => []
})

// CHARTS DATA
type ChartType = 'pie' | 'doughnut' | 'line' | 'bar' | 'radar' | 'polarArea'
const chartType = ref<ChartType>('bar')

// TODO: Add options to change the chart type
// const chartTypeOptions = ref<ChartType[]>([
//   'pie',
//   'doughnut',
//   'line',
//   'bar',
//   'radar',
//   'polarArea'
// ])

const computedChartProperties = computed(() => {
  const data = props.data

  return {
    type: chartType.value,
    data: {
      labels: data.map(verb => verb.infinitive),
      datasets: [
        {
          label: 'Success',
          data: data.map(verb => verb.successAttempts),
          backgroundColor: 'oklch(87.1% 0.15 154.449)',
          borderWidth: 2,
          borderColor: 'oklch(87.1% 0.15 154.449)',
          borderRadius: 8
        },
        {
          label: 'Failed',
          data: data.map(verb => verb.failedAttempts),
          backgroundColor: 'oklch(80.8% 0.114 19.571)',
          borderWidth: 2,
          borderColor: 'oklch(80.8% 0.114 19.571)',
          borderRadius: 8
        }
      ]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  }
})
</script>
<template>
  <Chart
    v-bind="computedChartProperties"
  />
</template>
