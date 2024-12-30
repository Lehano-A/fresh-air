import React, { useContext, useEffect, useRef } from 'react';
import Slider from '../../common/Slider/Slider';
import gallery from './gallery';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';

function Portfolio() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const innerWidthWindow = useContext(InnerWidthWindowContext);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (portfolioRef.current) {
      if (innerWidthWindow >= 1280) {
        portfolioRef.current.style.marginLeft = commonMarginLeft;
      }
      if (innerWidthWindow < 1280) {
        portfolioRef.current.style.marginLeft = '0';
      }
    }
  }, [commonMarginLeft]);

  return (
    <section className='portfolio mb-100'>
      <div
        className='portfolio__wrapper'
        ref={portfolioRef}
      >
        <div className='portfolio__box-subtitle-text'>
          <h2 className='portfolio__subtitle'>Портфолио и процесс работы</h2>
          <p className='portfolio__text'>
            Технические решения, принятые в рабочих чертежах, соответствуют
            требованиям экологических, санитарно-гигиенических, противопожарных
            и других норм и правил, и обеспечивают безопасную для жизни людей
            эксплуатацию объекта при соблюдении предусмотренных рабочими
            чертежами мероприятий.
          </p>
        </div>

        <Slider
          gallery={gallery}
          slidesPerView='auto'
          navigationClass='slider__navigation_in-portfolio'
          swiperClass='swiper_in-portfolio'
          sliderClass='slider_in-portfolio'
          slideClass='swiper-slide_in-portfolio'
          slideActiveClass='swiper-slide-active_in-porfolio'
          slidePrevClass='swiper-slide-prev_in-porfolio'
          slideNextClass='swiper-slide-next_in-porfolio'
          slideBoxDescriptionClass='swiper-slide__box-description'
          slideSubtitleClass='swiper-slide__subtitle'
          slideTextClass='swiper-slide__text'
          spaceBetween={30}
          wrapperClass='swiper-wrapper swiper-wrapper_in-portfolio'
        />
      </div>
    </section>
  );
}

export default Portfolio;
