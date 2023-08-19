import LoaderImg from '../assets/images/loader.png';

function LoaderComponent() {
  return (
    <>
      <div className='movie-card-shimmer' data-testid='movie-card-shimmer'>
        <div className='image-section-shimmer'>
          <img src={LoaderImg} alt='loading' />
        </div>
        <div className='card-content-shimmer'>
          <div className='card-heading-rating-shimmer'>
            <p className='title-shimmer' data-testid='title-shimmer' />
            <p className='rating-shimmer' data-testid='rating-shimmer' />
          </div>
          <p className='overview-shimmer' data-testid='overview-shimmer' />
          <p className='overview-shimmer' data-testid='overview-shimmer' />
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

export function DetailsShimmer() {
  return (
    <div className='details-container-shimmer'>
      <div className='details-main-shimmer'>
        <div className='movie-info-shimmer image-container-shimmer '>
          <img src={LoaderImg} alt='loading' />
        </div>
        <div className='movie-details-shimmer'>
          <div className='movie-title-shimmer'>
            <p className='movie-info-shimmer left-shimmer'></p>
            <p className='movie-info-shimmer right-shimmer'></p>
          </div>
          <p className='movie-info-shimmer info' />
          <p className='movie-info-shimmer info-container-shimmer' />
          <p className='movie-info-shimmer desc-container-shimmer' />
        </div>
      </div>
    </div>
  );
}
