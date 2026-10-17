export interface Game {
  id: number
  name: string
  thumbnail: string
  minPlayers: number
  maxPlayers: number
  playingTime: number
  averageRating: number
  wishlist: boolean
}
