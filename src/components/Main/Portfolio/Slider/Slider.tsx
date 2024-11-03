import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import gallery from './gallery';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import './styles.scss';

import { Navigation } from 'swiper/modules';

function Slider() {
  return (
    <div className='portfolio__slider'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation
        centeredSlides={true}
        modules={[Navigation]}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt='Изображение выполненной работы из портфолио'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
