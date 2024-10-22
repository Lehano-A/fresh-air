import React from 'react';
import ReceivingApplication from './ReceivingApplication/ReceivingApplication';
import Consultation from './Consultation/Consultation';
import VisitObject from './VisitObject/VisitObject';

function Steps() {
  return (
    <div className='work-scheme__steps'>
      <ReceivingApplication />
      <Consultation />
      <VisitObject />
    </div>
  );
}

export default Steps;
