<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'

const router = useRouter()
const redirect = useSessionStorage('redirect', '')

onBeforeMount(async () => {
  if (redirect.value) {
    await router.push(redirect.value)
    redirect.value = ''
  }
})
</script>

<template>
  <RouterView />
</template>
