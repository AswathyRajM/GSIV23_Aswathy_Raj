import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../MovieCard';
import ImageLoader from '../Loading/MovieListLoading';
import useWindowDimensions from '../../util/hooks/useWIndowDiamention';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovies } from '../../util/redux/reducer/movieReducer';
import './MovieList.css';

function MoveiList() {
  const [page, setPage] = useState(1);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const { isLoading, totalPages, movieList } = useSelector(
    (state) => state.movies
  );

  let limit = 15;
  if (width > 2000) {
    limit = 20;
  }

  const fetchMoreMovies = () => {
    dispatch(getUpcomingMovies(page + 1));
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getUpcomingMovies(page));
  }, [dispatch, page]);

  return (
    <>
      {isLoading || (movieList && movieList.length < 1) ? (
        <>
          <ImageLoader limit={limit} />
        </>
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
