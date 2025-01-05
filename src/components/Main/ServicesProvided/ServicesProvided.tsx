import React, { useContext, useEffect, useRef } from 'react';
import ListServices from './ListServices/ListServices';
import InfoText from './InfoText/InfoText';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';
import useCommonMarginLeft from '../../../hooks/useCommonMarginLeft';

function ServicesProvided() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const servicesProvidedRef = useRef<HTMLElement>(null);
  const setCommonMarginLeft = useCommonMarginLeft();

  useEffect(() => {
    setCommonMarginLeft(servicesProvidedRef, 1280);
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
