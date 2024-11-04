import React from 'react';

function SliderNavigation({ swiperRef, isActivePrev, isLastSlide }) {
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='slider__navigation'>
      <button
        className={`${isActivePrev ? '' : 'slider__button-navigation_disabled'} slider__button-navigation slider__button-navigation_prev`}
        onClick={goToPrevSlide}
      ></button>

      <button
        className={`${isLastSlide ? 'slider__button-navigation_disabled' : ''}  slider__button-navigation slider__button-navigation_next`}
        onClick={goToNextSlide}
      ></button>
    </div>
  );
}

export default SliderNavigation;
