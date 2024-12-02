import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CommonMarginLeftContext from '../../context/commonMarginLeftContext';

function App() {
  const [commonMarginLeft, setCommonMarginLeft] = useState('0');

  useEffect(() => {
    const getAndSetMarginLeft = () => {
      const heroWrapper = document.querySelector('.hero__wrapper');

      if (heroWrapper) {
        const calcedMarginLeft = getComputedStyle(heroWrapper).marginLeft;
        setCommonMarginLeft(calcedMarginLeft);
      }
    };

    const listenResize = () => {
      window.addEventListener('resize', () => {
        getAndSetMarginLeft();
      });
    };

    getAndSetMarginLeft();
    listenResize();

    return () => listenResize();
  }, []);

  return (
    <CommonMarginLeftContext.Provider value={commonMarginLeft}>
      <Header />
      <Main />
      <Footer />
    </CommonMarginLeftContext.Provider>
  );
}

export default App;
