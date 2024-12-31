import React from 'react';

function SliderNavigation({
  swiperRef,
  isActivePrevSlide,
  isLastSlide,
  coordinatesForTransition,
  buttonNavigationClass,
  wrapperNavigationClass,
}) {
  // перейти на следующий слайд
  const goToNextSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.snapGrid = coordinatesForTransition.current;
      swiper.snapGrid = swiper.slidesGrid;

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
      className={`slider__wrapper-navigation ${wrapperNavigationClass ? wrapperNavigationClass : ''}`}
    >
      <button
        className={`${isActivePrevSlide ? '' : 'slider__button-navigation_disabled'} ${buttonNavigationClass ? buttonNavigationClass : ''} slider__button-navigation slider__button-navigation_prev`}
        onClick={goToPrevSlide}
      ></button>

      <button
        className={`${isLastSlide ? 'slider__button-navigation_disabled' : ''} ${buttonNavigationClass ? buttonNavigationClass : ''} slider__button-navigation slider__button-navigation_next`}
        onClick={goToNextSlide}
      ></button>
    </div>
  );
}

export default SliderNavigation;
