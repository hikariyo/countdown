<script setup lang="ts">
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'

const { until } = defineProps<{
  until: string
}>()

const untilDayjs = dayjs(until)
const untilFormatted = untilDayjs.format('YYYY/MM/DD')
const remaining = ref('')
const clock = ref<HTMLDivElement>()
const clockTop = ref('0px')

function update() {
  const duration = dayjs.duration(untilDayjs.diff(dayjs()))
  remaining.value = duration.format('DD[d] HH[h] mm[m] ss[s]')
  const top = window.innerHeight / 2 - clock.value!.clientHeight / 2
  clockTop.value = `${top}px`
  requestAnimationFrame(update)
}

onMounted(() => {
  update()
})
</script>

<template>
  <div ref="clock" :style="{ marginTop: clockTop }">
    <p class="remaining">
      Time Remaining
    </p>
    <p class="time">
      {{ remaining }}
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
  line-height: 5rem;
  color: #daf6ff;
}

.time {
  font-size: 5rem;
}

.remaining {
  font-size: 2rem;
}

.until {
  font-size: 1.5rem;
}

@media (max-width: 800px) {
  .time {
    font-size: 4rem;
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
