import { API_URL } from '@/config'
import type { Special } from '@/interfaces'

export async function getSpecials(): Promise<Special[]> {
  const response = await fetch(`${API_URL}/specials`)

  return response.json()
}

export async function createSpecial(special: {
  name: string
  description: string
  price: number
  imageUrl: string
}) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_URL}/specials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(special),
  })

  return response.json()
}
