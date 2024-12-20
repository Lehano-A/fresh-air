import React from 'react';

interface StepProps {
  text: string;
  image: string;
  alt: string;
}

function Step({ text, image, alt }: StepProps) {
  return (
    <div className='campaigning-steps__step'>
      <img
        className='campaigning-steps__step-icon'
        src={image}
        alt={alt}
      />
      <p className='campaigning-steps__step-text'>{text}</p>
    </div>
  );
}

export default Step;
