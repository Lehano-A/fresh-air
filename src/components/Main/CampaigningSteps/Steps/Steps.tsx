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

      <span className='campaigning-steps__arrow campaigning-steps__arrow_step-1'></span>
      <span className='campaigning-steps__arrow campaigning-steps__arrow_step-2'></span>
      <span className='campaigning-steps__arrow campaigning-steps__arrow_step-3'></span>
      <span className='campaigning-steps__arrow campaigning-steps__arrow_step-4'></span>
    </div>
  );
}

export default Steps;
