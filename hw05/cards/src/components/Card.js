import React from 'react';

const Card = ({ image, children }) => {
  return (
    <div className='card' style={{ width: '18rem', margin: '2rem' }}>
      {image && <img src={image} className='card-img-top' alt='img' />}
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;
