import React from 'react';
import Steps from './Steps/Steps';
import ListAgitation from './ListAgitation/ListAgitation';

function CampaigningSteps() {
  return (
    <section className='campaigning-steps'>
      <div className='campaigning-steps__box-agitation'>
        <h2 className='campaigning-steps__subtitle'>
          <span>3 простых шага</span> к очищению воздуха
        </h2>

        <ListAgitation />
      </div>

      <Steps />
    </section>
  );
}

export default CampaigningSteps;
