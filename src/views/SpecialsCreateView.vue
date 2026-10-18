<script setup lang="ts">
import { ref } from 'vue'
import { createSpecial } from '@/services/specials.service'
import router from '@/router'
import AdminLayout from '@/templates/AdminLayout.vue'

const name = ref('')
const ingredients = ref('')
const price = ref()
const imageUrl = ref('')

async function saveSpecial() {
  await createSpecial({
    name: name.value,
    ingredients: ingredients.value.split(',').map((ingredient) => ingredient.trim()),
    price: Number(price.value),
    imageUrl: imageUrl.value,
  })

  router.push('/specials')
}
</script>

<template>
  <AdminLayout>
    <h2 class="mb-4 text-xl font-bold">Nou plat</h2>

    <form @submit.prevent="saveSpecial" class="flex flex-col gap-4">
      <input v-model="name" placeholder="Nom" class="border rounded-lg p-3" />

      <textarea
        v-model="ingredients"
        placeholder="Ingredients separats per comes"
        class="border rounded-lg p-3"
      />

      <input
        v-model="price"
        type="number"
        step="0.01"
        placeholder="Preu"
        class="border rounded-lg p-3"
      />

      <input v-model="imageUrl" placeholder="URL de la imatge" class="border rounded-lg p-3" />

      <button class="rounded-lg bg-indigo-600 text-white py-3">Guardar</button>
    </form>
  </AdminLayout>
</template>
