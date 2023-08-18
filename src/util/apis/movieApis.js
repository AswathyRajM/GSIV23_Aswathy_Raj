import axios from 'axios';
import apiClient from './apiClient';
import { MOVIES_UPCOMING } from './endPoints';

export const fetchupComingMovies = async (page) => {
  try {
    const endpoint = `${MOVIES_UPCOMING}?page=${page}`;
    const response = await apiClient.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const fetchMovie = async (movieId) => {
  try {
    // const moveDetailsEndpoint = `/movie/${movieId}`;
    // let movieDetails = (await apiClient.get(moveDetailsEndpoint)).data;
    // const movieCreditsEndpoint = `${moveDetailsEndpoint}/credits`;
    // const cast = (await apiClient.get(movieCreditsEndpoint)).data;
    // const directors = cast.crew.filter(({ job }) => job === 'Director');
    // const director = directors.length > 0 ? directors[0] : undefined;
    // movieDetails.director = director !== undefined ? director.name : undefined;
    // movieDetails.castMem = cast.cast.map((person) => person.name);
    // return data;
    return {};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const searchMovie = async (name, page) => {
  try {
    const endpoint = `/search/movie?query=${name}&include_adult=false&page=${page}`;
    const response = await apiClient.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};
