import { computed, ref } from 'vue'
import type { Game } from '@/interfaces'
import { getGames } from '@/services/game.service'

export function useGames() {
  const error = ref('')

  const playerCount = ref<number | '6+' | null>(null)
  const playerOptions = computed(() => {
    const maxPlayers = Math.max(...games.value.map((g) => g.maxPlayers))

    return Array.from({ length: Math.min(maxPlayers, 6) }, (_, i) => i + 1)
  })

  const maxPlayTime = ref(999)
  const playTimeFilter = ref<'any' | 'short' | 'medium' | 'long' | 'epic'>('any')

  const loading = ref(false)
  const games = ref<Game[]>([])
  const search = ref('')

  const filteredGames = computed(() =>
    games.value.filter((game) => {
      let playerMatch = true

      if (playerCount.value !== null) {
        if (playerCount.value === '6+') {
          playerMatch = game.maxPlayers >= 6
        } else {
          playerMatch = playerCount.value >= game.minPlayers && playerCount.value <= game.maxPlayers
        }
      }

      const playTimeMatch = (() => {
        switch (playTimeFilter.value) {
          case 'short':
            return game.playingTime < 30

          case 'medium':
            return game.playingTime >= 30 && game.playingTime <= 60

          case 'long':
            return game.playingTime > 60 && game.playingTime <= 120

          case 'epic':
            return game.playingTime > 120

          default:
            return true
        }
      })()

      const searchMatch = game.name.toLowerCase().includes(search.value.toLowerCase())

      return playerMatch && playTimeMatch && searchMatch
    }),
  )

  async function loadGames() {
    loading.value = true
    error.value = ''

    try {
      games.value = await getGames()
    } catch {
      error.value = 'Unable to load games'
    } finally {
      loading.value = false
    }
  }

  return {
    error,
    filteredGames,
    loading,
    maxPlayTime,
    playerCount,
    playerOptions,
    playTimeFilter,
    search,
    loadGames,
  }
}
