import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovieDetails, fetchupComingMovies } from '../../apis/movieApis';

export const getUpcomingMovies = createAsyncThunk(
  '/getUpcomingMovies',
  async (page) => {
    const pageNumber = page ?? 1;
    const response = await fetchupComingMovies(pageNumber);
    return response;
  }
);

export const getMovieDetails = createAsyncThunk(
  '/getMovieDetails',
  async (id) => {
    const response = await fetchMovieDetails(id);
    return response;
  }
);

const initialState = {
  movieList: [],
  movieDetails: {},
  error: null,
  isLoading: false,
  totalPages: 1,
};

export const movieReducer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovieDetails: (state) => {
      state.movieDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUpcomingMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        const arr = [...state.movieList, ...action.payload.results];
        state.movieList = arr;
        state.totalPages = action.payload.total_pages;
        state.isLoading = false;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    // .addCase(getSearchResults.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(getSearchResults.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.movies = action.payload;
    // })
    // .addCase(getSearchResults.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

// Action creators are generated for each case reducer function
export const { clearMovieDetails } = movieReducer.actions;

export default movieReducer.reducer;
