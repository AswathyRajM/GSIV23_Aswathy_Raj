import React from 'react';

function MovieNotFound() {
  return (
    <div
      style={{
        height: '20vh',
        width: '60vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'var(--gray)' }}>
        <p>
          Movie Not Found! <br />
          Please try again
        </p>
      </h1>
    </div>
  );
}

export default MovieNotFound;
