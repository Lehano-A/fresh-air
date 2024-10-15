import React from 'react';

function Achievements() {
  return (
    <ul className='about__achievements'>
      <li>
        <h3>
          <span>10</span> лет на рынке
        </h3>
        <p>
          <span>Работаем</span> как единое целое
        </p>
      </li>

      <li>
        <h3>
          <span>+ 11</span> лет стажа
        </h3>
        <p>
          <span>Опытные и обученные</span> специалисты своего дела
        </p>
      </li>

      <li>
        <h3>
          <span>+ 180</span> клиентов
        </h3>
        <p>
          <span>Число счастливых</span> клиентов за этот период
        </p>
      </li>

      <li>
        <h3>
          <span>+ 470</span> проектов
        </h3>
        <p>
          <span>Большое количество</span> реализованных проектов
        </p>
      </li>
    </ul>
  );
}

export default Achievements;
