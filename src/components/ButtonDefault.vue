<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  to?: string
  variant?: 'default' | 'ghost' | 'error'
}>()
</script>

<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    class="rounded-xl py-3 text-center font-semibold transition cursor-pointer"
    :class="{
      'bg-hagrids-green-500 text-white hover:bg-hagrids-green-300':
        !variant || variant === 'default',
      'bg-white text-hagrids-green-500 border-2 border-hagrids-green-500 hover:bg-stone-100':
        variant === 'ghost',
      'bg-red-600 text-white hover:bg-red-700': variant === 'error',
    }"
  >
    <slot />
  </component>
</template>
