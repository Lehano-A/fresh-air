import React from 'react';

function ListAgitation() {
  return (
    <div className='campaigning-steps__box-agitation'>
      <h3 className='campaigning-steps__agitation-subtitle'>
        Кажется, это знак...
      </h3>

      <ul className='campaigning-steps__agitation-list'>
        <li className='campaigning-steps__agitation-list-item'>
          Получите скидку 5% на монтаж при заполнении анкеты на сайте
        </li>

        <li className='campaigning-steps__agitation-list-item'>
          Бесплатно сделаем проект и пусконаладку системы при заказе монтажа
        </li>

        <li className='campaigning-steps__agitation-list-item'>
          Кэшбек до 10% дизайнерам при передаче Клиента и заказе у нас проекта с
          монтажом!
        </li>
      </ul>
    </div>
  );
}

export default ListAgitation;
