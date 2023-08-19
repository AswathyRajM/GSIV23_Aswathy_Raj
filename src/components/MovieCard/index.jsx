import React from 'react';
import { Link } from 'react-router-dom';
import imageNotFountUrl from '../../assets/images/movie-not-found-icon.png';
import './MovieCard.css';

function MovieCard({ movie }) {
  const imgUrl = movie.poster_path
    ? `${process.env.REACT_APP_POSTER_URL}/w300${movie.poster_path}`
    : imageNotFountUrl;

  return (
    <div className='movie-card' data-testid='movie-card'>
      <Link
        to={`/movie/details/${movie.id}`}
        data-testid='card'
        className='card'
      >
        <div
          className={
            movie.poster_path ? 'image-section image-found' : 'image-section'
          }
        >
          <img src={imgUrl} alt={movie.title + 'image'} />
        </div>
        <div className='card-content'>
          <div className='card-heading-rating'>
            <p className='movie-title' data-testid='movie-title'>
              {movie.title}
            </p>
            {movie.vote_average > 0 && (
              <p className='movie-rating' data-testid='movie-rating'>
                ⭐ {movie.vote_average}
              </p>
            )}
          </div>

          <p className='movie-overview' data-testid='movie-overview'>
            {movie.overview}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
