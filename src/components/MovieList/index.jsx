import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovies } from '../../util/redux/reducer/movieReducer';
import './MovieList.css';
import { Loader } from '../MovieListLoader';

function MoveiList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { isLoading, totalPages, movieList } = useSelector(
    (state) => state.movies
  );

  const fetchMoreMovies = () => {
    if (page > totalPages) return;
    dispatch(getUpcomingMovies(page + 1));
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getUpcomingMovies(page));
  }, [dispatch, page]);

  return (
    <>
      {isLoading || (movieList && movieList.length < 1) ? (
        <div className='movie-list-container'>
          {[...Array(25).keys()].map((i) => {
            return (
              <div key={i}>
                <Loader />
              </div>
            );
          })}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={movieList?.length | 0}
          next={fetchMoreMovies}
          hasMore={page <= totalPages}
          loader={<h4>Loading...</h4>}
        >
          <div className='movie-list-container'>
            {movieList.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default MoveiList;
