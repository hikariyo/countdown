<script setup lang="ts">
const { href } = defineProps<{
  href: string
}>()
</script>

<template>
  <div>
    <a :href="href" target="_blank">Source Code</a>
  </div>
</template>

<style scoped>
div {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 2rem;
}

a {
  color: #daf6ff;
  font-size: 1.1rem;
  text-decoration: none;
}
</style>
