import React, { useContext, useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import SliderNavigation from './SliderNavigation/SliderNavigation';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';

/*
Особенности работы слайдера:

Слайдер из коробки некорректно работает, если размер слайдов разный, например - активный одного размера, а все остальные - другого. Некорректность заключается в неверных координатах перемещения между слайдами, и автоперемещение к активному слайду при ресайзе окна. В связи с этими проблемами, возникла необходимость осуществлять создание координат перемещения вручную.
*/
function Slider({
  gallery,
  buttonNavigationClass = '',
  imageSlideClass = '',
  logoSlide = '',
  logoSlideClass = '',
  spaceBetween = 30,
  wrapperNavigationClass = '',
  sliderClass = '',
  slidesPerView,
  swiperClass = '',
  slideClass = '',
  slideActiveClass,
  slidePrevClass,
  slideNextClass,
  slideBoxDescriptionClass = '',
  slideSubtitleClass = '',
  slideTextClass = '',
  slidesParams,
  wrapperClass = '',
}) {
  const swiperRef = useRef(null);
  const coordinatesForTransition = useRef(null);
  const innerWidthWindow = useContext(InnerWidthWindowContext);

  const [idPrevActiveSlide, setIdPrevActiveSlide] = useState(null);
  const [idCurrentActiveSlide, setIdCurrentActiveSlide] = useState(0);

  // при монтировании создадим координаты (нужно для навигации)
  useEffect(() => {
    if (coordinatesForTransition.current === null) {
      coordinatesForTransition.current = createCoordinatesForTransition();
    }
  }, []);

  // обработать изменение слайда
  /* необходимо кастомно получать айди активного слайда, поскольку API слайдера выдаёт некоррректный айди при изменении размера окна*/
  function handleSlideChange(e) {
    setIdPrevActiveSlide(e.previousIndex);
    setIdCurrentActiveSlide(e.activeIndex);
  }

  // изменить координаты перехода анимации
  function changeCoordinatesSlides() {
    const swiper = swiperRef.current.swiper;

    const coordinates = createCoordinatesForTransition();
    coordinatesForTransition.current = coordinates;

    swiper.slidesGrid = coordinatesForTransition.current;
    swiper.snapGrid = coordinatesForTransition.current;

    swiper.slideTo(idCurrentActiveSlide); // при осуществлении действия будут использоваться новые координаты
  }

  // создать координаты для корректного перехода анимации от слайда к слайду
  function createCoordinatesForTransition() {
    const swiper = swiperRef.current.swiper;

    const sizeActiveSlide = slidesParams.active;
    const sizeOtherSlides = slidesParams.others;

    const spaceBetween = swiper.params.spaceBetween;
    const outputData = [];

    for (let i = 0; i < swiper.slides.length; i++) {
      // начало координат с 0
      if (i === 0) {
        outputData.push(0);
        continue;
      }

      // вторая координата - ширина активного слайда + межслайдовый отступ
      if (i === 1) {
        outputData.push(sizeActiveSlide + spaceBetween);
        continue;
      }

      // все остальные элементы - это предыдущая координата + ширина неактивного слайда + межслайдовый отступ
      const prevSize = outputData[i - 1];
      outputData.push(prevSize + sizeOtherSlides + spaceBetween);
    }

    return outputData;
  }

  /* при первом осуществлении действия со слайдами, необходимо подменить координаты, чтобы происходило корректное передвижение от начала до конца слайдов, иначе до конца не доходит при тапинге */
  function changeSnapGrid() {
    const swiper = swiperRef.current.swiper;
    swiper.snapGrid = swiper.slidesGrid;
  }

  // обработать завершение перехода
  function handleTransitionEnd() {
    setIdPrevActiveSlide(null); // сбрасываем айди предыдущего активного слайда
  }

  // нужно ли показывать параграф
  const doNeedToShowParagraph = (index) =>
    idCurrentActiveSlide === index ||
    (innerWidthWindow < 768 && idPrevActiveSlide === index);

  return (
    <div className={`slider ${sliderClass ? sliderClass : ''}`}>
      <SliderNavigation
        swiperRef={swiperRef}
        isActivePrevSlide={idCurrentActiveSlide}
        isLastSlide={gallery.length - 1 === idCurrentActiveSlide}
        wrapperNavigationClass={wrapperNavigationClass}
        buttonNavigationClass={buttonNavigationClass}
        coordinatesForTransition={coordinatesForTransition}
      />

      <Swiper
        ref={swiperRef}
        className={swiperClass}
        grabCursor={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onResize={changeCoordinatesSlides}
        onSlideChange={handleSlideChange}
        onSliderFirstMove={changeSnapGrid}
        slideActiveClass={slideActiveClass}
        slidePrevClass={slidePrevClass}
        slideNextClass={slideNextClass}
        wrapperClass={wrapperClass}
        onTransitionEnd={handleTransitionEnd}
      >
        {gallery.map((item, index) => (
          <SwiperSlide
            key={index}
            className={slideClass}
          >
            {logoSlideClass && (
              <div className={logoSlideClass}>
                <img
                  src={logoSlide}
                  alt='Логотип слайда'
                />
              </div>
            )}

            <img
              src={item.image}
              alt='Изображение выполненной работы из портфолио'
              className={imageSlideClass}
            />

            {item.title && (
              <div className={slideBoxDescriptionClass}>
                <h3 className={slideSubtitleClass}>{item.title}</h3>
                {doNeedToShowParagraph(index) && (
                  <p className={slideTextClass}>{item.description}</p>
                )}
                {/* Если текущий активный слайд или предыдущий активный слайд с разрешением < 768. Предыдущий здесь, чтобы при смене активного слайда, демонтирование параграфа происходило незаметно */}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
