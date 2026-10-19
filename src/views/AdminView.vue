<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import AdminLayout from '@/templates/AdminLayout.vue'
</script>

<template>
  <AdminLayout>
    <div class="flex flex-col gap-4">
      <ButtonDefault to="/specials">🥞 Especials de la setmana</ButtonDefault>
    </div>
  </AdminLayout>
</template>
