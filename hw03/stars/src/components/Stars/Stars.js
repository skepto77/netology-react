import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/Star';
import { times, uniqueId } from 'lodash';

const Stars = ({ count = 0 }) => {
  if (count === 0) {
    return null;
  }
  return (
    <ul className='card-body-stars u-clearfix'>
      {times(count, Number).map((item) => (
        <li key={uniqueId('star_')}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Stars;
