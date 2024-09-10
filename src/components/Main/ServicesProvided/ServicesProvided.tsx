import React from 'react';
import ListServices from './ListServices/ListServices';
import InfoText from './InfoText/InfoText';

function ServicesProvided() {
  return (
    <section className='services-provided'>
      <InfoText />
      <ListServices />
    </section>
  );
}

export default ServicesProvided;
