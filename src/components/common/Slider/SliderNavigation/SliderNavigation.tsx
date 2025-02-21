import React from 'react';
import { SwiperRef } from 'swiper/react';
import { KeySwiperOfSwiperRef } from '../Slider';

interface SliderNavigationProps {
  swiperRef: null | React.RefObject<SwiperRef>;
  isActivePrevSlide: boolean;
  isLastSlide: boolean;
  coordinatesForTransition: React.RefObject<number[]>;
  buttonNavigationClass: string;
  wrapperNavigationClass: string;
}

function SliderNavigation({
  swiperRef,
  isActivePrevSlide,
  isLastSlide,
  coordinatesForTransition,
  buttonNavigationClass,
  wrapperNavigationClass,
}: SliderNavigationProps) {
  // перейти на следующий слайд
  const goToNextSlide = () => {
    if (swiperRef) {
      const swiper = swiperRef.current?.swiper as KeySwiperOfSwiperRef;

      if (coordinatesForTransition.current) {
        swiper.snapGrid = coordinatesForTransition.current;
        swiper.snapGrid = swiper.slidesGrid;

        swiper.slideNext();
      }
    }
  };

  // перейти на предыдущий слайд
  const goToPrevSlide = () => {
    if (swiperRef) {
      const swiper = swiperRef.current?.swiper as KeySwiperOfSwiperRef;
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
