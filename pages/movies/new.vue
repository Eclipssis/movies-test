<template>
  <div class="py-8">
    <h1 class="text-5xl text-center font-bungee-spice mb-8">Add new movie</h1>

    <form class="max-w-md mx-auto" @click.prevent>
      <div class="mb-3">
        <label class="uppercase text-sm">Title</label>
        <input
          v-model="newMovieFileds.Title"
          class="text-sm border border-gray-300 w-full h-10 rounded-lg px-3" 
          placeholder="Enter title"
        >
      </div>

      <div class="mb-3">
        <label class="uppercase text-sm">Poster URL</label>
        <input
          v-model="newMovieFileds.Poster"
          class="text-sm border border-gray-300 w-full h-10 rounded-lg px-3" 
          placeholder="Enter poster URL"
        >
      </div>

      <div class="mb-3">
        <label class="uppercase text-sm">Director</label>
        <input
          v-model="newMovieFileds.Director"
          class="text-sm border border-gray-300 w-full h-10 rounded-lg px-3" 
          placeholder="Enter director"
        >
      </div>

      <div class="mb-3">
        <label class="uppercase text-sm">Year</label>
        <input 
          v-model="newMovieFileds.Year"
          class="text-sm border border-gray-300 w-full h-10 rounded-lg px-3" 
          placeholder="Enter year"
        >
      </div>

      <div class="flex justify-between">
        <button 
          type="submit" 
          class="h-10 bg-green-700 px-3 text-white rounded-lg"
          @click="addNewMovie"
        >
          Add
        </button>

        <NuxtLink 
          to="/"
          class="inline-block leading-9 h-10 bg-orange-400 px-3 text-white rounded-lg ml-2"
        >
          Go to Search Page 
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>
let newMovieFileds = ref({
  Title: '',
  Poster: '',
  Director: '',
  Year: ''
})

const addNewMovie = () => {
  let moviesList = []
  let localMoviesList = localStorage.getItem('movies')

  if (localMoviesList) {
    moviesList = JSON.parse(localMoviesList)
  }

  if (!newMovieFileds.value.Poster) {
    newMovieFileds.value.Poster = 'https://placehold.co/300x430?text=Poster Image'
  }

  moviesList.push(newMovieFileds.value)

  localStorage.setItem('movies', JSON.stringify(moviesList))

  newMovieFileds.value = {
    Title: '',
    Poster: '',
    Director: '',
    Year: ''
  }
}
</script>
