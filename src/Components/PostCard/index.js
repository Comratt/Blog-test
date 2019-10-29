// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button';

// Helpers
import { PostTypes } from '../../Helpers';

// Icons
import { Trash, ArrowRight } from '../Icons';

// Styled
import { Wrapper, Title, CardWrap, customButtonStyles } from './styled';

const PostCard = ({ post, deletePost }) => {
  return (
    <CardWrap>
      <Wrapper>
        <Trash height="30" width="30" fill="red" onClick={deletePost} />
        <Title>{post.title}</Title>
        <Button
          additionalStyles={customButtonStyles}
          as="a"
          href={`/user/${post.userId}/${post.id}`}
        >
          <ArrowRight height="30" width="30" fill="red" />
        </Button>
      </Wrapper>
    </CardWrap>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape(PostTypes).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostCard;
