import React from 'react';

interface InputTextProps {
  placeholder: string;
  layout?: string;
}

function InputText({ placeholder, layout }: InputTextProps) {
  return (
    <input
      className={`input-text ${layout ? `input-text_in_${layout}` : ''}`}
      placeholder={placeholder}
    />
  );
}

export default InputText;
