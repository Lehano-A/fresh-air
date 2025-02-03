import React from 'react';
import IconClose from '../../../images/common/icons/close.svg';

export interface ButtonProps {
  name?: string;
  size?: 'xs' | 's' | 'm' | 'xl' | 'm-full-width';
  icon?: 'close' | '';
  layout?: string;
  outerBgColor?: string;
  innerBgColor?: string;
  disabled?: boolean;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const icons = { close: IconClose };

function Button({
  name = '',
  size = 'm',
  disabled = false,
  icon = '',
  layout,
  outerBgColor,
  innerBgColor,
  handleOnClick,
}: ButtonProps) {
  const sizeClass = `button_size_${size}`;
  const layoutClass = layout ? `button_in-${layout}` : '';
  const outerBgColorClass = outerBgColor
    ? `button_bg-color_${outerBgColor}`
    : '';
  const innerBgColorClass = innerBgColor
    ? `button_bg-color_${innerBgColor}`
    : '';

  return (
    <div className={`button ${sizeClass} ${layoutClass} ${outerBgColorClass}`}>
      <button
        disabled={disabled}
        className={`button__button ${innerBgColorClass}`}
        type='button'
        onClick={handleOnClick}
      >
        {icon && (
          <img
            src={icons[icon]}
            alt='Иконка кнопки'
          />
        )}
        {name}
      </button>
    </div>
  );
}

export default Button;
