<script setup lang="ts">
import dayjs from 'dayjs'
import { computed, ref } from 'vue'
import { useElementSize, useNow, useWindowSize } from '@vueuse/core'

const { until } = defineProps<{
  until: string
}>()

const clock = ref<HTMLDivElement>()
const { height: windowHeight } = useWindowSize()
const { height: clockHeight } = useElementSize(clock)
const clockTop = computed(() => `${windowHeight.value / 2 - clockHeight.value / 2}px`)

const now = useNow()
const untilDayjs = dayjs(until)

const duration = computed(() => {
  if (untilDayjs.isBefore(now.value))
    return dayjs.duration(0)

  return dayjs.duration(untilDayjs.diff(now.value))
})

const untilFormatted = untilDayjs.format('YYYY/MM/DD')
const remainingFormatted = computed(() => {
  const dur = duration.value

  // Make days sized 2 at least.
  let days = String(Math.floor(dur.asDays()))
  if (days.length === 1)
    days = `0${days}`

  const hms = dur.format('HH[h] mm[m] ss[s]')
  return `${days}d ${hms}`
})
</script>

<template>
  <div ref="clock" :style="{ marginTop: clockTop }">
    <p class="remaining">
      Time Remaining
    </p>
    <p class="time">
      {{ remainingFormatted }}
    </p>
    <p class="until">
      Until {{ untilFormatted }}
    </p>
  </div>
</template>

<style scoped>
p {
  margin: 0;
  padding: 0;
  line-height: 7rem;
  color: #daf6ff;
}

.time {
  font-size: 6rem;
}

.remaining {
  font-size: 3rem;
}

.until {
  font-size: 2rem;
}

@media (max-width: 950px) {
  .time {
    font-size: 4rem;
  }

  .until {
    font-size: 1.75rem;
  }
}

@media (max-width: 600px) {
  p {
    line-height: 4rem;
  }

  .time {
    font-size: 2.5rem;
  }

  .remaining {
    font-size: 1.75rem;
  }

  .until {
    font-size: 1.25rem;
  }
}
</style>
