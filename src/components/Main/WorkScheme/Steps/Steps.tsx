import React from 'react';
import ReceivingApplication from './ReceivingApplication/ReceivingApplication';
import Consultation from './Consultation/Consultation';
import VisitObject from './VisitObject/VisitObject';
import Graphic from './Graphic/Graphic';
import Contract from './Contract/Contract';
import DeliveryInstallation from './DeliveryInstallation/DeliveryInstallation';
import SigningAct from './SigningAct/SigningAct';

function Steps() {
  return (
    <div className='work-scheme__steps'>
      <ReceivingApplication />
      <Consultation />
      <VisitObject />
      <Graphic />
      <Contract />
      <DeliveryInstallation />
      <SigningAct />
    </div>
  );
}

export default Steps;
