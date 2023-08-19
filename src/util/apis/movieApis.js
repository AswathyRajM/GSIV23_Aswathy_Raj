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

export const fetchMovieDetails = async (movieId) => {
  try {
    const moveDetailsEndpoint = `/movie/${movieId}`;
    let r = {
      adult: false,
      backdrop_path: '/xjcQI6O8xZCFtLVjp2IckYgDqV6.jpg',
      belongs_to_collection: null,
      budget: 0,
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
      ],
      homepage: '',
      id: 124,
      imdb_id: 'tt0086961',
      original_language: 'pl',
      original_title: 'Bez końca',
      overview:
        '1982, Poland. A translator loses her husband and becomes a victim of her own sorrow. She looks to sex, to her son, to law, and to hypnotism when she has nothing else in this time of martial law when Solidarity was banned.',
      popularity: 3.807,
      poster_path: '/3pdF1guvIxNgmhDkmXJHCCk0PkC.jpg',
      production_companies: [
        {
          id: 1587,
          logo_path: null,
          name: 'Film Polski',
          origin_country: 'PL',
        },
        {
          id: 73037,
          logo_path: null,
          name: 'Studio Filmowe Tor',
          origin_country: 'PL',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'PL',
          name: 'Poland',
        },
      ],
      release_date: '1985-06-17',
      revenue: 0,
      runtime: 108,
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
        {
          english_name: 'Polish',
          iso_639_1: 'pl',
          name: 'Polski',
        },
      ],
      status: 'Released',
      tagline: '',
      title: 'No End',
      video: false,
      vote_average: 7.4,
      vote_count: 71,
    };

    const { data } = await apiClient.get(moveDetailsEndpoint);

    const { crew, cast } = (
      await apiClient.get(`${moveDetailsEndpoint}/credits`)
    ).data;

    let c = {
      id: 124,
      cast: [
        {
          adult: false,
          gender: 1,
          id: 1384,
          known_for_department: 'Acting',
          name: 'Grażyna Szapołowska',
          original_name: 'Grażyna Szapołowska',
          popularity: 7.848,
          profile_path: '/1Ddm2eY5sPHXy0AG9ksALlGop42.jpg',
          cast_id: 7,
          character: 'Urszula Zyro',
          credit_id: '52fe421bc3a36847f8004887',
          order: 0,
        },
        {
          adult: false,
          gender: 1,
          id: 1385,
          known_for_department: 'Acting',
          name: 'Maria Pakulnis',
          original_name: 'Maria Pakulnis',
          popularity: 1.391,
          profile_path: '/ofUBgXCzbSa9ferpAINvSYgXEF8.jpg',
          cast_id: 8,
          character: 'Joanna Stach',
          credit_id: '52fe421bc3a36847f800488b',
          order: 1,
        },
      ],
    };
    data.director = crew.filter(({ job }) => job === 'Director');
    data.casts = cast.map((person) => person.name);

    return data;
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
