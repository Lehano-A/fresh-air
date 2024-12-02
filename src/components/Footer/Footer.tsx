import React from 'react';
import FormFeedback from '../common/FormFeedback/FormFeedback';
import Logo from '../common/Logo/Logo';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <Logo styleClass='footer__logo' />
        <div className='footer__about'>
          <p className='footer__description'>
            Компания "Pascal Vent" входит в число лучших специализированных
            организаций, с широким ассортиментом товаров и услуг,
            предназначенных для систем вентиляции и кондиционирования,
            предоставляющих высокий сервис и удобство обслуживания нашим
            клиентам.
          </p>
          <p className='footer__slogan'>
            Чистый воздух вместе с <span>Pascal Vent</span>
          </p>
        </div>

        <div className='footer__contacts'>
          <h2 className='footer__contacts-title'>Контакты</h2>
          <ul className='footer__contacts-list'>
            <li className='footer__number-phone'>+ 7 492 373 63 31</li>
            <li className='footer__number-phone'>+ 7 424 367 89 29</li>
            <li className='footer__email'>PascalVent@mail.ru</li>
            <li className='footer__work-time'>
              {`Пн - Сб: 9:00 - 19:00
Вс: выходной`}
            </li>
            <li className='footer__address'>
              {`Московский регион, Москва
ул. Плеханова, 28А`}
            </li>
          </ul>
        </div>

        <div className='footer__application'>
          <h2 className='footer__application-title'>Заполнить заявку</h2>
          <FormFeedback
            layoutClass='footer'
            buttonSubmitStyle={{ variant: 'm' }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
