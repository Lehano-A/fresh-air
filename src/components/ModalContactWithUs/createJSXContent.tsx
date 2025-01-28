import IconPhone from '../../images/common/icons/telephone-handle.svg';
import IconClock from '../../images/common/icons/clock.svg';

function createJSXContent() {
  return (
    <div className='contact-with-us'>
      <p className='contact-with-us__description'>
        Вы можете набрать нам, и менеджеры Pascal Vent с радостью
        проконсультирует Вас по любому вопросу и помогут определиться с выбором.
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
  );
}

export default createJSXContent;
