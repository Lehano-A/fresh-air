import React, { useState } from 'react';
import ButtonMenu from './ButtonMenu/ButtonMenu';
import Navigation from '../common/Navigation/Navigation';

function NavigationMenu() {
  const [wasButtonPressed, setWasButtonPressed] = useState(false);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    setWasButtonPressed((prevState) => !prevState);
  }

  return (
    <aside
      className={`navigation-menu ${wasButtonPressed ? 'navigation-menu_active' : ''}`}
    >
      <Navigation
        isActive={wasButtonPressed}
        listDirection='column'
        listJustifyContent='space-between'
        listAlignItems='center'
      />

      <div className='navigation-menu__wrapper-button-menu '>
        <ButtonMenu handleOnClick={handleOnClick} />
      </div>
    </aside>
  );
}

export default NavigationMenu;
