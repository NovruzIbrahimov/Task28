import movieData from "../data/fakeData";

function getMovies() {
  return Promise.resolve(movieData);
}

function getMovieById(id) {
  return Promise.resolve(movieData.find((movie) => movie.id === parseInt(id)));
}

export { getMovies, getMovieById };
