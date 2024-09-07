import React from 'react';
import iconPin from '../../../images/icons/pin.svg';
import iconTelephoneHandle from '../../../images/icons/telephone-handle.svg';

function Contacts() {
  return (
    <address className='contacts'>
      <div className='contacts__box-contact'>
        <img
          className='contacts__icon'
          src={iconPin}
          alt='Иконка - метка на карте'
        />
        <p className='contacts__text'>Московский регион, Москва</p>
      </div>

      <div className='contacts__box-contact'>
        <img
          className='contacts__icon'
          src={iconTelephoneHandle}
          alt='Иконка - телефонная трубка'
        />
        <p className='contacts__text'>
          <a href='tel:+74923736331'>+ 7 492 373 63 31</a>
          <a href='tel:+74243678929'>+ 7 424 367 89 29</a>
        </p>
      </div>
    </address>
  );
}

export default Contacts;
