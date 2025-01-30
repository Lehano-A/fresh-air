import React, { forwardRef } from 'react';
import Modal from '../common/Modal/Modal';
import FormFeedback from '../common/FormFeedback/FormFeedback';

const ModalCallMeBack = forwardRef<HTMLDialogElement>(
  function ModalCallMeBack(props, ref) {
    return (
      <Modal
        ref={ref}
        logo
        layout='call-me-back'
        subtitle='мы свяжемся с вами'
      >
        <FormFeedback
          layout='call-me-back'
          buttonSubmitStyle={{
            outerBgColor: 'green',
            size: 'm-full-width',
            disabled: true,
          }}
        />
      </Modal>
    );
  },
);

export default ModalCallMeBack;
