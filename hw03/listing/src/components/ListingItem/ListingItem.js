import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ListingItem = ({ item }) => {
  if (item.state !== 'active') {
    return null;
  }

  const {
    url,
    MainImage: { url_570xN },
    title,
    currency_code,
    price,
    quantity,
  } = item;

  const getPrice = (currency_code) => {
    switch (currency_code) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} GBP`;
    }
  };

  const itemQuantityClass = cn(
    'item-quantity',
    `level-${quantity <= 10 ? 'low' : quantity <= 20 ? 'medium' : 'high'}`
  );

  const getShortTitle = (title) =>
    title.length > 50 ? `${title.substring(0, 50)}...` : title;

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={url}>{<img src={url_570xN} alt={title} />}</a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{getShortTitle(title)}</p>
        <p className='item-price'>{getPrice(currency_code)}</p>
        <p className={itemQuantityClass}>{quantity} left</p>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    currency_code: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListingItem;
