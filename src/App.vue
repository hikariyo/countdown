<script setup lang="ts">
import until from './until.json'
import Countdown from './components/Countdown.vue'
import GitHubLink from './components/GitHubLink.vue'
</script>

<template>
  <Countdown :until="until" />
  <GitHubLink href="https://github.com/kifuan/countdown" />
</template>
