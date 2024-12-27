import React from 'react';
import dataSteps from '../dataSteps';

interface stepKeys {
  subtitle: string;
  text: string | null;
  className: string;
}

function Steps() {
  return (
    <div className='work-scheme__steps'>
      {dataSteps.map((step: stepKeys, id: number) => (
        <div
          key={step.subtitle + id}
          className={`work-scheme__step work-scheme__${step.className}`}
        >
          <div
            className={`work-scheme__content-box ${id % 2 !== 0 ? 'work-scheme__content-box_align-right' : ''}`}
          >
            {/*_align-right — выравниваем контент во втором столбце по правой стороне */}
            <h3 className='work-scheme__subtitle'>{step.subtitle}</h3>
            {step.text && <p className='work-scheme__text'>{step.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
