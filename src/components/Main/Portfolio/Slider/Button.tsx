import React from 'react';
import { useSwiper } from 'swiper/react';

function Button() {
  const swiper = useSwiper();
  console.log('swiper', swiper);
  return (
    <>
      <button
        style={{
          width: '50px',
          height: '50px',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        onClick={() => swiper.slidePrev()}
      ></button>
      <button
        style={{
          width: '50px',
          height: '50px',
          position: 'absolute',
          top: 0,
          right: 150,
        }}
        onClick={() => swiper.slideNext()}
      ></button>
    </>
  );
}

export default Button;
