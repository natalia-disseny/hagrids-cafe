import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import { parseStringPromise } from 'xml2js'

const app = express()

app.use(cors())

async function getCollection() {
  const xml = await fs.readFile('./data/gamesCollection.xml', 'utf8')

  return parseStringPromise(xml)
}

app.get('/api/library', async (req, res) => {
  const collection = await getCollection()

  const games = collection.items.item.map((item) => ({
    id: Number(item.$.objectid),
    name: item.name[0]._,
    thumbnail: item.thumbnail[0],
    minPlayers: Number(item.stats[0].$.minplayers),
    maxPlayers: Number(item.stats[0].$.maxplayers),
    playingTime: Number(item.stats[0].$.playingtime),
    averageRating: Number(item.stats[0].rating[0].average[0].$.value),
    wishlist: item.status[0].$.wishlist === '1',
  }))

  res.json(games)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
