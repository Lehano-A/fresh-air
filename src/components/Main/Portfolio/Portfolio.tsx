import React from 'react';
import Slider from './Slider/Slider.jsx';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__box-title-text'>
        <h2 className='portfolio__title'>Портфолио и процесс работы</h2>
        <p className='portfolio__text'>
          Технические решения, принятые в рабочих чертежах, соответствуют
          требованиям экологических, санитарно-гигиенических, противопожарных и
          других норм и правил, и обеспечивают безопасную для жизни людей
          эксплуатацию объекта при соблюдении предусмотренных рабочими чертежами
          мероприятий.
        </p>
      </div>

      <Slider />
    </section>
  );
}

export default Portfolio;
