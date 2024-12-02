import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import InputText from '../InputText/InputText';

interface FormFeedbackProps {
  layoutClass?: string;
  buttonSubmitStyle?: {
    disabled?: boolean;
    variant?: string;
  };
}

function FormFeedback({ layoutClass, buttonSubmitStyle }: FormFeedbackProps) {
  const { variant = '', disabled = false } = buttonSubmitStyle || {};

  return (
    <form
      className={`form-feedback ${layoutClass ? `form-feedback_${layoutClass}` : ''}`}
    >
      <InputText
        layoutClass={layoutClass}
        placeholder='Ваше имя'
      />
      <InputText
        layoutClass={layoutClass}
        placeholder='Номер телефона'
      />

      <ButtonSubmit
        name='отправить'
        variant={variant}
        disabled={disabled}
      />
    </form>
  );
}

export default FormFeedback;
