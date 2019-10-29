// Absolute imports
import React from 'react';

// Components
import PostCard from '../../../Components/PostCard';

// Styled
import { Wrapper } from './styled';

const PostsList = ({ data, isError, deletePost }) => {
  return (
    <Wrapper>
      {data.map(post => (
        <PostCard key={post.id} post={post} deletePost={() => deletePost(post.id)} />
      ))}
    </Wrapper>
  );
};

export default PostsList;
