import React, { useState } from 'react';
import {
  listForSystemVentilation,
  listForConditioning,
} from '../listServicesProvided';

interface DataList {
  contentImage: {
    path: string;
    alt: string;
  };

  data: {
    text: string;
    icon: string;
    alt: string;
  }[];
}

interface IsActive {
  [key: string]: boolean;
}

function ListServices() {
  const [dataList, setDataList] = useState<DataList>(listForSystemVentilation);
  const [isActive, setIsActive] = useState<IsActive>({
    buttonSystemVentilation: true,
  });

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    const nameButton = e.currentTarget.name;

    setIsActive({ [nameButton]: true });

    if (nameButton === 'buttonSystemVentilation') {
      setDataList(listForSystemVentilation);
    } else if (nameButton === 'buttonConditioning') {
      setDataList(listForConditioning);
    }
  }

  return (
    <div className='list-services'>
      <div className='list-services__bookmarks'>
        <button
          className={`list-services__bookmarks-button ${isActive.buttonSystemVentilation ? 'list-services__bookmarks-button--active' : ''}`}
          name='buttonSystemVentilation'
          onClick={handleOnClick}
        >
          <span> Система Вентиляции</span>
        </button>
        <button
          className={`list-services__bookmarks-button ${isActive.buttonConditioning ? 'list-services__bookmarks-button--active' : ''}`}
          name='buttonConditioning'
          onClick={handleOnClick}
        >
          <span>Кондиционирование</span>
        </button>
      </div>

      <div className='list-services__box-list'>
        <ul className='list-services__list'>
          {dataList.data.map((service, id) => {
            const { text, icon, alt } = service;

            return (
              <li
                key={id}
                className='list-services__list-item'
              >
                <img
                  className='list-services__list-item-icon'
                  src={icon}
                  alt={alt}
                />
                <span className='list-services__item-text'>{text}</span>
              </li>
            );
          })}
        </ul>
        <img
          className='list-services__box-list-image'
          src={dataList.contentImage.path}
          alt={dataList.contentImage.alt}
        />
      </div>
    </div>
  );
}

export default ListServices;
