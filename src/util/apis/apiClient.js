import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_ACCESSS_TOKEN}`,
  },
});

export default apiClient;
