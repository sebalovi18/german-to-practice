<script setup lang="ts">
import { computed } from 'vue'

import Chart from 'primevue/chart'

import type { ChartBarItem } from '@/interfaces/ChartBarItem'

interface Props {
  data: ChartBarItem[]
}

const props = withDefaults(defineProps<Props>(), {
  data: () => []
})

const chartRowHeight = 42
const computedChartHeight = computed(() =>
  `${Math.max(320, props.data.length * chartRowHeight + 72)}px`
)

const computedChartStyle = computed(() => ({
  height: computedChartHeight.value
}))

const computedChartProperties = computed(() => {
  const data = props.data
  const textColor = '#ffffff'
  const gridColor = 'oklch(100% 0 0 / 0.12)'
  const successColor = 'oklch(87.1% 0.15 154.449)'
  const failedColor = 'oklch(80.8% 0.114 19.571)'

  return {
    type: 'bar',
    data: {
      labels: data.map(item => item.label),
      datasets: [
        {
          label: 'Success',
          data: data.map(item => item.successAttempts),
          backgroundColor: successColor,
          borderWidth: 2,
          borderColor: successColor,
          borderRadius: 8,
          barThickness: 8
        },
        {
          label: 'Failed',
          data: data.map(item => item.failedAttempts),
          backgroundColor: failedColor,
          borderWidth: 2,
          borderColor: failedColor,
          borderRadius: 8,
          barThickness: 8
        }
      ]
    },
    options: {
      indexAxis: 'y',
      maintainAspectRatio: false,
      responsive: true,
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
          position: 'top',
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
            autoSkip: false,
            color: textColor
          }
        }
      }
    }
  }
})
</script>
<template>
  <div
    class="max-h-128 overflow-y-auto pr-2"
  >
    <Chart
      class="min-w-full"
      :style="computedChartStyle"
      v-bind="computedChartProperties"
    />
  </div>
</template>
