<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core'

const now = useNow()
const date = useDateFormat(now, 'YYYY-MM-DD')
const time = useDateFormat(now, 'HH:mm:ss')
</script>

<template>
  <div class="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
    <p class="text">THIS IS TEXT</p>
  </div>
</template>

<style scoped>
</style>
