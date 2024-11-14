import React from 'react';

interface ButtonSubmitProps {
  name: string;
  variant: string;
  disabled?: boolean;
}

function ButtonSubmit({ name, variant, disabled = false }: ButtonSubmitProps) {
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

export default ButtonSubmit;
