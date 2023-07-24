<template>
  <div class="container mx-auto py-10 font-outfit" v-if="movie"> 
    <div class="flex justify-between">
      <div class="flex flex-col items-start">
        <h1 class="font-outfit text-3xl mb-3 uppercase">{{ movie.Title }}</h1>
        <div>
          <span class="inline-block min-w-[100px]">Director:</span> 
          {{ movie.Director }}
        </div>
        <div class="mb-4">
          <span class="inline-block min-w-[100px]">Year:</span>
          {{ movie.Year }}
        </div>

        <p class="max-w-2xl mb-4">{{ movie.Plot }}</p>

        <NuxtLink 
          class="block mt-auto h-10 leading-9 bg-gray-700 px-3 text-white rounded-lg"
          to="/results"
        >
          &#60; Back
        </NuxtLink>
      </div>
      
      <div>
        <img :src="movie.Poster" :alt="movie.Title">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMoviesStore } from '~/stores/movies'

const { onSearchMovieByTitle } = useMoviesStore()
const route = useRoute()

let movie = ref(null)

onMounted(async () => {
  const movieTitle = route.params.id.replaceAll('-', ' ')

  const response = await onSearchMovieByTitle(movieTitle)
  movie.value = response
})
</script>
