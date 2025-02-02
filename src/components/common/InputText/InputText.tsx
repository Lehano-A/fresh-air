import React from 'react';

interface InputTextProps {
  placeholder: string;
  layout?: string;
  value?: string;
  name: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputText({
  placeholder,
  layout,
  value,
  name,
  handleOnChange,
}: InputTextProps) {
  return (
    <input
      className={`input-text ${layout ? `input-text_in-${layout}` : ''}`}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleOnChange}
    />
  );
}

export default InputText;
