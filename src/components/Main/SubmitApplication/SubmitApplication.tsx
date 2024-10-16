import React from 'react';
import ButtonContact from '../../ButtonContact/ButtonContact';

function SubmitApplication() {
  return (
    <section className='submit-application'>
      <div>
        <h2 className='submit-application__title'>
          Оставьте заявку и мы с вами свяжемся
        </h2>
        <form className='submit-application__form'>
          <input
            className='submit-application__input'
            placeholder='Ваше Имя'
          ></input>
          <input
            className='submit-application__input'
            placeholder='Номер телефона'
          ></input>

          <ButtonContact
            name='отправить'
            variant='medium'
            disabled={true}
          ></ButtonContact>
        </form>
      </div>
    </section>
  );
}

export default SubmitApplication;
