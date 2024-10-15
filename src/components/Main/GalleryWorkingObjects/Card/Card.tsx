import React from 'react';

interface CardProps {
  data: {
    price: string;
    objectName: string;
    image: string;
    alt: string;
  };
}

function Card({ data }: CardProps) {
  const { price, objectName, image, alt } = data;

  return (
    <article className='gallery-working-objects__card'>
      <span className='gallery-working-objects__card-price'>{price}&nbsp;</span>

      <img
        src={image}
        alt={alt}
        className='gallery-working-objects__card-image'
      />

      <h3 className='gallery-working-objects__card-object-name'>
        {objectName}
      </h3>
    </article>
  );
}

export default Card;