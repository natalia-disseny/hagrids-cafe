<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
</script>

<template>
  <div class="mt-10 flex flex-col gap-4">
    <!-- <RouterLink
      to="/jocs-de-taula"
      class="rounded-xl bg-hagrids-green text-white py-4 text-center font-semibold hover:bg-hagrids-green-lighter transition"
    >
      🎲 Jocs de taula
    </RouterLink> -->

    <ButtonDefault :to="'/specials'">Especials de la setmana</ButtonDefault>

    <a
      href="https://www.instagram.com/hagridscafe/?hl=en"
      class="rounded-xl border-2 border-hagrids-green text-hagrids-green py-4 text-center font-semibold"
    >
      Instagram</a
    >
  </div>
</template>
