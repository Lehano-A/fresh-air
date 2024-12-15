import React, { useContext, useEffect, useRef } from 'react';
import ListServices from './ListServices/ListServices';
import InfoText from './InfoText/InfoText';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';

function ServicesProvided() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const innerWidthWindow = useContext(InnerWidthWindowContext);
  const servicesProvidedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (servicesProvidedRef.current) {
      if (innerWidthWindow >= 1280) {
        servicesProvidedRef.current.style.marginLeft = commonMarginLeft;
      } else {
        servicesProvidedRef.current.style.marginLeft = '0';
      }
    }
  }, [commonMarginLeft]);

  return (
    <section
      className='services-provided mb-100'
      ref={servicesProvidedRef}
    >
      <InfoText />
      <ListServices />
    </section>
  );
}

export default ServicesProvided;
