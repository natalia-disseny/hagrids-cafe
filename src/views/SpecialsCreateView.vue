<script setup lang="ts">
import { ref } from 'vue'
import { createSpecial } from '@/services/specials.service'
import router from '@/router'
import AdminLayout from '@/templates/AdminLayout.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import InputValue from '@/components/InputValue.vue'
import Textarea from '@/components/Textarea.vue'

const name = ref('')
const description = ref('')
const price = ref('')
const imageUrl = ref('')

function formatPrice() {
  const value = price.value.trim()
  if (!value) return

  const normalizedValue = value.replace(',', '.')
  const amount = Number(normalizedValue)
  if (!Number.isFinite(amount)) return

  const decimalSeparator = value.includes(',') ? ',' : '.'
  price.value = amount.toFixed(2).replace('.', decimalSeparator)
}

async function saveSpecial() {
  await createSpecial({
    name: name.value,
    description: description.value,
    price: Number(price.value.replace(',', '.')),
    imageUrl: imageUrl.value,
  })

  router.push('/specials')
}
</script>

<template>
  <AdminLayout>
    <h2 class="mb-4 text-xl font-bold">Nou plat</h2>

    <form @submit.prevent="saveSpecial" class="flex flex-col gap-4">
      <InputValue v-model="name" placeholder="Nom" name="name" type="text" />
      <Textarea v-model="description" placeholder="Descripció del plat" />
      <InputValue
        v-model="price"
        placeholder="Preu"
        name="price"
        type="text"
        inputmode="decimal"
        pattern="[0-9]+([.,][0-9]{1,2})?"
        required
        @blur="formatPrice"
      />
      <InputValue v-model="imageUrl" placeholder="URL de la imatge" type="text" />

      <ButtonDefault>Guardar</ButtonDefault>
    </form>
  </AdminLayout>
</template>
