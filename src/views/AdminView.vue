<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import AdminLayout from '@/templates/AdminLayout.vue'
</script>

<template>
  <AdminLayout>
    <div class="mt-10 flex flex-col gap-4">
      <ButtonDefault :to="'/specials'">Especials</ButtonDefault>
    </div>
  </AdminLayout>
</template>
