import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CommonMarginLeftContext from '../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../context/InnerWidthWindowContext';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

function App() {
  const [commonMarginLeft, setCommonMarginLeft] = useState('0');
  const [innerWidthWindow, setInnerWidthWindow] = useState({
    prevInnerWidth: 0,
    innerWidth: window.innerWidth,
  });

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
        setInnerWidthWindow((prevState) => ({
          prevInnerWidth:
            prevState.innerWidth <= 375 ? 375 : prevState.innerWidth,
          innerWidth: window.innerWidth >= 767 ? 767 : window.innerWidth,
        }));
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

  return (
    <CommonMarginLeftContext.Provider value={commonMarginLeft}>
      <InnerWidthWindowContext.Provider value={innerWidthWindow}>
        <NavigationMenu />
        <Header />
        <Main />
        <Footer />
      </InnerWidthWindowContext.Provider>
    </CommonMarginLeftContext.Provider>
  );
}

export default App;