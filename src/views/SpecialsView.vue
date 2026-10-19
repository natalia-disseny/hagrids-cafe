<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpecials } from '@/composables/useSpecials.use'
import SpecialDish from '@/components/SpecialDish.vue'
import Loader from '@/components/Loader.vue'
import { useAuth } from '@/composables/useAuth.use'
import ButtonDefault from '@/components/ButtonDefault.vue'

const { loading, specials, loadSpecials } = useSpecials()
const { loggedIn } = useAuth()

onMounted(() => {
  loadSpecials()
})
</script>

<template>
  <div v-if="loggedIn" class="mt-5 mb-10 flex flex-col gap-4">
    <ButtonDefault to="/specials/create">Afegir plat</ButtonDefault>
  </div>

  <Loader v-if="loading" />

  <div class="flex flex-col gap-y-8">
    <SpecialDish v-for="special in specials" :key="special.name" :special="special" />
  </div>
</template>
