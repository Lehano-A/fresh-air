import React from 'react';

function DetailsList() {
  return (
    <ul className='advantages__details-list'>
      <li className='advantages__details-item'>
        Создание комфортных условий для работы и отдыха
      </li>
      <li className='advantages__details-item'>
        Чистый, свежий, приточный воздух круглый год
      </li>
      <li className='advantages__details-item'>
        {`Удаление не приятных запахов, избыточной влажности и
накопившегося углекислого газа из помещений`}
      </li>
      <li className='advantages__details-item'>
        {`Поддержание комфортной температуры и
влажности воздуха зимой и летом`}
      </li>
    </ul>
  );
}

export default DetailsList;
