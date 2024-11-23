import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import SliderNavigation from './SliderNavigation/SliderNavigation';

function Slider({
  gallery,
  spaceBetween = 30,
  navigationClass = '',
  sliderClass = '',
  slidesPerView,
  swiperClass = '',
  slideClass = '',
  slideTextBoxClass = '',
  centeredSlides = true,
}) {
  const swiperRef = useRef(null);

  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);

  function handleSlideChange(e) {
    setCurrentActiveSlide(e.activeIndex);
  }

  return (
    <div className={`slider ${sliderClass ? sliderClass : ''}`}>
      <SliderNavigation
        swiperRef={swiperRef}
        isActivePrev={currentActiveSlide}
        isLastSlide={gallery.length - 1 === currentActiveSlide}
        navigationClass={navigationClass}
      />

      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        onSlideChange={handleSlideChange}
        className={swiperClass}
      >
        {gallery.map((item, index) => (
          <SwiperSlide
            key={index}
            className={slideClass}
          >
            <img
              src={item.image}
              alt='Изображение выполненной работы из портфолио'
            />

            {item.title && (
              <div className={slideTextBoxClass}>
                <h2>{item.title}</h2>
                {currentActiveSlide === index && <p>{item.description}</p>}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
