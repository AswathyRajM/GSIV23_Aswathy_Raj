import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchupComingMovies } from '../../apis/movieApis';

export const getUpcomingMovies = createAsyncThunk(
  '/getUpcomingMovies',
  async (page) => {
    const pageNumber = page ?? 1;
    const response = await fetchupComingMovies(pageNumber);
    return response;
  }
);

const initialState = {
  movieList: [],
  error: null,
  isLoading: false,
  totalPages: 0,
};

export const movieReducer = createSlice({
  name: 'movies',
  initialState,
  // reducers: {
  //   fetchUpcomingMovies: (state) => {
  //     movies.push;
  //   },
  // },
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
// export const { increment, decrement, incrementByAmount } = movieReducer.actions;

export default movieReducer.reducer;
