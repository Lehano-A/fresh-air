import React from 'react';

interface InputTextProps {
  placeholder: string;
  layout?: string;
}

function InputText({ placeholder, layout }: InputTextProps) {
  return (
    <input
      className={`input-text input-text_layout_${layout}`}
      placeholder={placeholder}
    />
  );
}

export default InputText;
