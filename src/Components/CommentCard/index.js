// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { CommentTypes } from '../../Helpers';

// Styled
import { Wrapper, Head, Name, Email, Body } from './styled';

const CommentCard = ({ comment }) => (
  <Wrapper>
    <Head>
      <Name>{comment.name}</Name>
      <Email>{comment.email}</Email>
    </Head>
    <Body>{comment.body}</Body>
  </Wrapper>
);

CommentCard.propTypes = {
  comment: PropTypes.shape(CommentTypes).isRequired,
};

export default CommentCard;
