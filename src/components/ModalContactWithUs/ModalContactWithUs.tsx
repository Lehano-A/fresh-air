import React, { forwardRef } from 'react';
import Modal from '../common/Modal/Modal';
import createJSXContent from './createJSXContent';

const ModalContactWithUs = forwardRef<HTMLDialogElement>(
  function ModalContactWithUs(props, ref) {
    return (
      <Modal
        ref={ref}
        layout='contact-with-us'
        subtitle='Быстрая связь с нами'
      >
        {createJSXContent()}
      </Modal>
    );
  },
);

export default ModalContactWithUs;
