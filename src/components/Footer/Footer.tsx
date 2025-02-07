import React from 'react';
import FormFeedback from '../common/FormFeedback/FormFeedback';
import Logo from '../common/Logo/Logo';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__box-logo'>
          <Logo />
        </div>

        <div className='footer__about'>
          <p className='footer__description'>
            Компания "Pascal Vent" входит в число лучших специализированных
            организаций, с широким ассортиментом товаров и услуг,
            предназначенных для систем вентиляции и кондиционирования,
            предоставляющих высокий сервис и удобство обслуживания нашим
            клиентам.
          </p>
          <p className='footer__slogan'>
            Чистый воздух вместе с{' '}
            <span className='footer__slogan-company-name'>Pascal Vent</span>
          </p>
        </div>

        <div className='footer__contacts'>
          <h2 className='footer__contacts-subtitle'>Контакты</h2>
          <ul className='footer__contacts-list'>
            <li className='footer__contacts-item footer__contacts-item_icon_number-phone footer__contacts-item_border_bottom'>
              <a
                className='footer__number-phone'
                href='tel:+7492376331'
              >
                + 7 492 373 63 31
              </a>
            </li>
            <li className='footer__contacts-item footer__contacts-item_icon_number-phone footer__contacts-item_border_bottom'>
              <a
                className='footer__number-phone'
                href='tel:+74243678929'
              >
                + 7 424 367 89 29
              </a>
            </li>
            <li className='footer__contacts-item footer__contacts-item_icon_email footer__contacts-item_grid-position_email footer__contacts-item_border_bottom'>
              <a
                className='footer__email'
                href='mailto:PascalVent@mail.ru'
              >
                PascalVent@mail.ru
              </a>
            </li>
            <li className='footer__contacts-item footer__contacts-item_icon_work-time footer__contacts-item_grid-position_work-time footer__contacts-item_padding-top_work-time'>
              <span className='footer__work-time'>{`Пн - Сб: 9:00 - 19:00
Вс: выходной`}</span>
            </li>
            <li className='footer__contacts-item footer__contacts-item_icon_address footer__contacts-item_grid-position_address'>
              <span className='footer__address'>{`Москва ул.
              Плеханова, 28А`}</span>
            </li>
          </ul>
        </div>

        <div className='footer__application'>
          <h2 className='footer__application-subtitle'>Заполнить заявку</h2>
          <FormFeedback
            layout='footer'
            buttonSubmitStyle={{ size: 'm', disabled: true }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
