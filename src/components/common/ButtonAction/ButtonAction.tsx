import React from 'react';
import IconClose from '../../../images/common/icons/close.svg';

export interface ButtonActionProps {
  name?: string;
  size?: 'xs' | 's' | 'm' | 'xl';
  icon?: 'close' | '';
  layout?: string;
  outerBgColor?: string;
  innerBgColor?: string;
  disabled?: boolean;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const icons = { close: IconClose };

function ButtonAction({
  name = '',
  size = 'm',
  disabled = false,
  icon = '',
  layout,
  outerBgColor,
  innerBgColor,
  handleOnClick,
}: ButtonActionProps) {
  const sizeClass = `button-action_size_${size}`;
  const layoutClass = layout ? `button-action_in-${layout}` : '';
  const outerBgColorClass = outerBgColor
    ? `button-action_bg-color_${outerBgColor}`
    : '';
  const innerBgColorClass = innerBgColor
    ? `button-action_bg-color_${innerBgColor}`
    : '';

  return (
    <div
      className={`button-action ${sizeClass} ${layoutClass} ${outerBgColorClass}`}
    >
      <button
        disabled={disabled}
        className={`button-action__button ${innerBgColorClass}`}
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

export default ButtonAction;
