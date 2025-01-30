import React, { useEffect, useRef, useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CommonMarginLeftContext from '../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../context/InnerWidthWindowContext';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import ModalContactWithUs from '../ModalContactWithUs/ModalContactWithUs';
import ModalCallMeBack from '../ModalCallMeBack/ModalCallMeBack';
import ModalContext from '../../context/ModalContext';

function App() {
  const [commonMarginLeft, setCommonMarginLeft] = useState('0');
  const [innerWidthWindow, setInnerWidthWindow] = useState(window.innerWidth);
  const refDialogContactWithUs = useRef<HTMLDialogElement>(null);
  const refDialogCallMeBack = useRef<HTMLDialogElement>(null);

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

  function changeModalVisibility(refModal: React.RefObject<HTMLDialogElement>) {
    if (refModal.current) {
      refModal.current.showModal();
    }
  }

  return (
    <CommonMarginLeftContext.Provider value={commonMarginLeft}>
      <InnerWidthWindowContext.Provider value={innerWidthWindow}>
        <ModalContext.Provider
          value={{
            changeVisibility: {
              contactWithUs: () => {
                changeModalVisibility(refDialogContactWithUs);
              },

              callMeBack: () => {
                changeModalVisibility(refDialogCallMeBack);
              },
            },
          }}
        >
          <NavigationMenu />
          <Header />
          <Main />
          <Footer />
          <ModalContactWithUs ref={refDialogContactWithUs} />
          <ModalCallMeBack ref={refDialogCallMeBack} />
        </ModalContext.Provider>
      </InnerWidthWindowContext.Provider>
    </CommonMarginLeftContext.Provider>
  );
}

export default App;
