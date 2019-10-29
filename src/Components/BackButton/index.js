// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { ArrowLeft } from '../Icons';

// Styled
import { Wrapper } from './styled';

const BackButton = ({ history }) => (
  <Wrapper onClick={() => history.goBack()}>
    <ArrowLeft height="30" width="30" />
    <span>Back</span>
  </Wrapper>
);

BackButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default BackButton;
