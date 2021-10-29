import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from '../ShopCard/ShopCard';
import './ListView.css';

const ListView = ({ products }) => {
  return (
    <div className='products-list list'>
      {products.map((product, idx) => (
        <ShopCard product={product} key={idx} />
      ))}
    </div>
  );
};

ListView.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListView;
