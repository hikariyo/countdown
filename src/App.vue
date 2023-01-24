<script setup lang="ts">
import until from './until.json'
import Countdown from './components/Countdown.vue'
</script>

<template>
  <Countdown :until="until" />
</template>

<style>
html, body {
  height: 100%;
}

body {
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 100%);
  overflow: hidden;
  padding: 0.5rem;
}
</style>
