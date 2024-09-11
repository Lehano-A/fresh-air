import React from 'react';
import ServicesProvided from './ServicesProvided/ServicesProvided';
import GalleryWorkingObjects from './GalleryWorkingObjects/GalleryWorkingObjects';
import CampaigningSteps from './CampaigningSteps/CampaigningSteps';

function Main() {
  return (
    <main className='main'>
      <ServicesProvided />
      <GalleryWorkingObjects />
      <CampaigningSteps />
    </main>
  );
}

export default Main;
