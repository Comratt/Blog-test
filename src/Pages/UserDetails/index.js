// Absolute imports
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';

// Helpers
import { PostTypes, isBeetwen, UserTypes } from '../../Helpers';

// Actions
import {
  fetchUserPosts,
  deletePost as deletePostAction,
  createPost as createPostAction,
} from '../../Store/posts/actions';
import { fetchUser } from '../../Store/users/actions';

// Components
import Header from '../../Components/Header';
import Modal from '../../Components/Modal';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Button';

// Page parts
import PostsList from './PostsList';

// Styled
import { Footer } from './styled';

const UserDetails = ({
  posts,
  users,
  history,
  loadUserPosts,
  deletePost,
  createPost,
  loadUser,
  match,
}) => {
  const initialFormState = { title: '', body: '' };
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    loadUserPosts(match.params.userId);
    loadUser(match.params.userId);
  }, []);

  const closeModal = () => setShowAddModal(false);
  const openModal = () => setShowAddModal(true);

  const userInfo = users.data.find(user => user.id === parseInt(match.params.userId, 10));

  const handleSubmit = values => {
    const { title, body } = values;
    const formData = {
      title,
      body,
      userId: parseInt(match.params.userId, 10),
    };
    createPost(formData).then(closeModal);
  };

  const validate = values => {
    const errors = {};

    if (!isBeetwen(values.title.length, 3, 255)) {
      errors.title = 'Required';
    }
    if (!isBeetwen(values.body.length, 3, 255)) {
      errors.body = 'Required';
    }

    return errors;
  };

  return (
    <div>
      <Header userInfo={userInfo} history={history} hasAddButton actionHandler={openModal} />
      <PostsList
        data={posts.data}
        isLoading={posts.isLoading}
        isError={posts.isError}
        deletePost={deletePost}
      />
      {showAddModal && (
        <Modal onAction={handleSubmit} onClose={closeModal} title="Add Post">
          <Formik
            validate={validate}
            initialValues={initialFormState}
            onSubmit={handleSubmit}
            render={({ values, errors, touched, handleChange, isSubmitting }) => (
              <Form>
                <Input
                  label="Title"
                  isRequired
                  name="title"
                  value={values.title}
                  onChane={handleChange}
                  hasError={errors.title && touched.title}
                />
                <Input
                  label="Body"
                  isRequired
                  name="body"
                  value={values.body}
                  onChane={handleChange}
                  hasError={errors.body && touched.body}
                />
                <Footer>
                  <Button onClick={closeModal}>Cancel</Button>
                  <Button disabled={isSubmitting} type="submit">
                    Save
                  </Button>
                </Footer>
              </Form>
            )}
          />
        </Modal>
      )}
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
  deletePost: deletePostAction,
  createPost: createPostAction,
};

UserDetails.propTypes = {
  posts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape(PostTypes)),
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
  }).isRequired,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape(UserTypes)),
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
  }).isRequired,
  loadUserPosts: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: { id: PropTypes.string } }).isRequired,
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  deletePost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
