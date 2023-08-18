import React from 'react';

function PageNotFound() {
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
        404: Page Not Found!
      </h1>
    </div>
  );
}

export default PageNotFound;
