import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import gallery from './gallery';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import SliderNavigation from './SliderNavigation/SliderNavigation';

function Slider() {
  const swiperRef = useRef(null);

  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);

  function handleSlideChange(e) {
    setCurrentActiveSlide(e.activeIndex);
  }

  return (
    <div className='slider'>
      <SliderNavigation
        swiperRef={swiperRef}
        isActivePrev={currentActiveSlide}
        isLastSlide={gallery.length - 1 === currentActiveSlide}
      />

      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt='Изображение выполненной работы из портфолио'
            />

            <div className='swiper-slide__text-box'>
              <h2>{item.title}</h2>
              {currentActiveSlide === index && <p>{item.description}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
