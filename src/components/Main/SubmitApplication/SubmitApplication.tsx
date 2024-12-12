import React, { useContext, useEffect, useRef } from 'react';
import FormFeedback from '../../common/FormFeedback/FormFeedback';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';

function SubmitApplication() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const submitApplicationWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitApplicationWrapperRef.current) {
      submitApplicationWrapperRef.current.style.marginLeft = commonMarginLeft;
    }
  }, [commonMarginLeft]);

  return (
    <section className='submit-application mb-100'>
      <div
        className='submit-application__wrapper'
        ref={submitApplicationWrapperRef}
      >
        <h2 className='submit-application__title'>
          Оставьте заявку и мы с вами свяжемся
        </h2>

        <FormFeedback
          layoutClass='submit-application'
          buttonSubmitStyle={{ size: 'm', disabled: true }}
        />
      </div>
    </section>
  );
}

export default SubmitApplication;
