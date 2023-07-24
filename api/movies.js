const searchMovies = async (title, { page = 1, plot = 'full' } ) => {
  const config = useRuntimeConfig()

  let url = `${config.public.baseUrl}/?apikey=${config.public.apiKey}&plot=${plot}&s=${title}`

  if (page) {
    url+= `&page=${page}`
  }
  const movie = await fetch(url)
  const response = await movie.json()
  return response
}

const searchMovieByTitle = async (title) => {
  const config = useRuntimeConfig()

  let url = `${config.public.baseUrl}/?apikey=${config.public.apiKey}&plot=full&t=${title}`

  const movie = await fetch(url)
  const response = await movie.json()
  return response
}

export { searchMovies, searchMovieByTitle }