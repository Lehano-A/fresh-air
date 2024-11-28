import React from 'react';
import iconLightBulb from '../../../../images/components/CampaigningSteps/icons/light-bulb.svg';
import iconPad from '../../../../images/components/CampaigningSteps/icons/pad.svg';
import iconFan from '../../../../images/components/CampaigningSteps/icons/fan.svg';
import Step from './Step/Step';

function Steps() {
  return (
    <div className='campaigning-steps__steps'>
      <Step
        text='Ваше желание'
        image={iconLightBulb}
        alt='Иконка - включённая лампочка'
      />
      <Step
        text='Заявка'
        image={iconPad}
        alt='Иконка - планшет для записей'
      />
      <Step
        text='Реализация'
        image={iconFan}
        alt='Иконка - крыльчатка в кожухе'
      />
    </div>
  );
}

export default Steps;
