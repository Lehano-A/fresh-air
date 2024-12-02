import React from 'react';

interface InputTextProps {
  placeholder: string;
  layoutClass?: string;
}

function InputText({ placeholder, layoutClass }: InputTextProps) {
  return (
    <input
      className={`input-text ${layoutClass ? `input-text_layout_${layoutClass}` : ''}`}
      placeholder={placeholder}
    />
  );
}

export default InputText;
