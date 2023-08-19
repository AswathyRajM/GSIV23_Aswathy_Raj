import React, { useEffect } from 'react';
import './MovieDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  // const { movie, isLoading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  // function toHoursAndMinutes(totalMinutes) {
  //   const hours = ('0' + Math.floor(totalMinutes / 60)).slice(-2);
  //   const minutes = ('0' + (totalMinutes % 60)).slice(-2);
  //   return `${hours}:${minutes}`;
  // }

  // useEffect(() => {
  //   if (movieId === undefined) navigate('/');
  //   // else dispatch(getMovie(parseInt(id)));
  // }, [movieId]);

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
          <p className='movie-info'>2023|1.39|kj</p>
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
