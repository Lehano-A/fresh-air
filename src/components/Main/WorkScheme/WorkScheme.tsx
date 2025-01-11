import React from 'react';
import Steps from './Steps/Steps';

function WorkScheme() {
  return (
    <section className='work-scheme pb-100'>
      <div className='work-scheme__wrapper'>
        <h2 className='work-scheme__title'>
          Понятная и эффективная схема работы
        </h2>

        <Steps />
      </div>
    </section>
  );
}

export default WorkScheme;
