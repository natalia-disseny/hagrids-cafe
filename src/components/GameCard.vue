<script setup lang="ts">
import type { Game } from '@/interfaces'

defineProps<{
  game: Game
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <a :href="`https://boardgamegeek.com/boardgame/${game.id}`">
      <h3 class="font-bold text-lg text-hagrids-green">
        {{ game.name }}
      </h3>
    </a>

    <div class="flex flex-row gap-x-2">
      <a :href="`https://boardgamegeek.com/boardgame/${game.id}`">
        <img :src="game.thumbnail" :alt="game.name" class="rounded-xl h-30" />
      </a>

      <div class="flex flex-col gap-y-3">
        <div class="bg-stone-100 px-2 py-1 rounded-lg w-fit flex gap-x-2">
          <div class="material-symbols-outlined text-hagrids-pink-500">group</div>
          <span>{{ game.minPlayers }}-{{ game.maxPlayers }}</span>
        </div>

        <div class="bg-stone-100 px-2 py-1 rounded-lg w-fit flex gap-x-2">
          <div class="material-symbols-outlined text-hagrids-pink-500">schedule</div>
          <span>{{ game.playingTime }} min</span>
        </div>

        <div class="bg-stone-100 px-2 py-1 rounded-lg w-fit flex gap-x-2">
          <div class="material-symbols-outlined text-hagrids-pink-500">family_star</div>
          <span>{{ game.averageRating.toFixed(1) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
