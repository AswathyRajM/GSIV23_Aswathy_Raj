import React from 'react';
import { Link } from 'react-router-dom';

function MovieNotFound() {
  return (
    <div
      style={{
        height: '80vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'var(--gray)' }}>
        <p> 404: Movie Not Found!</p> <br />
        <Link className='nav-link' to='/'>
          {' '}
          Click to go back to home
        </Link>{' '}
      </h1>
    </div>
  );
}

export default MovieNotFound;
