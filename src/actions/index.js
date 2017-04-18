export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie
  }
}

export function addShow(show) {
  return {
    type: 'ADD_SHOW',
    show
  }
}