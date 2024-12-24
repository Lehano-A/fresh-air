import React from 'react';
import IconsList from './IconsList/IconsList';
import DetailsList from './DetailsList/DetailsList';
import ButtonAction from '../../common/ButtonAction/ButtonAction';
import ProductImages from './ProductImages/ProductImages';

function Advantages() {
  return (
    <section className='advantages'>
      <div className='advantages__info'>
        <h2 className='advantages__subtitle'>
          {`Комфорт и уют
в любое время года`}
        </h2>
        <IconsList />
        <DetailsList />
        <p className='advantages__text'>
          <span>Pascal Vent</span> поможет улучшить ваше самочувствие и повысить
          работоспособность днем, а ночью подарит здоровый и крепкий сон. Это
          важно для тех, кто следит за своим здоровьем и здоровьем своих
          близких.
        </p>

        <ButtonAction
          layout='advantages'
          name='заполнить заявку'
          size='xl'
        />
      </div>

      <ProductImages />
    </section>
  );
}

export default Advantages;
