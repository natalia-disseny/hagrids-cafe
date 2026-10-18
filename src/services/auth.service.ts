import { API_URL } from '@/config'

export async function login(password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
    }),
  })

  if (!response.ok) {
    throw new Error('Invalid password')
  }

  return response.json()
}
