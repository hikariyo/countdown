<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

const until = '2023/02/07'
const untilDayjs = dayjs(until)
const remaining = ref('')

function update() {
  const duration = dayjs.duration(untilDayjs.diff(dayjs()))
  remaining.value = duration.format('DD[d] HH[h] mm[m] ss[s]')
  requestAnimationFrame(update)
}

update()
</script>

<template>
  <div class="clock">
    <p class="text">Time Remaining Until {{ until }}</p>
    <p class="time">{{ remaining }}</p>
  </div>
</template>
