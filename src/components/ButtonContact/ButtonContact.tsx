import React from 'react';

interface ButtonContactProps {
  name: string;
  variant: string;
}

function ButtonContact({ name, variant }: ButtonContactProps) {
  const buttonSizeClass = `button-action--${variant}`;

  return (
    <div className={`button-action ${buttonSizeClass || ''}`}>
      <button
        disabled
        className={`button-action__button`}
        type='button'
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonContact;
