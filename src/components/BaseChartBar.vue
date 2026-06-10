<script setup lang="ts">
import { computed, ref } from 'vue'

import Chart from 'primevue/chart'

import type { ChartBarItem } from '@/interfaces/ChartBarItem'

interface Props {
  data: ChartBarItem[]
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
  const textColor = '#ffffff'
  const gridColor = 'oklch(100% 0 0 / 0.12)'

  return {
    type: chartType.value,
    data: {
      labels: data.map(item => item.label),
      datasets: [
        {
          label: 'Success',
          data: data.map(item => item.successAttempts),
          backgroundColor: 'oklch(87.1% 0.15 154.449)',
          borderWidth: 2,
          borderColor: 'oklch(87.1% 0.15 154.449)',
          borderRadius: 8
        },
        {
          label: 'Failed',
          data: data.map(item => item.failedAttempts),
          backgroundColor: 'oklch(80.8% 0.114 19.571)',
          borderWidth: 2,
          borderColor: 'oklch(80.8% 0.114 19.571)',
          borderRadius: 8
        }
      ]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        tooltip: {
          titleColor: textColor,
          bodyColor: textColor
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            stepSize: 1
          }
        },
        y: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor
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
