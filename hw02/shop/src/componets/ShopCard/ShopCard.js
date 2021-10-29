import React from 'react';
import PropTypes from 'prop-types';
import './ShopCard.css';

const ShopCard = ({ product }) => {
  const { name, price, color, img } = product;
  return (
    <div className='product'>
      <h2 className='product__title'>{name}</h2>
      <span className='product__color'>{color}</span>
      <img src={img} alt={name} />
      <span className='product__price'>${price}</span>
      <button className='product__btn'>Add to cart</button>
    </div>
  );
};

ShopCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default ShopCard;
