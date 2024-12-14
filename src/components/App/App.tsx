import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CommonMarginLeftContext from '../../context/CommonMarginLeftContext';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

function App() {
  const [commonMarginLeft, setCommonMarginLeft] = useState('0');

  useEffect(() => {
    const getAndSet = {
      commonMarginLeft: () => {
        const heroWrapper = document.querySelector('.hero__wrapper');

        if (heroWrapper) {
          const calcedMarginLeft = getComputedStyle(heroWrapper).marginLeft;
          setCommonMarginLeft(calcedMarginLeft);
        }
      },
    };

    const listenResize = () => {
      window.addEventListener('resize', () => {
        getAndSet.commonMarginLeft();
      });
    };

    getAndSet.commonMarginLeft();
    listenResize();

    return () => listenResize();
  }, []);

  return (
    <CommonMarginLeftContext.Provider value={commonMarginLeft}>
      <NavigationMenu />
      <Header />
      <Main />
      <Footer />
    </CommonMarginLeftContext.Provider>
  );
}

export default App;
