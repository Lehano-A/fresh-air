import React from 'react';

function Navigation() {
  const nameslinks = [
    'услуги',
    'о нас',
    'польза продукта',
    'оборудование',
    'этапы работы',
    'отзывы',
  ];

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        {nameslinks.map((name, id) => (
          <li
            key={id}
            className='header__nav-item-list'
          >
            <a href='""'>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
