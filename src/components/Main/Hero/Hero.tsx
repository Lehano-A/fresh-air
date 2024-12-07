import Slogan from './Slogan/Slogan';
import ButtonSubmit from '../../common/ButtonSubmit/ButtonSubmit';
import CompanyActivities from './CompanyActivities/CompanyActivities';
import Contacts from './Contacts/Contacts';
import { useContext, useEffect, useRef } from 'react';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';
import { regexDigit } from '../../../constants';

const MIN_BOTTOM = -472;
const MAX_BOTTOM = -668;

function Hero() {
  const bgHeroRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true); // для strict mode
  const { prevInnerWidth, innerWidth } = useContext(InnerWidthWindowContext);

  // вычисление при первом рендере
  useEffect(() => {
    if (isFirstRender.current) {
      calcAndSetBottom();
    }
  }, []);

  // вычисления, при изменении ширины экрана
  useEffect(() => {
    if (prevInnerWidth > 0) {
      calcAndSetBottom();
    }
  }, [innerWidth]);

  // вычислить и установить bottom
  function calcAndSetBottom() {
    if (bgHeroRef.current) {
      const newBottom = calcNewBottom();
      bgHeroRef.current.style.bottom = `${newBottom}px`;
    }
  }

  // вычислить новый bottom
  function calcNewBottom() {
    if (bgHeroRef.current) {
      if (isFirstRender.current) {
        if (innerWidth >= 375 && innerWidth <= 767) {
          isFirstRender.current = false;
          return MIN_BOTTOM - (innerWidth - 375) / 2;
        }
      }

      if (innerWidth <= 374) {
        return MIN_BOTTOM;
      }

      if (innerWidth >= 768) {
        return MAX_BOTTOM;
      }

      const currentBottom = getCurrentBottomElement(bgHeroRef);

      if (innerWidth >= 375 && innerWidth <= 767 && currentBottom) {
        return currentBottom - (innerWidth - prevInnerWidth) / 2;
      }
    }
  }

  // получить текущий bottom элемента
  function getCurrentBottomElement(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      return Number(
        window.getComputedStyle(ref.current).bottom.replace(regexDigit, ''),
      );
    }
  }

  return (
    <section className='hero mb-100'>
      <div
        className='hero__bg'
        ref={bgHeroRef}
      ></div>
      <div className='hero__wrapper'>
        <div className='hero__info'>
          <Slogan />
          <CompanyActivities />
          <Contacts />

          <ButtonSubmit
            name='оставить заявку'
            variant='xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
