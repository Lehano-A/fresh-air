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
    <nav className='navigation'>
      <ul className='navigation__list'>
        {nameslinks.map((name, id) => (
          <li
            key={id}
            className='navigation__item-list'
          >
            <a href='""'>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
