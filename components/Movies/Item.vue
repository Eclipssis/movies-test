<template>
  <NuxtLink :to="`movies/${slug}`" class="block font-outfit shadow-sm">
    <span class="block h-[430px]">
      <img 
        :src="movie.Poster" 
        :alt="movie.Title"
        class="w-full h-full object-cover"
      >
    </span>
    <span class="block p-2 bg-slate-200">
      <h2 class="text-xl">{{ movie.Title }}</h2>
      <span class="block text-xs">{{ movie.Year }}</span>
    </span>
  </NuxtLink>
</template>

<script setup>

const props = defineProps({
  movie: Object
})

const slug = computed(() => {
  return props.movie.Title.replaceAll(' ', '-').toLowerCase()
})

</script>
