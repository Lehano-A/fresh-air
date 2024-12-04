import React from 'react';

function Features() {
  return (
    <div className='about__info'>
      <div className='about__us'>
        <h2 className='about__us-title'>О нас</h2>{' '}
        <span className='about__us-brand'>PASCAL VENT</span>
      </div>
      <div className='about__features'>
        <h2 className='about__features-title'>Особенности</h2>

        <p className='about__features-text'>
          Мы любим то, чем занимаемся – поэтому у нас индивидуальный подход к
          каждому человеку, креативные решения для проекта любой сложности и
          высокий уровень клиентского сервиса.
        </p>

        <p className='about__features-text'>
          Именно поэтому нам доверяют сложнейшие задачи, рекомендуют нас и
          возвращаются вновь. Доверьте нам воплощение ваших самых изысканных и
          технологичных задач, и мы сделаем всё с высочайшим уровнем сервиса{' '}
          <span className='about__features-brand'>Pascal Vent.</span>
        </p>

        <p className='about__features-text'>
          <span className='about__features-brand'>Pascal Vent</span> гарантирует
          сертифицированные современные системы, оборудование, качественные
          материалы и самые оптимальные решения под любой бюджет.
        </p>
      </div>
    </div>
  );
}

export default Features;
