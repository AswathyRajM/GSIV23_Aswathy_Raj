import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearState,
  getUpcomingMovies,
  searchMovies,
} from '../../util/redux/reducer/movieReducer';
import './MovieList.css';
import { Loader } from '../MovieListLoader';

function MoveiList() {
  const [page, setPage] = useState(0);
  const [pageSearch, setPageSearch] = useState(0);
  const dispatch = useDispatch();
  const { totalPages, movieList, currentPage, searchTerm, isLoading } =
    useSelector((state) => state.movies);

  const fetchMoreMovies = () => {
    if (page + 1 > totalPages) return;
    if (searchTerm.length > 0) {
      dispatch(searchMovies({ movieName: searchTerm, page: pageSearch + 1 }));
      setPageSearch(pageSearch + 1);
      return;
    }
    dispatch(getUpcomingMovies(page + 1));
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchTerm?.length > 0) {
      setPage(0);
      setPageSearch(1);
      dispatch(searchMovies({ movieName: searchTerm, page: 1 }));
    } else if (currentPage !== page + 1) {
      setPageSearch(1);
      setPage(1);
      dispatch(getUpcomingMovies(1));
    }
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, searchTerm]);

  return (
    <>
      {isLoading && movieList.length === 0 && <Loader />}
      <InfiniteScroll
        dataLength={movieList.length}
        next={fetchMoreMovies}
        hasMore={page + 1 < totalPages}
        loader={<Loader />}
        endMessage={
          isLoading ? (
            <></>
          ) : movieList.length === 0 ? (
            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              <b>No movies found!</b>
            </p>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              <b>That's all for now!</b>
            </p>
          )
        }
      >
        <div className='movie-list-container'>
          {movieList.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default MoveiList;
