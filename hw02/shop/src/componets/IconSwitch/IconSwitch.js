import React from 'react';
import PropTypes from 'prop-types';
import './IconSwitch.css';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className='menu'>
      <div className='icon-view material-icons' onClick={onSwitch}>
        {icon}
      </div>
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
