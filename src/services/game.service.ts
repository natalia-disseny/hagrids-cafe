import type { Game } from '@/interfaces'

export async function getGames(): Promise<Game[]> {
  const response = await fetch('http://localhost:3000/api/library')

  return response.json()
}
