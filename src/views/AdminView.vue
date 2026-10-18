<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/services/auth.service'
import AdminMenu from '@/components/AdminMenu.vue'

const password = ref('')
const error = ref('')

const loggedIn = ref(!!localStorage.getItem('token'))

async function handleLogin() {
  error.value = ''

  try {
    const result = await login(password.value)

    localStorage.setItem('token', result.token)
    loggedIn.value = !!localStorage.getItem('token')
  } catch {
    error.value = 'Contrasenya incorrecta'
  }
}
</script>

<template>
  <template v-if="!loggedIn">
    <h1 class="text-xl font-bold mb-4">Admin</h1>

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-full border rounded-lg p-3"
    />

    <button @click="handleLogin" class="mt-4 w-full rounded-lg bg-indigo-600 text-white py-3">
      Login
    </button>

    <p v-if="error" class="mt-2 text-red-500">
      {{ error }}
    </p>
  </template>

  <AdminMenu v-else />
</template>
