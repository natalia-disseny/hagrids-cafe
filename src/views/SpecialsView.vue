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
  <Loader v-if="loading" />

  <div v-if="loggedIn" class="mt-5 mb-10 flex flex-col gap-4">
    <RouterLink
      to="/specials/create"
      class="rounded-xl bg-hagrids-green-500 text-white py-4 text-center font-semibold hover:bg-hagrids-green-300 transition"
    >
      Afegir plat
    </RouterLink>
  </div>

  <div class="flex flex-col gap-y-8">
    <SpecialDish v-for="special in specials" :key="special.name" :special="special" />
  </div>
</template>
