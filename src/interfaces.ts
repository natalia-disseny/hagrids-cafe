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

export interface Special {
  id: number
  name: string
  ingredients: string[]
  price: number
  imageUrl: string
}
