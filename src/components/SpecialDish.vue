<script setup lang="ts">
import type { Special } from '@/interfaces'
import { useAuth } from '@/composables/useAuth.use'
import ButtonDefault from './ButtonDefault.vue'

const { loggedIn } = useAuth()

defineProps<{
  special: Special
}>()
</script>

<template>
  <div class="special flex flex-col gap-2 shadow-xl rounded-xl overflow-auto">
    <div class="relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHBJjfa-0ylKwyc70srUaxyjHUe_lqWVd4EAzx_mD6SYTEJ52PHccJ_jqvwY4HEn67WLnAURjgDA0kuvJrzM-MN4XI_iGQmUAI0iSwjZ5&s=10"
        :alt="special.name"
      />
      <img src="/public/iconNew.svg" class="absolute top-0 right-0 w-20" />
    </div>

    <div class="p-4">
      <h3 class="text-lg font-semibold text-hagrids-pink-600">
        {{ special.name }}
      </h3>
      <p>{{ special.description }}</p>
      <div class="special__price mt-2 text-right text-hagrids-pink-600 font-bold">
        <span class="bg-white inline pl-3 relative z-10">{{ special.price.toFixed(2) }} €</span>
      </div>

      <div v-if="loggedIn" class="flex flex-col gap-2 mt-4">
        <ButtonDefault :to="`/specials/${special._id}/edit`" variant="ghost">
          Editar
        </ButtonDefault>
        <ButtonDefault>Eliminar</ButtonDefault>
      </div>
    </div>
  </div>
</template>

<style>
.special__price {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    border-top: dotted var(--color-hagrids-pink-100) 5px;
    left: 0;
    top: 50%;
  }
}
</style>
