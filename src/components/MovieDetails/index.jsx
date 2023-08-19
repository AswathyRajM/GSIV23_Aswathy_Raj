import React, { useEffect } from 'react';
import './MovieDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../util/redux/reducer/movieReducer';

function MovieDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { MovieDetails, isLoading, error } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  function formatTime(totalMinutes) {
    let hours = totalMinutes / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + ' hour(s) and ' + rminutes + ' minute(s)';
  }

  useEffect(() => {
    if (movieId === undefined || Number.isInteger(movieId)) navigate('/');
    else dispatch(getMovieDetails(parseInt(movieId)));
  }, [movieId]);

  return (
    <div className='details-container'>
      <div className='details-main'>
        <div className='image-container'>
          <img />
        </div>
        <div className='movie-details'>
          <p className='movie-title'>
            <span className='movie-rating'>()</span>
          </p>
          <p className='movie-info'>2023|{formatTime(new Date())}|kj</p>
          <p className='movie-info '></p>
          <p className='movie-info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at
            totam inventore, aperiam autem et esse? Rerum, soluta repellat
            consequatur, repudiandae magnam, nesciunt voluptatum autem ipsa
            nulla culpa aut pariatur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia non quisquam corrupti perspiciatis quidem
            harum modi dicta incidunt necessitatibus, consectetur ipsam autem
            nostrum nobis esse illo quas beatae officiis error!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
