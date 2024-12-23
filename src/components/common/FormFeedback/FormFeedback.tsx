import React from 'react';
import ButtonAction, { ButtonActionProps } from '../ButtonAction/ButtonAction';
import InputText from '../InputText/InputText';

interface FormFeedbackProps {
  layout?: string;
  buttonSubmitStyle?: {
    disabled?: boolean;
    size?: ButtonActionProps['size'];
  };
}

function FormFeedback({ layout, buttonSubmitStyle }: FormFeedbackProps) {
  const { size, disabled = false } = buttonSubmitStyle || {};

  return (
    <form
      className={`form-feedback ${layout ? `form-feedback_in-${layout}` : ''}`}
    >
      <InputText
        layout={layout}
        placeholder='Ваше имя'
      />
      <InputText
        layout={layout}
        placeholder='Номер телефона'
      />

      <ButtonAction
        layout={layout}
        name='отправить'
        size={size}
        disabled={disabled}
      />
    </form>
  );
}

export default FormFeedback;
