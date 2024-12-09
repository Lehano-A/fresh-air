import React from 'react';

export interface ButtonActionProps {
  name?: string;
  size?: 'xs' | 's' | 'm' | 'xl';
  layout?: string;
  // className?: string;
  outerBgColor?: string;
  innerBgColor?: string;
  disabled?: boolean;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ButtonAction({
  name = '',
  size = 'm',
  // className = '',
  disabled = false,
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
        {name}
      </button>
    </div>
  );
}

export default ButtonAction;
