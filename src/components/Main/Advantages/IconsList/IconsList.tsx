import React from 'react';
import airFlowIcon from '../../../../images/Components/Advantages/air-flow.svg';
import tempIcon from '../../../../images/Components/Advantages/temp.svg';
import greenHouseIcon from '../../../../images/Components/Advantages/green-house.svg';
import noGermsIcon from '../../../../images/Components/Advantages/no-germs.svg';
import humidityIcon from '../../../../images/Components/Advantages/humidity.svg';
import pollutionIcon from '../../../../images/Components/Advantages/pollution.svg';

function ListIcons() {
  return (
    <ul className='advantages__icons-list'>
      <li>
        <img
          src={airFlowIcon}
          className='advantages__icon'
          alt='Иконка потока воздуха'
        />
      </li>
      <li>
        <img
          src={tempIcon}
          className='advantages__icon'
          alt='Иконка термометра'
        />
      </li>
      <li>
        <img
          src={greenHouseIcon}
          className='advantages__icon'
          alt='Иконка дома с листиком дерева, символизирующая природную чистоту и свежесть'
        />
      </li>
      <li>
        <img
          src={noGermsIcon}
          className='advantages__icon'
          alt='Иконка - нет микробам'
        />
      </li>
      <li>
        <img
          src={humidityIcon}
          className='advantages__icon'
          alt='Иконка водяной капли с символом процента'
        />
      </li>
      <li>
        <img
          src={pollutionIcon}
          className='advantages__icon'
          alt='Иконка облака CO2 с знаком запрещено'
        />
      </li>
    </ul>
  );
}

export default ListIcons;
