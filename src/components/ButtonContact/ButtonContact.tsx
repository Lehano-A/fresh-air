import React from 'react';

interface ButtonContactProps {
  name: string;
  variant: string;
  disabled?: boolean;
}

function ButtonContact({
  name,
  variant,
  disabled = false,
}: ButtonContactProps) {
  const buttonSizeClass = `button-action--${variant}`;

  return (
    <div className={`button-action ${buttonSizeClass || ''}`}>
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

export default ButtonContact;
