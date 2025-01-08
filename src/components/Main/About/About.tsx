import React from 'react';
import Features from './Features/Features';
import Achievements from './Achievements/Achievements';

function About() {
  return (
    <section className='about'>
      <div className='about__wrapper'>
        <Features />
        <Achievements />
      </div>
    </section>
  );
}

export default About;
