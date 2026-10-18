<script setup lang="ts">
import { useAuth } from '@/composables/useAuth.use'

const { error, password, loggedIn, handleLogin } = useAuth()
</script>

<template>
  <template v-if="loggedIn">
    <slot />
  </template>

  <template v-else>
    <h1 class="text-xl font-bold mb-4">Admin</h1>

    <form @submit="handleLogin">
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full border rounded-lg p-3"
      />

      <button type="submit" class="mt-4 w-full rounded-lg bg-indigo-600 text-white py-3">
        Login
      </button>
    </form>

    <p v-if="error" class="mt-2 text-red-500">
      {{ error }}
    </p>
  </template>
</template>
