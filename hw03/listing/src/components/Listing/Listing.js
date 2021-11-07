import React from 'react';
import PropTypes from 'prop-types';
import ListingItem from '../ListingItem/ListingItem';

const Listing = ({ items }) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <div className='item-list'>
      {items.map((item) => (
        <ListingItem item={item} key={item.listing_id} />
      ))}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      listing_id: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Listing;
