import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieDetails,
  fetchupComingMovies,
  searchMovie,
} from "../../apis/movieApis";

export const getUpcomingMovies = createAsyncThunk(
  "/getUpcomingMovies",
  async (page) => {
    const pageNumber = page ?? 1;
    const response = await fetchupComingMovies(pageNumber);
    return response;
  },
);

export const getMovieDetails = createAsyncThunk(
  "/getMovieDetails",
  async (id) => {
    const response = await fetchMovieDetails(id);
    return response;
  },
);

export const searchMovies = createAsyncThunk(
  "/search/movie",
  async ({ movieName, page }) => {
    const response = await searchMovie(movieName, page);
    return response;
  },
);

const initialState = {
  movieList: [],
  movieDetails: {},
  error: null,
  isLoading: false,
  totalPages: 1,
  currentPage: 0,
  searchTerm: "",
};

export const movieReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovieDetails: (state) => {
      state.movieDetails = {};
    },
    clearState: (state) => {
      state.currentPage = 0;
      state.movieList = [];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // GET UPCOMING MOVIES
      .addCase(getUpcomingMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        const results = Array.isArray(action?.payload?.results)
          ? action.payload.results
          : [];
        if (results.length === 0) {
          state.isLoading = false;
          return;
        }

        state.movieList = [...state.movieList, ...results];
        state.totalPages = action?.payload?.total_pages ?? state.totalPages;
        state.currentPage = action?.payload?.page ?? state.currentPage;
        state.isLoading = false;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // GET MOVIE DETAILS
      .addCase(getMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload ?? {};
        state.isLoading = false;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // SEARCH MOVIES
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        const results = Array.isArray(action?.payload?.results)
          ? action.payload.results
          : [];
        state.movieList = [...state.movieList, ...results];
        state.totalPages = action?.payload?.total_pages ?? state.totalPages;
        state.isLoading = false;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators
export const { clearMovieDetails, clearState, setSearchTerm } =
  movieReducer.actions;

export default movieReducer.reducer;
