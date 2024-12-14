import Slogan from './Slogan/Slogan';
import ButtonAction from '../../common/ButtonAction/ButtonAction';
import CompanyActivities from './CompanyActivities/CompanyActivities';
import Contacts from './Contacts/Contacts';
import { useContext, useEffect, useRef, useState } from 'react';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';
import { regexDigit } from '../../../constants';

const MIN_BOTTOM = -472;
const MAX_BOTTOM = -668;

function Hero() {
  const bgHeroRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true); // для strict mode
  const { prevInnerWidth, innerWidth } = useContext(InnerWidthWindowContext);
  const [sizeScreen, setSizeScreen] = useState({
    prevWidth: prevInnerWidth,
    lastWidth: innerWidth,
  });

  /* определение значений ширины окна для последующих вычислений исходя от текущей действительной ширины окна */
  useEffect(() => {
    setSizeScreen((prevState) => ({
      prevWidth: prevInnerWidth <= 375 ? 375 : prevState.lastWidth,
      lastWidth: innerWidth >= 767 ? 767 : innerWidth,
    }));
  }, [innerWidth]);

  // вычисления, при изменении ширины экрана
  useEffect(() => {
    if (isFirstRender.current || sizeScreen.prevWidth > 0) {
      calcAndSetBottom();
    }
  }, [sizeScreen.lastWidth]);

  // вычислить и установить bottom
  function calcAndSetBottom() {
    if (bgHeroRef.current) {
      const newBottom = calcBottom();
      bgHeroRef.current.style.bottom = `${newBottom}px`;
    }
  }

  // вычислить bottom
  function calcBottom() {
    if (bgHeroRef.current) {
      if (isFirstRender.current) {
        // если это первый рендер
        if (sizeScreen.lastWidth >= 375 && sizeScreen.lastWidth <= 767) {
          isFirstRender.current = false;
          return MIN_BOTTOM - (sizeScreen.lastWidth - 375) / 2;
        }
      }

      if (sizeScreen.lastWidth <= 374) {
        return MIN_BOTTOM;
      }

      if (sizeScreen.lastWidth >= 768) {
        return MAX_BOTTOM;
      }

      const currentBottom = getCurrentBottomElement(bgHeroRef);

      if (
        sizeScreen.lastWidth >= 375 &&
        sizeScreen.lastWidth <= 767 &&
        currentBottom
      ) {
        return (
          currentBottom - (sizeScreen.lastWidth - sizeScreen.prevWidth) / 2
        );
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

          <ButtonAction
            name='оставить заявку'
            size='xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
