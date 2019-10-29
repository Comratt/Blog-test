// API
import axios from '../../API';

// Helpers
import { reducersHandler } from '../../Helpers';

// Action Types
import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} from './actionTypes';

export const fetchPostComments = postId => dispatch => {
  dispatch(FETCH_COMMENTS_START);
  return axios
    .get(`posts/${postId}/comments`)
    .then(response => {
      dispatch(reducersHandler(FETCH_COMMENTS_SUCCESS, response));
    })
    .catch(err => dispatch(reducersHandler(FETCH_COMMENTS_FAILURE, err)));
};

export const createComment = formData => dispatch => {
  dispatch(CREATE_COMMENT_START);
  return axios
    .post(`posts/${formData.postId}/comments`, formData)
    .then(response => dispatch(reducersHandler(CREATE_COMMENT_SUCCESS, response)))
    .catch(err => dispatch(reducersHandler(CREATE_COMMENT_FAILURE, err)));
};
