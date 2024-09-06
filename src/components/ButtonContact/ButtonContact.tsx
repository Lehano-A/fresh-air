import React from 'react';

interface ButtonContactProps {
  name: string;
  variant: string;
}

function ButtonContact({ name, variant }: ButtonContactProps) {
  const buttonSizeClass = `button-contact--${variant}`;

  return (
    <div className={`button-contact ${buttonSizeClass || ''}`}>
      <button
        className={`button-contact__button`}
        type='button'
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonContact;
