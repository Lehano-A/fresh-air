import React, { useContext, useEffect, useRef } from 'react';
import Slider from '../../common/Slider/Slider';
import gallery from './gallery';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';
import useCommonMarginLeft from '../../../hooks/useCommonMarginLeft';

function Customers() {
  const innerWidthWindow = useContext(InnerWidthWindowContext);
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const customerWrapperRef = useRef<HTMLDivElement>(null);
  const setCommonMarginLeft = useCommonMarginLeft();

  useEffect(() => {
    setCommonMarginLeft(customerWrapperRef, 1280);
  }, [commonMarginLeft]);

  return (
    <section className='customers'>
      <div
        className='customers__wrapper'
        ref={customerWrapperRef}
      >
        <div className='customers__text-box'>
          <h2 className='customers__subtitle'>
            Известные{' '}
            <span className='customers__span-subtitle-with-long-hyphen'>
              клиенты
            </span>{' '}
            <span
              className={
                innerWidthWindow < 768 ? 'customers__span-subtitle_hidden' : ''
              }
            >
              которые нам доверились
            </span>
          </h2>
          <p className='customers__text'>
            Реализованы проекты квартир и коммерческих помещений в жилых
            комплексах от крупных застройщиков таких как: Level, ФСК, MR групп,
            ПИК, Самолет, Гранель, Донстрой, Пионер, Эталон, А101, Sminex,
            Vesper, Инград, КРОСТ, МИЦ. Мы ценим каждого клиента{' '}
            <span className='customers__span-text-name-company'>
              Pascal Vent
            </span>
            {` и с радостью готовы расширять нашу клиентскую базу.`}
          </p>
        </div>

        <div className='customers__wrapper-slider'>
          <Slider
            gallery={gallery}
            buttonNavigationClass='slider__button-navigation_in-customers'
            slidesPerView='auto'
            swiperClass='swiper_in-customers'
            sliderClass='slider_in-customers'
            slideClass='swiper-slide_in-customers'
            slideActiveClass='swiper-slide-active_in-customers'
            slidePrevClass='swiper-slide-prev_in-customers'
            slideNextClass='swiper-slide-next_in-customers'
            slidesParams={{ active: 258, others: 258 }}
            spaceBetween={20}
          />
        </div>
      </div>
    </section>
  );
}

export default Customers;
