import React from 'react';
import ContentLoader from 'react-content-loader';

const ImageLoader = ({ limit }) => {
  return [...Array(limit).keys()].map((i) => {
    return (
      <ContentLoader
        key={i}
        speed={1}
        // primaryColor='#f3f3f3'
        // secondaryColor='#ecebeb'
        height={500}
      >
        <rect x='0' y='10' rx='5' ry='5' width='300' height='300' />
        <rect x='0' y='390' rx='5' ry='5' width='80' height='20' />
        <rect x='170' y='380' rx='5' ry='5' width='50' height='20' />
        <rect x='0' y='310' rx='5' ry='5' width='350' height='20' />
        <rect x='0' y='350' rx='5' ry='5' width='350' height='20' />
      </ContentLoader>
    );
  });
};

export default ImageLoader;
