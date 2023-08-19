import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUpcomingMovies,
  searchMovies,
} from '../../util/redux/reducer/movieReducer';
import './MovieList.css';
import { Loader } from '../MovieListLoader';

function MoveiList() {
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const dispatch = useDispatch();
  const { totalPages, movieList, currentPage, searchTerm } = useSelector(
    (state) => state.movies
  );

  const fetchMoreMovies = () => {
    if (page > totalPages) return;
    if (searchTerm.length > 0) {
      setPage(1);
      dispatch(searchMovies({ movieName: searchTerm, page: pageSearch }));
      setPageSearch(pageSearch + 1);
      return;
    }
    dispatch(getUpcomingMovies(page + 1));
    setPage(page + 1);
    setPageSearch(1);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      setPage(1);
      dispatch(searchMovies({ movieName: searchTerm, page: pageSearch }));
      setPageSearch(pageSearch + 1);
    } else if (currentPage !== page) {
      dispatch(getUpcomingMovies(page));
      setPageSearch(1);
      setPage(page + 1);
    }
  }, [dispatch, searchTerm]);

  return (
    <>
      <InfiniteScroll
        dataLength={movieList?.length | 0}
        next={fetchMoreMovies}
        hasMore={page <= totalPages}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
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
