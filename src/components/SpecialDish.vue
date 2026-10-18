<script setup lang="ts">
import type { Special } from '@/interfaces'

defineProps<{
  special: Special
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h3 class="font-bold text-lg text-hagrids-green">
      {{ special.name }}
    </h3>

    <div class="flex flex-row gap-x-2">
      <img :src="special.imageUrl" :alt="special.name" class="rounded-xl h-30" />

      <div class="flex flex-col gap-y-3">
        <div class="bg-stone-100 px-2 py-1 rounded-lg w-fit flex gap-x-2">
          <span>{{ special.price }}</span>
        </div>

        <div class="bg-stone-100 px-2 py-1 rounded-lg w-fit flex gap-x-2">
          <span v-for="ingredient in special.ingredients" :key="ingredient">{{ ingredient }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
