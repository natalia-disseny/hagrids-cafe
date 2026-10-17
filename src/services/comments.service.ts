const API_URL = 'https://hagrids-back.onrender.com'

export async function getComments(gameId: number) {
  const response = await fetch(`${API_URL}/games/${gameId}/comments`)

  return response.json()
}

export async function createComment(gameId: number, text: string) {
  const response = await fetch(`${API_URL}/games/${gameId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  })

  return response.json()
}
