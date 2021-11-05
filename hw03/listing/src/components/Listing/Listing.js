import React from 'react';
import PropTypes from 'prop-types';
import ListingItem from '../ListingItem/ListingItem';

const Listing = ({ items }) => {
  return (
    items.length > 0 && (
      <div className='item-list'>
        {items.map(
          (item) =>
            item.state === 'active' && (
              <ListingItem item={item} key={item.listing_id} />
            )
        )}
      </div>
    )
  );
};

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Listing;
