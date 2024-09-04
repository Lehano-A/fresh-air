import React from 'react';
import Logo from '../Logo/Logo';
import Slogan from '../Slogan/Slogan';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <div className='header'>
      <div className='header__box'>
        <div className='header__logo-nav-actions'>
          <Logo />
          <Navigation />
        </div>
        <Slogan />
      </div>
    </div>
  );
}

export default Header;
