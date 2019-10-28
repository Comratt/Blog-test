// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from '../../../Components/CommentCard';

// Styled
import { Wrapper } from './styled';

const CommentsList = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Wrapper>
      {data.map(comment => (
        <CommentCard comment={comment} />
      ))}
    </Wrapper>
  );
};

export default CommentsList;
