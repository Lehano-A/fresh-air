import React, { useContext, useEffect, useRef } from 'react';
import Slider from '../../common/Slider/Slider';
import gallery from './gallery';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';

function Portfolio() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (portfolioRef.current) {
      portfolioRef.current.style.marginLeft = commonMarginLeft;
    }
  }, [commonMarginLeft]);

  return (
    <section
      className='portfolio mb-100'
      ref={portfolioRef}
    >
      <div className='portfolio__box-title-text'>
        <h2 className='portfolio__title'>Портфолио и процесс работы</h2>
        <p className='portfolio__text'>
          Технические решения, принятые в рабочих чертежах, соответствуют
          требованиям экологических, санитарно-гигиенических, противопожарных и
          других норм и правил, и обеспечивают безопасную для жизни людей
          эксплуатацию объекта при соблюдении предусмотренных рабочими чертежами
          мероприятий.
        </p>
      </div>

      <Slider
        gallery={gallery}
        slidesPerView='auto'
        sliderClass='portfolio__slider'
        navigationClass='portfolio__slider-navigation'
        swiperClass='portfolio__swiper'
        slideClass='portfolio__slide'
        slideTextBoxClass='portfolio__slide-text-box'
        spaceBetween={20}
      />
    </section>
  );
}

export default Portfolio;
