<template>
  <div v-if="movies?.length" class="grid grid-cols-10 gap-4">
    <MoviesItem 
      v-for="movie in movies"
      :movie="movie"
      class="col-span-2"
    ></MoviesItem>
  </div>

  <div v-else class="text-center py-5">
    <p class="text-lg">There is no movies to display</p>
    <span class="text-sm">Please search something...</span>
  </div>
</template>

<script setup>

import { useMoviesStore } from '~/stores/movies'
const { movies } = useMoviesStore()

</script>
