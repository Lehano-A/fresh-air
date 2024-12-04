import React from 'react';

function Achievements() {
  return (
    <div className='about__achievements'>
      <ul className='about__list'>
        <li className='about__item-list about__item-list_position-1-1'>
          <h3 className='about__item-list-title'>
            <span className='about__item-list-title-span'>10</span> лет на рынке
          </h3>
          <p className='about__item-list-text'>
            <span className='about__item-list-text-span'>Работаем</span> как
            единое целое
          </p>
        </li>

        <li className='about__item-list about__item-list_position-2-2'>
          <h3 className='about__item-list-title'>
            <span className='about__item-list-title-span'>+ 11</span> лет стажа
          </h3>
          <p className='about__item-list-text'>
            <span className='about__item-list-text-span'>
              Опытные и обученные
            </span>{' '}
            специалисты своего дела
          </p>
        </li>

        <li className='about__item-list about__item-list_position-2-4'>
          <h3 className='about__item-list-title'>
            <span className='about__item-list-title-span'>+ 180</span> клиентов
          </h3>
          <p className='about__item-list-text'>
            <span className='about__item-list-text-span'>Число счастливых</span>{' '}
            клиентов за этот период
          </p>
        </li>

        <li className='about__item-list about__item-list_position-1-3'>
          <h3 className='about__item-list-title'>
            <span className='about__item-list-title-span'>+ 470</span> проектов
          </h3>
          <p className='about__item-list-text'>
            <span className='about__item-list-text-span'>
              Большое количество
            </span>{' '}
            реализованных проектов
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Achievements;
