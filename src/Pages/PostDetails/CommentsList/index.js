// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from '../../../Components/CommentCard';

// Styled
import { Wrapper } from './styled';

const CommentsList = ({ isError, data }) => {
  return (
    <Wrapper>
      {data.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
};

export default CommentsList;
