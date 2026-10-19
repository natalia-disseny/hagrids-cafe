<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import InputValue from '@/components/InputValue.vue'
import { useAuth } from '@/composables/useAuth.use'

const { error, password, loggedIn, handleLogin } = useAuth()
</script>

<template>
  <template v-if="loggedIn">
    <slot />
  </template>

  <template v-else>
    <h2 class="mb-4">Admin</h2>

    <form @submit="handleLogin" class="flex flex-col gap-4">
      <InputValue v-model="password" type="password" placeholder="Contrassenya" />
      <ButtonDefault class="w-full" type="submit">Entrar</ButtonDefault>
    </form>

    <p v-if="error" class="mt-2 text-red-500">
      {{ error }}
    </p>
  </template>
</template>
