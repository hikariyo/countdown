<script setup lang="ts">
import dayjs from 'dayjs'
import { ref, onMounted } from 'vue'

const until = '2023/02/07'
const untilDayjs = dayjs(until)
const remaining = ref('')
const clock = ref<HTMLDivElement>()
const clockTop = ref('0px')

function update() {
  const duration = dayjs.duration(untilDayjs.diff(dayjs()))
  remaining.value = duration.format('DD[d] HH[h] mm[m] ss[s]')
  const top = document.body.clientHeight / 2 - clock.value!.clientHeight / 2
  clockTop.value = `${top}px`
  requestAnimationFrame(update)
}

onMounted(() => {
  update()
})
</script>

<template>
  <div class="clock" :style="{ marginTop: clockTop }" ref="clock">
    <p class="text">Time Remaining Until {{ until }}</p>
    <p class="time">{{ remaining }}</p>
  </div>
</template>
