import { login } from '@/services/auth.service'
import { ref } from 'vue'

export function useAuth() {
  const error = ref('')
  const password = ref('')
  const loggedIn = ref(!!localStorage.getItem('token'))

  async function handleLogin() {
    error.value = ''

    try {
      const result = await login(password.value)

      localStorage.setItem('token', result.token)
      loggedIn.value = true
    } catch {
      error.value = 'Contrasenya incorrecta'
    }
  }

  return {
    error,
    password,
    loggedIn,
    handleLogin,
  }
}
