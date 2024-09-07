import React from 'react';
import iconLungs from '../../../images/logo/lungs.svg';
import iconOval from '../../../images/logo/oval.svg';
import iconNameCompany from '../../../images/logo/nameCompany.svg';

function Logo() {
  return (
    <div className='logo'>
      <img
        src={iconLungs}
        alt='Часть логотипа - лёгкие человека'
      />
      <img
        src={iconOval}
        alt='Часть логотипа - фигура овал'
      />
      <img
        src={iconNameCompany}
        alt='Часть логотипа - название компании'
      />
    </div>
  );
}

export default Logo;
