import React from 'react';
import ServicesProvided from './ServicesProvided/ServicesProvided';
import GalleryWorkingObjects from './GalleryWorkingObjects/GalleryWorkingObjects';
import CampaigningSteps from './CampaigningSteps/CampaigningSteps';
import SubmitApplication from './SubmitApplication/SubmitApplication';
import About from './About/About';
import Advantages from './Advantages/Advantages';
import WorkScheme from './WorkScheme/WorkScheme';
import Portfolio from './Portfolio/Portfolio';
import Customers from './Сustomers/Сustomers';

function Main() {
  return (
    <main className='main'>
      <ServicesProvided />
      <GalleryWorkingObjects />
      <CampaigningSteps />
      <SubmitApplication />
      <About />
      <Advantages />
      <WorkScheme />
      <Portfolio />
      <Customers />
    </main>
  );
}

export default Main;
