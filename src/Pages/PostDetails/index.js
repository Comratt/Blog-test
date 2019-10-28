// Absolute imports
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Components
import BackButton from '../../Components/BackButton';
import Button from '../../Components/Button';

// Actions
import { fetchUserPosts } from '../../Store/posts/actions';
import { fetchUsers } from '../../Store/users/actions';
import { fetchPostComments } from '../../Store/comments/actions';

// Page parts
import CommentsList from './CommentsList';

// Styled
import {
  Head,
  Title,
  Body,
  PostTitle,
  PostDescription,
  CommentButton,
  CommentActions,
} from './styled';

const PostDetails = ({
  match,
  history,
  users,
  posts,
  comments,
  loadPosts,
  loadUsers,
  loadComments,
}) => {
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    loadPosts(match.params.userId);
    loadUsers();
  }, []);

  if (users.isLoading || posts.isLoading) {
    return 'Loading...';
  }

  const toggleComments = () => {
    if (comments.data.length === 0 && comments.isLoading) {
      loadComments(match.params.postId);
    }
    setShowComments(!showComments);
  };

  const userInfo = users.data.find(user => user.id === parseInt(match.params.userId, 10));
  const postInfo = posts.data.find(post => post.id === parseInt(match.params.postId, 10));
  return (
    <div>
      <Head>
        <BackButton history={history} />
        <Title>{userInfo.name}</Title>
        <Button>Add</Button>
      </Head>
      <Body>
        <PostTitle>{postInfo.title}</PostTitle>
        <PostDescription>{postInfo.body}</PostDescription>
        <CommentActions>
          <CommentButton onClick={toggleComments}>Show comments</CommentButton>
          <CommentButton>Add comment</CommentButton>
        </CommentActions>
        {showComments && (
          <CommentsList
            data={comments.data}
            isLoading={comments.isLoading}
            isError={comments.isError}
          />
        )}
      </Body>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = {
  loadPosts: fetchUserPosts,
  loadUsers: fetchUsers,
  loadComments: fetchPostComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
