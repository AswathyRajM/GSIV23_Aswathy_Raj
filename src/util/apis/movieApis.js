import axios from 'axios';
import apiClient from './apiClient';

export const fetchupComingMovies = async (page) => {
  try {
    const endpoint = `/movie/upcoming?page=${page}`;
    const response = await apiClient.get(endpoint);
    const data = response.data;
    data.page = page;
    return data;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const moveDetailsEndpoint = `/movie/${movieId}`;

    const { data } = await apiClient.get(moveDetailsEndpoint);

    const { crew, cast } = (
      await apiClient.get(`${moveDetailsEndpoint}/credits`)
    ).data;

    data.director = crew.filter(({ job }) => job === 'Director');
    data.casts = cast.map((person) => person.name);

    return data;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const searchMovie = async (movieName, page) => {
  try {
    const endpoint = `/search/movie?query=${movieName}&page=${page}`;
    const response = await apiClient.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};
