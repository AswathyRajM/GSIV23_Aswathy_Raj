import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducer/movieReducer';
// import singleMovieReducer from '../reducers/singleMovieReducer';

const store = configureStore({
  reducer: {
    // movieDetails: singleMovieReducer,
    movies: movieReducer,
  },
});

export default store;
