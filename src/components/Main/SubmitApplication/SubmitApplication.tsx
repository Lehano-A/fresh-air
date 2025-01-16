import React, { useContext, useEffect, useRef } from 'react';
import FormFeedback from '../../common/FormFeedback/FormFeedback';
import CommonMarginLeftContext from '../../../context/CommonMarginLeftContext';
import useCommonMarginLeft from '../../../hooks/useCommonMarginLeft';

function SubmitApplication() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const submitApplicationWrapperRef = useRef<HTMLDivElement>(null);
  const setCommonMarginLeft = useCommonMarginLeft();

  useEffect(() => {
    setCommonMarginLeft(submitApplicationWrapperRef, 1440);
  }, [commonMarginLeft]);

  return (
    <section className='submit-application'>
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
