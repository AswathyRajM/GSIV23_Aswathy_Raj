import React, { useEffect } from 'react';
import './MovieDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovieDetails,
  clearMovieDetails,
} from '../../util/redux/reducer/movieReducer';
import imageNotFountUrl from '../../assets/images/movie-not-found-icon.png';
import { DetailsLoader } from '../MovieListLoader';

function MovieDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movieId } = useParams();
  const { movieDetails, isLoading, error } = useSelector(
    (state) => state.movies
  );

  function formatTime(totalMinutes) {
    let hours = totalMinutes / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + ' hour(s) and ' + rminutes + ' minute(s)';
  }

  const imgUrl =
    movieDetails && movieDetails.poster_path
      ? `${process.env.REACT_APP_POSTER_URL}/w400${movieDetails.poster_path}`
      : movieDetails && movieDetails.backdrop_path
      ? `${process.env.REACT_APP_POSTER_URL}/w400${movieDetails.backdrop_path}`
      : imageNotFountUrl;

  useEffect(() => {
    if (movieId === undefined || isNaN(movieId)) navigate('/movie-not-found');
    else dispatch(getMovieDetails(parseInt(movieId)));
    return () => {
      dispatch(clearMovieDetails());
    };
  }, [movieId]);

  if (
    !movieDetails ||
    Object.keys(movieDetails).length === 0 ||
    movieDetails.release_date === undefined 
  )
    return <DetailsLoader />;
  return (
    <div className='details-container'>
      <div className='details-main'>
        <div className='image-container'>
          <img src={imgUrl} alt={movieDetails.title} />
        </div>
        <div className='movie-details'>
          <p className='movie-title'>
            {movieDetails.title}
            <span className='movie-rating'>
              ⭐ {movieDetails.vote_average} ratings
            </span>
          </p>
          <p className='movie-info'>
            Release Year {movieDetails.release_date.slice(0, 4)} <span>|</span>
            Running Time {formatTime(movieDetails.runtime)}
            <span>|</span>
            Director(s){' '}
            {movieDetails.director.map((direct, i) => {
              if (i > 0) return `, ${direct.name} `;
              else return `${direct.name} `;
            })}
          </p>
          <p className='sub-heading'>Casts </p>
          <p className='movie-info cast-info-container padding'>
            {movieDetails.casts.slice(0, 12).map((cast, i) => {
              if (i === 11)
                return (
                  <>
                    <span className='cast-info'> {cast}</span>...
                  </>
                );
              return <span className='cast-info'> {cast}</span>;
            })}
          </p>
          <p className='sub-heading'>Description </p>
          <p className='movie-info padding'>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
