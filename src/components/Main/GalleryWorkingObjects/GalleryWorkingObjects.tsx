import React from 'react';
import { listGalleryWorkingObjects } from './listGalleryWorkingObjects';
import Card from './Card/Card';

function GalleryWorkingObjects() {
  return (
    <section className='gallery-working-objects'>
      <div className='gallery-working-objects__wrapper'>
        <h2 className='gallery-working-objects__subtitle'>
          Комплексное решение по монтажу {''}
          <span className='gallery-working-objects__subtitle-span'>и</span>
          {''} вентиляции под ключ
        </h2>

        <div className='gallery-working-objects__grid'>
          {listGalleryWorkingObjects.map((item, id) => {
            return (
              <Card
                key={id}
                data={item}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GalleryWorkingObjects;
