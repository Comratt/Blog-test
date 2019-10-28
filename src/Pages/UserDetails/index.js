// Absolute imports
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Helpers
import { PostTypes } from '../../Helpers';

// Actions
import { fetchUserPosts } from '../../Store/posts/actions';
import { fetchUser } from '../../Store/users/actions';

//Components
import BackButton from '../../Components/BackButton';
import Button from '../../Components/Button';

// Page parts
import PostsList from './PostsList';

// Styled
import { Head, Title } from './styled';

const UserDetails = ({ posts, users, history, loadUserPosts, loadUser, match }) => {
  useEffect(() => {
    loadUserPosts(match.params.userId);
    loadUser(match.params.userId);
  }, []);

  if (users.isLoading || posts.isLoading) {
    return 'Loading...';
  }

  const userInfo = users.data.find(user => user.id === parseInt(match.params.userId, 10));

  return (
    <div>
      <Head>
        <BackButton history={history} />
        <Title>{userInfo.name}</Title>
        <Button onClick>Add</Button>
      </Head>
      <PostsList data={posts.data} isLoading={posts.isLoading} isError={posts.isError} />
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users,
});

const mapDispatchToProps = {
  loadUserPosts: fetchUserPosts,
  loadUser: fetchUser,
};

UserDetails.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape(PostTypes)).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  loadUserPosts: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: { id: PropTypes.string } }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
