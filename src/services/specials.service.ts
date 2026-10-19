import { API_URL } from '@/config'
import type { Special } from '@/interfaces'

export async function getSpecials(): Promise<Special[]> {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/specials`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

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

export async function getSpecial(id: string): Promise<Special> {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/specials/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.json()
}

export async function updateSpecial(
  id: string,
  special: {
    name: string
    description: string
    price: number
    imageUrl: string
  },
) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/specials/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(special),
  })

  return response.json()
}

export async function deleteSpecial(id: string): Promise<void> {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/specials/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to delete special')
  }
}
