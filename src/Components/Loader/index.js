// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Ring from './styled';

const Loader = ({ height, width, color }) => (
  <Ring height={height} width={width} color={color}>
    <div />
    <div />
    <div />
    <div />
  </Ring>
);

Loader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

Loader.defaultProps = {
  height: 60,
  width: 60,
  color: '#1BA1F3',
};

export default Loader;
