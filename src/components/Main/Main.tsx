import React from 'react';
import ServicesProvided from './ServicesProvided/ServicesProvided';
import GalleryWorkingObjects from './GalleryWorkingObjects/GalleryWorkingObjects';
import CampaigningSteps from './CampaigningSteps/CampaigningSteps';
import SubmitApplication from './SubmitApplication/SubmitApplication';
import About from './About/About';
import Advantages from './Advantages/Advantages';
import WorkScheme from './WorkScheme/WorkScheme';

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
    </main>
  );
}

export default Main;
