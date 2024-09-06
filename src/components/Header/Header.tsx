import React from 'react';
import Logo from '../Logo/Logo';
import Slogan from '../Slogan/Slogan';
import Navigation from '../Navigation/Navigation';
import ButtonContact from '../ButtonContact/ButtonContact';
import CompanyActivities from '../CompanyActivities/CompanyActivities';
import Contacts from '../Contacts/Contacts';

function Header() {
  return (
    <div className='header'>
      <div className='header__box'>
        <div className='header__logo-nav-actions'>
          <Logo />
          <Navigation />
          <ButtonContact
            name='связаться'
            variant='medium'
          />
        </div>

        <section className='header__info'>
          <Slogan />
          <CompanyActivities />
          <Contacts />
          <ButtonContact
            name='оставить заявку'
            variant='large'
          />
        </section>
      </div>
    </div>
  );
}

export default Header;
