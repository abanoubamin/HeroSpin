import axios from 'axios';

const OMDb_API = 'https://www.omdbapi.com/?apikey=215c90a2';
const searchURL = heroName => `${OMDb_API}&s=${heroName}`;

export const getMovies = async heroName => {
  const response = await axios.get(searchURL(heroName)).catch(error => {
    throw new Error(error);
  });
  return response?.data;
};
