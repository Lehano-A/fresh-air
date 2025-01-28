import React, { forwardRef, useContext, useEffect } from 'react';
import ButtonAction from '../ButtonAction/ButtonAction';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';

interface ModalProps {
  subtitle?: string;
  children: React.ReactNode;
  layout: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { subtitle, layout, children },
  ref,
) {
  const innerWidthWindow = useContext(InnerWidthWindowContext);

  function handleClose() {
    if (ref && 'current' in ref && ref.current) {
      ref.current.close();
    }
  }

  useEffect(() => {
    // если это "определенный блок" и ширина окна, при которой нет в интерфейсе кнопки открытия модального окна
    if (layout === 'contact-with-us' && innerWidthWindow < 1280) {
      handleClose();
    }
  }, [innerWidthWindow]);

  return (
    <dialog
      ref={ref}
      className='modal'
    >
      <ButtonAction
        size='xs'
        icon='close'
        layout='contact-with-us'
        outerBgColor='green'
        handleOnClick={handleClose}
      />

      <h2 className='modal__subtitle'>{subtitle}</h2>

      <div className='modal__content-box'>{children}</div>
    </dialog>
  );
});

export default Modal;
