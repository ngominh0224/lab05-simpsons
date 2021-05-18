import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ character, text, image }) => (
  <div>
    <p>{character}</p>
    <p>{text}</p>
    <img src={image} alt={character} />
  </div>
);

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
