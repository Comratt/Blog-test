// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { Wrapper, Head, Name, Email, Body } from './styled';

export default ({ comment }) => (
  <Wrapper>
    <Head>
      <Name>{comment.name}</Name>
      <Email>{comment.email}</Email>
    </Head>
    <Body>{comment.body}</Body>
  </Wrapper>
);
