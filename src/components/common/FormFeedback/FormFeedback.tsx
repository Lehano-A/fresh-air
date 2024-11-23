import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import InputText from '../InputText/InputText';

interface FormFeedbackProps {
  layout?: string;
}

function FormFeedback({ layout }: FormFeedbackProps) {
  return (
    <form className='form-feedback form-feedback_layout_footer'>
      <InputText
        layout={layout}
        placeholder='Ваше имя'
      />
      <InputText
        layout={layout}
        placeholder='Номер телефона'
      />

      <ButtonSubmit
        name='отправить'
        variant='m'
      />
    </form>
  );
}

export default FormFeedback;
