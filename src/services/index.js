import axios from 'axios';

const OMDb_API = 'https://www.omdbapi.com/?apikey=215c90a2';
const searchURL = heroName => `${OMDb_API}&s=${heroName}`;
const movieDetailsURL = imdbID => `${OMDb_API}&i=${imdbID}`;

export const getMovies = async heroName => {
  const response = await axios.get(searchURL(heroName)).catch(error => {
    throw new Error(error);
  });
  return response?.data;
};

export const getMovieDetails = async imdbID => {
  const response = await axios.get(movieDetailsURL(imdbID)).catch(error => {
    throw new Error(error);
  });
  return response?.data;
};
