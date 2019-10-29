import qs from 'query-string';
// API
import axios from '../../API';

// Helpers
import { reducersHandler } from '../../Helpers';

// Action Types
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from './actionTypes';

export const fetchUserPosts = userId => dispatch => {
  dispatch(FETCH_POSTS_START);
  const stringified = qs.stringify({ userId });
  return axios
    .get(`posts?${stringified}`)
    .then(response => {
      dispatch(reducersHandler(FETCH_POSTS_SUCCESS, response));
    })
    .catch(err => dispatch(reducersHandler(FETCH_POSTS_FAILURE, err)));
};

export const fetchPost = postId => dispatch => {
  dispatch(FETCH_POSTS_START);
  return axios
    .get(`posts/${postId}`)
    .then(response => {
      dispatch(reducersHandler(FETCH_POSTS_SUCCESS, { data: [response.data] }));
    })
    .catch(err => dispatch(reducersHandler(FETCH_POSTS_FAILURE, err)));
};

export const deletePost = postId => dispatch => {
  dispatch(DELETE_POST_START);
  return axios
    .delete(`posts/${postId}`)
    .then(() => dispatch(reducersHandler(DELETE_POST_SUCCESS, { data: postId })))
    .catch(err => dispatch(reducersHandler(DELETE_POST_FAILURE, err)));
};

export const createPost = formData => dispatch => {
  dispatch(CREATE_POST_START);
  return axios
    .post('posts', formData)
    .then(response => dispatch(reducersHandler(CREATE_POST_SUCCESS, response)))
    .catch(err => dispatch(reducersHandler(CREATE_POST_FAILURE, err)));
};
