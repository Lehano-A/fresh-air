import React from 'react';

function Contacts() {
  return (
    <address className='hero__contacts'>
      <p className='hero__address'>{`Московский регион,
Москва`}</p>

      <div className='hero__box-number-phones'>
        <p className='hero__wrapper-number-phones'>
          <a
            className='hero__number-phone'
            href='tel:+74923736331'
          >
            + 7 492 373 63 31
          </a>
          <a
            className='hero__number-phone'
            href='tel:+74243678929'
          >
            + 7 424 367 89 29
          </a>
        </p>
      </div>
    </address>
  );
}

export default Contacts;
