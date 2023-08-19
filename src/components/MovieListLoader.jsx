export function Loader() {
  return (
    <>
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
    </>
  );
}
