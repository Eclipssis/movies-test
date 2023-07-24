<template>
  <div class="my-6">
    <form class="flex max-w-xs mx-auto" @submit.prevent="onSearch">
      <input
        v-model="movieSearchTitle" 
        class="text-sm border border-gray-300 w-full h-10 rounded-lg px-3" placeholder="Search movie...">
      <!-- TODO: make button component -->
      <button type="submit" class="h-10 bg-green-700 px-3 text-white rounded-lg ml-2">Search</button>
    </form>
  </div>
</template>

<script setup>
import { useMoviesStore } from '~/stores/movies'
const { searchMoviesList } = useMoviesStore()
const router = useRouter()

let movieSearchTitle = ref('') 
let pagination = ref({
  page: 1
})

const onSearch = async () => {
  await searchMoviesList(movieSearchTitle.value, pagination)
  router.push('/results')
}
</script>
