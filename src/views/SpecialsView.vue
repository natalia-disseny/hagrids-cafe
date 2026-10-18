<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpecials } from '@/composables/useSpecials.use'
import SpecialDish from '@/components/SpecialDish.vue'
import Loader from '@/components/Loader.vue'
import { useAuth } from '@/composables/useAuth.use'

const { loading, specials, loadSpecials } = useSpecials()
const { loggedIn } = useAuth()

onMounted(() => {
  loadSpecials()
})
</script>

<template>
  <h2 class="text-lg font-semibold text-stone-800">Especials</h2>

  <Loader v-if="loading" />

  <div v-if="loggedIn" class="mt-5 mb-10 flex flex-col gap-4">
    <RouterLink
      to="/specials/create"
      class="rounded-xl bg-hagrids-green text-white py-4 text-center font-semibold hover:bg-hagrids-green-lighter transition"
    >
      Afegir plat
    </RouterLink>
  </div>

  <SpecialDish v-for="special in specials" :key="special.name" :special="special" />
</template>
