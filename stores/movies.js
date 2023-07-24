import { defineStore } from 'pinia'
import { searchMovies, searchMovieByTitle } from "@/api/movies";

export const useMoviesStore = defineStore('movies', () => {
	let moviesList = ref([])

  const searchMoviesList = async (movieTitle, pagination) => {
    moviesList.value = []

    const response = await searchMovies(movieTitle, {
      page: pagination.value.page
    })

    const localMovies = localStorage.getItem('movies')
    if (localMovies) {
      const movies = JSON.parse(localMovies)
      const result = movies.filter(item => item.Title.toLocaleLowerCase().includes(movieTitle.toLocaleLowerCase()))
      if (result.length) {
        moviesList.value.push(...result)
      }
    }

    if (response.Search) {
      moviesList.value.push(...response.Search)
    }
    
  }

  const movies = computed(() => {
    return moviesList
  })

  const onSearchMovieByTitle = async (movieTitle) => {
    const localMovies = localStorage.getItem('movies')
    if (localMovies) {
      const movies = JSON.parse(localMovies)
      const result = movies.find(item => item.Title.toLocaleLowerCase().includes(movieTitle.toLocaleLowerCase()))
      if (result) {
        return result
      }
    }

    return await searchMovieByTitle(movieTitle)
  }

	return {
    onSearchMovieByTitle,
    searchMoviesList,
		movies,
	}
})
