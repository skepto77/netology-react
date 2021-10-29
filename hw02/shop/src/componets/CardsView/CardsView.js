import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

const CardsView = ({ products }) => {
  return (
    <div className='products-list card'>
      {products.map((product, idx) => (
        <ShopCard product={product} key={idx} />
      ))}
    </div>
  );
};

CardsView.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardsView;
