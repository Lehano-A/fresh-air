import React, { forwardRef, useContext, useEffect } from 'react';
import IconPhone from '../../images/common/icons/telephone-handle.svg';
import IconClock from '../../images/common/icons/clock.svg';
import ButtonAction from '../common/ButtonAction/ButtonAction';
import InnerWidthWindowContext from '../../context/InnerWidthWindowContext';

const ModalContactWithUs = forwardRef<HTMLDialogElement>(
  function ModalContactWithUs(props, ref) {
    const innerWidthWindow = useContext(InnerWidthWindowContext);

    function handleClose() {
      if (ref && 'current' in ref && ref.current) {
        ref.current.close();
      }
    }

    useEffect(() => {
      // если ширина окна, при которой нет в интерфейсе кнопки открытия модального окна
      if (innerWidthWindow < 1280) {
        handleClose();
      }
    }, [innerWidthWindow]);

    return (
      <dialog
        ref={ref}
        className='contact-with-us'
      >
        <ButtonAction
          size='xs'
          icon='close'
          layout='contact-with-us'
          outerBgColor='green'
          handleOnClick={handleClose}
        />

        <h2 className='contact-with-us__subtitle'>Быстрая связь с нами</h2>
        <div className='contact-with-us__content-box'>
          <p className='contact-with-us__description'>
            Вы можете набрать нам, и менеджеры Pascal Vent с радостью
            проконсультирует Вас по любому вопросу и помогут определиться с
            выбором.
          </p>

          <address className='contact-with-us__address'>
            <span className='contact-with-us__call-schedule'>
              График приема звонков:
            </span>

            <div className='contact-with-us__working-hours-box'>
              <img
                src={IconClock}
                alt='Иконка настенных часов'
              />
              <span className='contact-with-us__working-hours'>
                ПН-СБ с 9:00 до 19:00
              </span>
            </div>

            <ul className='contact-with-us__contact-list'>
              <li className='contact-with-us__contact contact-with-us__contact_with-border-line'>
                <img
                  src={IconPhone}
                  alt='Иконка трубки телефона'
                />
                <a
                  href='tel:+74923736331'
                  className='contact-with-us__link'
                >
                  + 7 492 373 63 31
                </a>
              </li>
              <li className='contact-with-us__contact'>
                <img
                  src={IconPhone}
                  alt='Иконка трубки телефона'
                />
                <a
                  href='tel:+74243678929'
                  className='contact-with-us__link'
                >
                  + 7 424 367 89 29
                </a>
              </li>
            </ul>
          </address>
        </div>
      </dialog>
    );
  },
);

export default ModalContactWithUs;
