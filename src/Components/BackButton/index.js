// Absolute imports
import React from 'react';

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

export default BackButton;
