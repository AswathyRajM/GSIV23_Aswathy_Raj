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
  }, [dispatch]);

  return (
    <>
      <InfiniteScroll
        dataLength={movieList?.length | 0}
        next={fetchMoreMovies}
        hasMore={page <= totalPages}
        loader={<LoaderComponent />}
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

const LoaderComponent = () => {
  let width = Math.ceil(window.innerWidth / (350 + 40));
  let height = Math.ceil(window.innerHeight / (450 + 40));
  return (
    <div className='movie-list-container'>
      {[...Array(width * height).keys()].map((i) => {
        return (
          <div key={i}>
            <Loader />
          </div>
        );
      })}
    </div>
  );
};

export default MoveiList;
