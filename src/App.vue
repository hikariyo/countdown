<script setup lang="ts">
import GitHubLink from './components/GitHubLink.vue'
import Countdown from './components/Countdown.vue'

const defaultDate = '2027/01/01'

function getUntilDate() {
  const param = new URL(location.href).searchParams.get('until') || defaultDate
  if (/\d{14}/.test(param))
    return `${param.substring(0, 4)}/${param.substring(4, 6)}/${param.substring(6, 8)} ${param.substring(8, 10)}:${param.substring(10, 12)}:${param.substring(12, 14)}`
  else if (/\d{8}/.test(param))
    return `${param.substring(0, 4)}/${param.substring(4, 6)}/${param.substring(6, 8)}`
  return defaultDate
}

const until = getUntilDate()
</script>

<template>
  <Countdown :until="until" />
  <GitHubLink href="https://github.com/hikariyo/countdown" />
</template>
