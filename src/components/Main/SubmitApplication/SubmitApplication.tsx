import React from 'react';
import FormFeedback from '../../FormFeedback/FormFeedback';

function SubmitApplication() {
  return (
    <section className='submit-application'>
      <div>
        <h2 className='submit-application__title'>
          Оставьте заявку и мы с вами свяжемся
        </h2>

        <FormFeedback />
      </div>
    </section>
  );
}

export default SubmitApplication;
