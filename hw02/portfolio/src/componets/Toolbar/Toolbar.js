import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const isSelected = (item) => (item === selected ? 'portfolio__btn portfolio__btn--selected' : 'portfolio__btn');

  return (
    <div className='portfolio__menu'>
      {filters.map((filter, idx) => {
        return (
          <a href='# ' key={idx} onClick={() => onSelectFilter(filter)} className={isSelected(filter)}>
            {filter}
          </a>
        );
      })}
    </div>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
