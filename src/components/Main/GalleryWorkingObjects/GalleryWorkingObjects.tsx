import React from 'react';
import { listGalleryWorkingObjects } from '../../../constants/listGalleryWorkingObjects';
import Card from './Card/Card';

function GalleryWorkingObjects() {
  return (
    <section className='gallery-working-objects'>
      <h2 className='gallery-working-objects__subtitle'>
        Комплексное решение по монтажу и вентиляции под ключ
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
    </section>
  );
}

export default GalleryWorkingObjects;
