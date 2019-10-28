// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button';

// Icons
import { Trash, ArrowRight } from '../Icons';

// Styled
import { Wrapper, Title, CardWrap } from './styled';

const PostCard = ({ post, userId }) => {
  return (
    <CardWrap>
      <Button as="a" href={`/user/${post.userId}/${post.id}`}>
        <Wrapper>
          <Trash height="30" width="30" fill="red" />
          <Title>{post.title}</Title>
          <ArrowRight height="30" width="30" fill="red" />
        </Wrapper>
      </Button>
    </CardWrap>
  );
};

export default PostCard;
