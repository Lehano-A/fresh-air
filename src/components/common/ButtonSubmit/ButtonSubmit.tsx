import React from 'react';

interface ButtonSubmitProps {
  name: string;
  variant: string;
  outerBgColor?: string;
  disabled?: boolean;
}

function ButtonSubmit({
  name,
  variant,
  outerBgColor,
  disabled = false,
}: ButtonSubmitProps) {
  const outerBgColorClass = `button-action_color_${outerBgColor}`;
  const buttonSizeClass = `button-action_size_${variant}`;

  return (
    <div
      className={`button-action ${variant ? buttonSizeClass : ''} ${outerBgColor ? outerBgColorClass : ''}`}
    >
      <button
        disabled={disabled}
        className={`button-action__button`}
        type='button'
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonSubmit;
