import React, { useContext, useEffect, useRef } from 'react';
import Slider from '../../common/Slider/Slider';

import gallery from './gallery';
import CommonMarginLeftContext from '../../../context/commonMarginLeftContext';

function Customers() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const customerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (customerWrapperRef.current) {
      customerWrapperRef.current.style.marginLeft = commonMarginLeft;
    }
  }, [commonMarginLeft]);

  return (
    <section className='customers'>
      <div
        className='customers__wrapper'
        ref={customerWrapperRef}
      >
        <div className='customers__text-box'>
          <h2>
            Известные <span>клиенты</span> которые нам доверились
          </h2>
          <p>
            {`Реализованы проекты квартир и коммерческих помещений в жилых комплексах
от крупных застройщиков таких как: Level, ФСК, MR групп, ПИК, Самолет, Гранель,
Донстрой, Пионер, Эталон, А101, Sminex, Vesper, Инград, КРОСТ, МИЦ. Мы ценим каждого клиента`}{' '}
            <span>Pascal Vent</span>
            {` и с радостью готовы расширять нашу клиентскую базу.`}
          </p>
        </div>

        <Slider
          gallery={gallery}
          slidesPerView='auto'
          navigationClass='customers__slider-navigation'
          swiperClass='customers__swiper'
          sliderClass='customers__slider'
          slideClass='customers__slide'
          spaceBetween={20}
        />
      </div>
    </section>
  );
}

export default Customers;
