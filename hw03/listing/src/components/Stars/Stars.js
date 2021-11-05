import PropTypes from 'prop-types';
import { times, uniqueId } from 'lodash';
import Star from '../Star/Star';

const Stars = ({ count }) => {
  return (
    <ul className='card-body-stars u-clearfix'>
      {times(count, Number).map((item) => (
        <li>
          <Star key={uniqueId('star_')} />
        </li>
      ))}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Stars;
