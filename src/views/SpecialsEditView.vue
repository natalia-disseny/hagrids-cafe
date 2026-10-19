<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { createSpecial, getSpecial, updateSpecial } from '@/services/specials.service'
import router from '@/router'
import AdminLayout from '@/templates/AdminLayout.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import InputValue from '@/components/InputValue.vue'
import Textarea from '@/components/Textarea.vue'

const name = ref('')
const description = ref('')
const price = ref('')
const imageUrl = ref('')
const route = useRoute()
const specialId = computed(() => (typeof route.params.id === 'string' ? route.params.id : null))
const isEditing = computed(() => specialId.value !== null)

onMounted(async () => {
  if (!specialId.value) return

  const special = await getSpecial(specialId.value)
  console.log(special)
  name.value = special.name
  description.value = special.description
  price.value = special.price.toFixed(2)
  imageUrl.value = special.imageUrl
})

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
  const special = {
    name: name.value,
    description: description.value,
    price: Number(price.value.replace(',', '.')),
    imageUrl: imageUrl.value,
  }

  if (specialId.value) {
    await updateSpecial(specialId.value, special)
  } else {
    await createSpecial(special)
  }

  router.push('/specials')
}
</script>

<template>
  <AdminLayout>
    <h2 class="mb-4 text-xl font-bold">{{ isEditing ? 'Editar plat' : 'Nou plat' }}</h2>

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

      <ButtonDefault>{{ isEditing ? 'Actualitzar' : 'Guardar' }}</ButtonDefault>
    </form>
  </AdminLayout>
</template>
