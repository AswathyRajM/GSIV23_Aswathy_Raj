import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovies } from '../../util/redux/reducer/movieReducer';
import './MovieList.css';

function MoveiList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { isLoading, totalPages, movieList } = useSelector(
    (state) => state.movies
  );

  const fetchMoreMovies = () => {
    dispatch(getUpcomingMovies(page + 1));
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getUpcomingMovies(page));
  }, [dispatch, page]);

  const loader = (
    <div className='movie-card-loader' data-testid='movie-card-loader'>
      <div className='image-section-loader'></div>
      <div className='card-content-loader'>
        <div className='card-heading-rating-loader'>
          <p className='title-loader' data-testid='title-loader'></p>
          <p className='rating-loader' data-testid='rating-loader'></p>
        </div>
        <p className='overview-loader' data-testid='overview-loader'></p>
        <p className='overview-loader' data-testid='overview-loader'></p>
      </div>
    </div>
  );

  return (
    <>
      {isLoading || (movieList && movieList.length < 1) ? (
        <div className='movie-list-container'>
          {[...Array(25).keys()].map((i) => loader)}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={movieList?.length | 0}
          next={fetchMoreMovies}
          hasMore={true}
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
