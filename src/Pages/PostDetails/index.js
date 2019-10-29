// Absolute imports
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';

// Components
import Header from '../../Components/Header';
import Modal from '../../Components/Modal';
import Input from '../../Components/Form/Input';
import Textarea from '../../Components/Form/Textarea';
import Button from '../../Components/Button';

// Actions
import { fetchPost } from '../../Store/posts/actions';
import { fetchUsers } from '../../Store/users/actions';
import { fetchPostComments, createComment } from '../../Store/comments/actions';

// Helpers
import { emailRegExp, isBeetwen } from '../../Helpers';

// Page parts
import CommentsList from './CommentsList';

// Styled
import {
  Body,
  PostTitle,
  PostDescription,
  CommentButton,
  CommentActions,
  Footer,
} from './styled';

const PostDetails = ({
  match,
  history,
  users,
  posts,
  comments,
  loadPost,
  loadUser,
  loadComments,
  createComment,
}) => {
  const initialFormState = { name: '', email: '', body: '' };
  const [showComments, setShowComments] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadPost(match.params.postId);
    loadUser(match.params.userId);
  }, []);

  const toggleComments = () => {
    if (!showComments) {
      loadComments(match.params.postId);
    }
    setShowComments(!showComments);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = values => {
    console.log(values);
    const formData = {
      ...values,
      userId: match.params.userId,
      postId: match.params.postId
    };
    createComment(formData).then(closeModal);
  };

  const validate = values => {
    const errors = {};

    if (!isBeetwen(values.name.length, 3, 255)) {
      errors.name = 'Required';
    }
    if (!isBeetwen(values.email.length, 3, 255)) {
      errors.email = 'Required';
    } else if (!emailRegExp.test(values.email)) {
      errors.email = 'Required';
    }
    if (!isBeetwen(values.body.length, 3, 255)) {
      errors.body = 'Required';
    }

    return errors;
  };

  const userInfo = users.data.find(user => user.id === parseInt(match.params.userId, 10));
  const postInfo = posts.data.find(post => post.id === parseInt(match.params.postId, 10));

  if (users.isLoading || posts.isLoading) {
    return null;
  }
  console.log(posts.isError);

  if (users.isError || posts.isError || comments.isError) {
    return <h1>Error on page!</h1>;
  }

  return (
    <div>
      <Header userInfo={userInfo} history={history} />
      <Body>
        <PostTitle>{postInfo.title}</PostTitle>
        <PostDescription>{postInfo.body}</PostDescription>
        <CommentActions>
          <CommentButton onClick={toggleComments}>Show comments</CommentButton>
          <CommentButton onClick={openModal}>Add comment</CommentButton>
        </CommentActions>
        {showComments && (
          <CommentsList
            data={comments.data}
            isLoading={comments.isLoading}
            isError={comments.isError}
          />
        )}
      </Body>
      {showModal && (
        <Modal title="Add comment">
          <Formik
            validate={validate}
            initialValues={initialFormState}
            onSubmit={handleSubmit}
            render={({ values, errors, touched, handleChange, isSubmitting }) => (
              <Form>
                <Input
                  label="Name"
                  name="name"
                  value={values.name}
                  onChane={handleChange}
                  isRequired
                  hasError={errors.name && touched.name}
                />
                <Input
                  label="Email"
                  name="email"
                  value={values.email}
                  onChane={handleChange}
                  isRequired
                  hasError={errors.email && touched.email}
                />
                <Textarea
                  label="Body"
                  name="body"
                  value={values.body}
                  onChane={handleChange}
                  isRequired
                  hasError={errors.body && touched.body}
                />
                <Footer>
                  <Button onClick={closeModal}>Cancel</Button>
                  <Button disabled={isSubmitting} type="submit">Save</Button>
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
  users: state.users,
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = {
  loadPost: fetchPost,
  loadUser: fetchUsers,
  loadComments: fetchPostComments,
  createComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
