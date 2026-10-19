<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  to?: string
  variant?: 'default' | 'ghost' | 'error'
}>()

const isExternal = computed(() => /^https?:\/\//i.test(props.to ?? ''))
</script>

<template>
  <component
    :is="to ? (isExternal ? 'a' : RouterLink) : 'button'"
    :to="isExternal ? undefined : to"
    :href="isExternal ? to : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="rounded-xl py-5 text-center font-semibold transition cursor-pointer"
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
