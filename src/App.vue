<script setup lang="ts">
import until from './until.json'
import Countdown from './components/Countdown.vue'
import RepositoryLink from './components/SourceCodeLink.vue'
</script>

<template>
  <Countdown :until="until" />
  <RepositoryLink href="https://github.com/kifuan/countdown" />
</template>

<style>
html, body {
  height: 100%;
}

body {
  font-family: 'Share Tech Mono', monospace;
  text-align: center;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 100%);
  overflow: hidden;
  padding: 0.5rem;
}
</style>
