import type { Game } from '@/interfaces'
import { API_URL } from '@/config'

export async function getGames(): Promise<Game[]> {
  const response = await fetch(`${API_URL}/games`)

  return response.json()
}
