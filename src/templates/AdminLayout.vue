<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
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
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full border rounded-lg p-3"
      />

      <ButtonDefault class="w-full" type="submit">Login</ButtonDefault>
    </form>

    <p v-if="error" class="mt-2 text-red-500">
      {{ error }}
    </p>
  </template>
</template>
