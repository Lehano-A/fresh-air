import React from 'react';
import ServicesProvided from './ServicesProvided/ServicesProvided';
import GalleryWorkingObjects from './GalleryWorkingObjects/GalleryWorkingObjects';
import CampaigningSteps from './CampaigningSteps/CampaigningSteps';
import SubmitApplication from './SubmitApplication/SubmitApplication';
import About from './About/About';
import Advantages from './Advantages/Advantages';

function Main() {
  return (
    <main className='main'>
      <ServicesProvided />
      <GalleryWorkingObjects />
      <CampaigningSteps />
      <SubmitApplication />
      <About />
      <Advantages />
    </main>
  );
}

export default Main;
