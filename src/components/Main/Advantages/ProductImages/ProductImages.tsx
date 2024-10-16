import React from 'react';
import CeilingSplitSystemImage from '../../../../images/Components/Advantages/content/ceiling-split-system.png';
import AirFlowSchemeImage from '../../../../images/Components/Advantages/content/air-flow-scheme.png';
import RoundTubeImage from '../../../../images/Components/Advantages/content/round-tube.png';
import SquareTubeImage from '../../../../images/Components/Advantages/content/square-tube.png';

function ProductImages() {
  return (
    <div className='advantages__product-images'>
      <div>
        <img
          src={CeilingSplitSystemImage}
          className='advantages__image'
          alt='Изображение потолочной сплит-системы'
        />
        <img
          src={AirFlowSchemeImage}
          className='advantages__image'
          alt='Изображение схемы потока воздуха по трубам'
        />
      </div>

      <div>
        <img
          src={RoundTubeImage}
          className='advantages__image'
          alt='Изображение круглой металлической трубы'
        />
        <img
          src={SquareTubeImage}
          className='advantages__image'
          alt='Изображение квадратной металлической трубы'
        />
      </div>
    </div>
  );
}

export default ProductImages;
