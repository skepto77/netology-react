import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className='portfolio__menu'>
      {filters.map((filter, idx) => {
        return (
          <a href='# ' key={idx} onClick={() => onSelectFilter(filter)} className={cn('portfolio__btn', { 'portfolio__btn--selected': filter === selected })}>
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
