import React, { useContext, useEffect, useRef } from 'react';
import ListServices from './ListServices/ListServices';
import InfoText from './InfoText/InfoText';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';

function ServicesProvided() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const servicesProvidedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (servicesProvidedRef.current) {
      servicesProvidedRef.current.style.marginLeft = commonMarginLeft;
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
