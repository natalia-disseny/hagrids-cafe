<script setup lang="ts">
import AdminLayout from '@/templates/AdminLayout.vue'
</script>

<template>
  <AdminLayout>
    <div class="mt-10 flex flex-col gap-4">
      <RouterLink
        to="/specials"
        class="rounded-xl bg-hagrids-green text-white py-4 text-center font-semibold hover:bg-hagrids-green-lighter transition"
      >
        Especials
      </RouterLink>
    </div>
  </AdminLayout>
</template>
