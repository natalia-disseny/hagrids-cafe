<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpecials } from '@/composables/useSpecials.use'
import SpecialDish from '@/components/SpecialDish.vue'

const { specials, loadSpecials } = useSpecials()

onMounted(() => {
  loadSpecials()
})
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold text-stone-800">Especials</h2>

  <SpecialDish v-for="special in specials" :key="special.name" :special="special" />
</template>
