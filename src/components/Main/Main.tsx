import React from 'react';
import ServicesProvided from './ServicesProvided/ServicesProvided';
import GalleryWorkingObjects from './GalleryWorkingObjects/GalleryWorkingObjects';
import CampaigningSteps from './CampaigningSteps/CampaigningSteps';
import SubmitApplication from './SubmitApplication/SubmitApplication';

function Main() {
  return (
    <main className='main'>
      <ServicesProvided />
      <GalleryWorkingObjects />
      <CampaigningSteps />
      <SubmitApplication />
    </main>
  );
}

export default Main;
