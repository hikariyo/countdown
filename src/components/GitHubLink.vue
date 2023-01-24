<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'

const { href } = defineProps<{
  href: string
}>()

const hide = ref(false)
const { h } = useMagicKeys()

watch(h, (v) => {
  if (v)
    hide.value = !hide.value
})
</script>

<template>
  <div v-show="!hide">
    <a :href="href" target="_blank">GitHub</a>
    <a class="hide" @click="hide = true">Hide</a>
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
  font-size: 1.25rem;
  text-decoration: none;
}

.hide:before {
  content: ' | ';
}

.hide {
  cursor: pointer;
}

@media (max-width: 600px) {
  a {
    font-size: 1rem;
  }
}
</style>
