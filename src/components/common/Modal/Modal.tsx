import React, { forwardRef, useContext, useEffect } from 'react';
import ButtonAction from '../ButtonAction/ButtonAction';
import InnerWidthWindowContext from '../../../context/InnerWidthWindowContext';
import Logo from '../Logo/Logo';

interface ModalProps {
  subtitle?: string;
  logo?: boolean;
  layout: string;
  children: React.ReactNode;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { logo = false, subtitle, layout, children },
  ref,
) {
  const innerWidthWindow = useContext(InnerWidthWindowContext);

  const longHyphenClass = `modal__long-hyphen_in-${layout}`;

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

      <h2 className='modal__subtitle'>
        {subtitle}
        <span className={`modal__long-hyphen ${longHyphenClass}`}></span>
      </h2>

      <div className='modal__content-box'>{children}</div>

      {logo && (
        <div className='modal__logo-box'>
          <Logo />
        </div>
      )}
    </dialog>
  );
});

export default Modal;
