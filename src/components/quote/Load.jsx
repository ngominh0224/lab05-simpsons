import React from 'react';
import PropTypes from 'prop-types';

export const Load = ({ handleClick }) => (
  <button onClick={handleClick}>Get Quote</button>
);

Load.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
