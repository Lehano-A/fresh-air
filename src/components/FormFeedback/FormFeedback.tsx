import React from 'react';
import ButtonSubmit from '../common/ButtonSubmit/ButtonSubmit';
import InputText from '../common/InputText/InputText';

function FormFeedback() {
  return (
    <form className='form-feedback'>
      <InputText placeholder='Ваше имя' />
      <InputText placeholder='Номер телефона' />

      <ButtonSubmit
        name='отправить'
        variant='medium'
        disabled={true}
      />
    </form>
  );
}

export default FormFeedback;
