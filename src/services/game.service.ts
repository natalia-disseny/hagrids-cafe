import type { Game } from '@/interfaces'

export async function getGames(): Promise<Game[]> {
  const response = await fetch('https://hagrids-back.onrender.com/games')

  return response.json()
}
