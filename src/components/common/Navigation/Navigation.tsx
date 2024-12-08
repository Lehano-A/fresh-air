import React from 'react';

interface NavigationProps {
  isActive?: boolean | null;
  className?: string;
  listDirection?: 'row' | 'column';
  listJustifyContent?: 'start' | 'space-between';
  listAlignItems?: 'start' | 'center';
  listItemMarginRight?: number;
}

// идентифицировать активность
function identifyActivity(isActive: NavigationProps['isActive']) {
  if (isActive !== null) {
    return isActive ? '' : 'navigation_hidden';
  }
  return '';
}

function Navigation({
  isActive = null,
  className = '',
  listDirection = 'row',
  listJustifyContent = 'start',
  listItemMarginRight = 0,
  listAlignItems,
}: NavigationProps) {
  const namesLinks = [
    'услуги',
    'о нас',
    'польза продукта',
    'оборудование',
    'этапы работы',
    'отзывы',
  ];

  const activityClass = identifyActivity(isActive);

  const justifyContentClass = listJustifyContent
    ? `navigation__list_justify-content_${listJustifyContent}`
    : '';

  const listItemMarginRightClass = listItemMarginRight
    ? `navigation__list-item_margin-right_${listItemMarginRight}`
    : '';

  const listDirectionClass =
    listDirection === 'column' ? 'navigation__list_direction_column' : '';

  const listAlignItemsClass = listAlignItems
    ? `navigation__list_align-items_${listAlignItems}`
    : '';

  return (
    <nav className={`navigation ${className} ${activityClass} `}>
      <ul
        className={`navigation__list ${listDirectionClass} ${justifyContentClass} ${listAlignItemsClass}`}
      >
        {namesLinks.map((name, id) => (
          <li
            key={id}
            className={`navigation__list-item ${listItemMarginRightClass}`}
          >
            <a href='""'>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
