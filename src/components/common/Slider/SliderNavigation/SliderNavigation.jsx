import React from 'react';

function SliderNavigation({
  swiperRef,
  isActivePrevSlide,
  isLastSlide,
  navigationClass,
  coordinatesForTransition,
}) {
  // перейти на следующий слайд
  const goToNextSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.snapGrid = coordinatesForTransition.current;
      swiper.slideNext();
    }
  };

  // перейти на предыдущий слайд
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slidePrev();
    }
  };

  return (
    <div
      className={`slider__navigation ${navigationClass ? navigationClass : ''}`}
    >
      <button
        className={`${isActivePrevSlide ? '' : 'slider__button-navigation_disabled'} slider__button-navigation slider__button-navigation_prev`}
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
