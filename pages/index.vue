<template>
  <div class="py-8">
    <h1 class="text-5xl text-center font-bungee-spice">Movies finder</h1>
    <MoviesSearch></MoviesSearch>
    <div class="text-center">
      <button 
        class="h-10 bg-green-700 px-3 text-white rounded-lg"
        @click="router.push('movies/new')"
      >
        Add movie
      </button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
</script>
