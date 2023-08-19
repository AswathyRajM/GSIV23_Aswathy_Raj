import LoaderImg from '../assets/images/loader.png';

function LoaderComponent() {
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

export const Loader = () => {
  let width = Math.ceil(window.innerWidth / (350 + 40));
  let height = Math.ceil(window.innerHeight / (450 + 40));
  return (
    <div className='movie-list-container'>
      {[...Array(width * height).keys()].map((i) => {
        return (
          <div key={i}>
            <LoaderComponent />
          </div>
        );
      })}
    </div>
  );
};

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
