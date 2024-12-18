import React from 'react';
import Steps from './Steps/Steps';
import ListAgitation from './ListAgitation/ListAgitation';

function CampaigningSteps() {
  return (
    <section className='campaigning-steps mb-100'>
      <h2 className='campaigning-steps__subtitle'>
        <span className='campaigning-steps__subtitle-span'>3 простых шага</span>
        к очищению воздуха
      </h2>

      <ListAgitation />

      <Steps />
    </section>
  );
}

export default CampaigningSteps;
