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
  _id: string
  name: string
  description: string
  price: number
  imageUrl: string
  active: boolean
  newProduct: boolean
}
