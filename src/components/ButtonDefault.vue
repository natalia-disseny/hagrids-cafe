<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  to?: string
}>()
</script>

<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    class="rounded-xl bg-hagrids-green-500 text-white py-3 text-center font-semibold hover:bg-hagrids-green-300 transition cursor-pointer"
  >
    <slot />
  </component>
</template>
