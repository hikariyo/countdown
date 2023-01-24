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

<style scoped>
p {
  margin: 0;
  padding: 0;
  line-height: 5rem;
}

.clock {
  font-family: 'Share Tech Mono', monospace;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
}

.time {
  letter-spacing: 0.05rem;
  font-size: 5rem;
}

.text {
  letter-spacing: 0.1rem;
  font-size: 2rem;
}
</style>
