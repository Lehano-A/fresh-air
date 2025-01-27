import React, { useEffect, useRef, useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CommonMarginLeftContext from '../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../context/InnerWidthWindowContext';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import ModalContactWithUs from '../ModalContactWithUs/ModalContactWithUs';
import ModalContactWithUsContext from '../../context/ModalContactWithUsContext';

function App() {
  const [commonMarginLeft, setCommonMarginLeft] = useState('0');
  const [innerWidthWindow, setInnerWidthWindow] = useState(window.innerWidth);
  const refDialogContactWithUs = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const getAndSet = {
      commonMarginLeft: () => {
        const heroWrapper = document.querySelector('.hero__wrapper');

        if (heroWrapper) {
          const calcedMarginLeft = getComputedStyle(heroWrapper).marginLeft;
          setCommonMarginLeft(calcedMarginLeft);
        }
      },
      innerWidthWindow: () => {
        setInnerWidthWindow(window.innerWidth);
      },
    };

    const listenResize = () => {
      window.addEventListener('resize', () => {
        getAndSet.commonMarginLeft();
        getAndSet.innerWidthWindow();
      });
    };

    getAndSet.commonMarginLeft();
    getAndSet.innerWidthWindow();

    listenResize();

    return () => listenResize();
  }, []);

  function changeVisibilityContactWithUs() {
    if (refDialogContactWithUs.current) {
      refDialogContactWithUs.current.showModal();
    }
  }

  return (
    <CommonMarginLeftContext.Provider value={commonMarginLeft}>
      <InnerWidthWindowContext.Provider value={innerWidthWindow}>
        <ModalContactWithUsContext.Provider
          value={{ changeVisibility: changeVisibilityContactWithUs }}
        >
          <NavigationMenu />
          <Header />
          <Main />
          <Footer />
          <ModalContactWithUs ref={refDialogContactWithUs} />
        </ModalContactWithUsContext.Provider>
      </InnerWidthWindowContext.Provider>
    </CommonMarginLeftContext.Provider>
  );
}

export default App;
