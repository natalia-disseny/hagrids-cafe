<script setup lang="ts">
import { onMounted } from 'vue'
import { useGames } from '@/composables/useGames.use'
import GameCard from '@/components/GameCard.vue'
import Loader from '@/components/Loader.vue'

const { filteredGames, loading, playerCount, playerOptions, playTimeFilter, search, loadGames } =
  useGames()

onMounted(() => {
  loadGames()
})
</script>

<template>
  <h2 class="mb-4 text-lg font-semibold text-stone-800">Filtrar jocs</h2>

  <div class="grid gap-4 md:grid-cols-3">
    <div>
      <label class="mb-2 flex gap-2 text-sm font-medium text-stone-600">
        <div class="material-symbols-outlined text-hagrids-pink-500">search</div>
        Cerca
      </label>

      <input
        v-model="search"
        type="text"
        placeholder="Catan..."
        class="bg-stone-100 appearance-none border-2 border-stone-100 rounded-xl w-full py-2 px-4 text-stone-700 leading-tight focus:outline-none focus:bg-white focus:border-hagrids-green-300"
      />
    </div>

    <div>
      <label class="mb-2 text-sm font-medium text-stone-600 flex gap-2">
        <div class="material-symbols-outlined text-hagrids-pink-500">group</div>
        Jugadors
      </label>

      <select
        v-model="playerCount"
        class="bg-stone-100 border-2 border-stone-100 rounded-xl w-full py-2 px-4 text-stone-700 leading-tight focus:outline-none focus:bg-white focus:border-hagrids-green-300"
      >
        <option :value="null">Qualsevol</option>

        <option v-for="player in playerOptions" :key="player" :value="player">
          {{ player }}
        </option>

        <option value="6+">6 o més</option>
      </select>
    </div>

    <div>
      <label class="mb-2 flex gap-2 text-sm font-medium text-stone-600">
        <div class="material-symbols-outlined text-hagrids-pink-500">schedule</div>
        Durada
      </label>

      <select
        v-model="playTimeFilter"
        class="bg-stone-100 border-2 border-stone-100 rounded-xl w-full py-2 px-4 text-stone-700 leading-tight focus:outline-none focus:bg-white focus:border-hagrids-green-300"
      >
        <option value="any">Qualsevol</option>
        <option value="short">Menys de 30 min</option>
        <option value="medium">30-60 min</option>
        <option value="long">60-120 min</option>
        <option value="epic">Més de 2 hores</option>
      </select>
    </div>
  </div>

  <Loader v-if="loading" />

  <div class="grid gap-y-8 md:grid-cols-2 xl:grid-cols-3 mt-10">
    <div class="text-sm text-stone-500">{{ filteredGames.length }} jocs trobats</div>

    <GameCard v-for="game in filteredGames" :key="game.id" :game="game" />
  </div>
</template>
