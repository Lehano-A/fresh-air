import React, { useContext, useEffect, useRef } from 'react';
import FormFeedback from '../../common/FormFeedback/FormFeedback';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';

function SubmitApplication() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const innerWidthWindow = useContext(InnerWidthWindowContext);
  const submitApplicationWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitApplicationWrapperRef.current) {
      if (innerWidthWindow >= 1440) {
        submitApplicationWrapperRef.current.style.marginLeft = commonMarginLeft;
      } else {
        submitApplicationWrapperRef.current.style.marginLeft = '0';
      }
    }
  }, [commonMarginLeft]);

  return (
    <section className='submit-application mb-100'>
      <div
        className='submit-application__wrapper'
        ref={submitApplicationWrapperRef}
      >
        <h2 className='submit-application__subtitle'>
          Оставьте заявку и мы с вами свяжемся
        </h2>

        <FormFeedback
          layout='submit-application'
          buttonSubmitStyle={{ size: 'm', disabled: true }}
        />
      </div>
    </section>
  );
}

export default SubmitApplication;
