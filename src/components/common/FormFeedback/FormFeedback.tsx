import React from 'react';
import ButtonAction, { ButtonActionProps } from '../ButtonAction/ButtonAction';
import InputText from '../InputText/InputText';

interface FormFeedbackProps {
  layoutClass?: string;
  buttonSubmitStyle?: {
    disabled?: boolean;
    size?: ButtonActionProps['size'];
  };
}

function FormFeedback({ layoutClass, buttonSubmitStyle }: FormFeedbackProps) {
  const { size, disabled = false } = buttonSubmitStyle || {};

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

      <ButtonAction
        name='отправить'
        size={size}
        disabled={disabled}
      />
    </form>
  );
}

export default FormFeedback;
