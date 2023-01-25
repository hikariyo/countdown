<script setup lang="ts">
import { useRoute } from 'vue-router'
import Countdown from '../components/Countdown.vue'

const route = useRoute()
const { year, month, day } = route.params
const until = `${year}/${month}/${day}`
</script>

<template>
  <Countdown :until="until" />
</template>
