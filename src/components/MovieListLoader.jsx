import LoaderImg from '../assets/images/loader.png';

export function Loader() {
  return (
    <>
      <div className='movie-card-loader' data-testid='movie-card-loader'>
        <div className='image-section-loader'>
          <img src={LoaderImg} alt='loading' />
        </div>
        <div className='card-content-loader'>
          <div className='card-heading-rating-loader'>
            <p className='title-loader' data-testid='title-loader' />
            <p className='rating-loader' data-testid='rating-loader' />
          </div>
          <p className='overview-loader' data-testid='overview-loader' />
          <p className='overview-loader' data-testid='overview-loader' />
        </div>
      </div>
    </>
  );
}

export function DetailsLoader() {
  return (
    <div className='details-container-loader'>
      <div className='details-main-loader'>
        <div className='movie-info-loader image-container-loader '>
          <img src={LoaderImg} alt='loading' />
        </div>
        <div className='movie-details-loader'>
          <div className='movie-title-loader'>
            <p className='movie-info-loader left-loader'></p>
            <p className='movie-info-loader right-loader'></p>
          </div>
          <p className='movie-info-loader info' />
          <p className='movie-info-loader info-container-loader' />
          <p className='movie-info-loader desc-container-loader' />
        </div>
      </div>
    </div>
  );
}
