import React, { useState } from 'react';
import {
  listForSystemVentilation,
  listForConditioning,
} from '../listServicesProvided';

interface DataList {
  contentImage: {
    size: {
      default: string;
      min: string;
    };
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
          className={`list-services__bookmark list-services__bookmark_system-ventilation ${isActive.buttonSystemVentilation ? 'list-services__bookmark_active' : ''}`}
          name='buttonSystemVentilation'
          onClick={handleOnClick}
        >
          <span className='list-services__bookmark-name'>
            Система Вентиляции
          </span>
        </button>

        <button
          className={`list-services__bookmark list-services__bookmark_conditioning ${isActive.buttonConditioning ? 'list-services__bookmark_active' : ''}`}
          name='buttonConditioning'
          onClick={handleOnClick}
        >
          <span className='list-services__bookmark-name'>
            Кондиционирование
          </span>
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

        <picture className='list-services__box-image-list'>
          <source
            srcSet={dataList.contentImage.size.default}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={dataList.contentImage.size.min}
            media='(min-width: 320px)'
          />
          <img
            className='list-services__image-list'
            src={dataList.contentImage.size.default}
            alt={dataList.contentImage.alt}
          />
        </picture>
      </div>
    </div>
  );
}

export default ListServices;
