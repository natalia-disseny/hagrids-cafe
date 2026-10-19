<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- <RouterLink
      to="/jocs-de-taula"
      class="rounded-xl bg-hagrids-green-500 text-white py-4 text-center font-semibold hover:bg-hagrids-green-300 transition"
    >
      🎲 Jocs de taula
    </RouterLink> -->

    <ButtonDefault :to="'/specials'">Especials de la setmana</ButtonDefault>

    <a
      href="https://www.instagram.com/hagridscafe/?hl=en"
      class="rounded-xl border-2 border-hagrids-green-500 text-hagrids-green-500 py-3 text-center font-semibold"
    >
      Instagram</a
    >
  </div>
</template>
