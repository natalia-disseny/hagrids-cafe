<script setup lang="ts">
const model = defineModel<string>({ required: true })
</script>

<template>
  <input
    v-model="model"
    class="bg-stone-50 rounded-xl p-3 outline-1 -outline-offset-2 outline-stone-200 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-hagrids-pink-400"
  />
</template>
