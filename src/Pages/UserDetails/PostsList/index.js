// Absolute imports
import React from 'react';

// Components
import PostCard from '../../../Components/PostCard';

// Styled
import { Wrapper } from './styled';

const PostsList = ({ data, isLoading, isError }) => {
  if (isLoading) {
    return 'Loading ...';
  }

  return (
    <Wrapper>
      {data.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Wrapper>
  );
};

export default PostsList;
