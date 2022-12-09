// import axios from 'axios'
export const getMovies = async (name) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apiKey=da2b6785&s=${name}&type=movie`
    );
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getMovieIds = async (name) => {
  try {
    const movies = await getMovies(name);
    return movies.Search.map((movie) => ({
      params: {
        id: `${movie.imdbID}`,
      },
    }));
  } catch (error) {
    return error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apiKey=da2b6785&i=${id}&Plot=full`
    );
    return response.json();
  } catch (error) {
    return error;
  }
};
