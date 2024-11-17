import React from 'react';
import logo from '../../../images/logo/logo.svg';

interface logoProps {
  styleClass?: string;
}

function Logo({ styleClass }: logoProps) {
  return (
    <img
      src={logo}
      alt='Логотип компании Pascal Vent'
      className={`${styleClass ? styleClass : ''}`}
    />
  );
}

export default Logo;
