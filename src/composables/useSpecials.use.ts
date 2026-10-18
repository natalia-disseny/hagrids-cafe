import { ref } from 'vue'
import type { Special } from '@/interfaces'
import { getSpecials } from '@/services/specials.service'

export function useSpecials() {
  const error = ref('')
  const loading = ref(false)
  const specials = ref<Special[]>([])

  async function loadSpecials() {
    loading.value = true
    error.value = ''

    try {
      specials.value = await getSpecials()
    } catch {
      error.value = 'Unable to load specials'
    } finally {
      loading.value = false
    }
  }

  return {
    specials,
    loadSpecials,
  }
}
