// API
import axios from '../../API';

// Helpers
import { reducersHandler } from '../../Helpers';

// Action Types
import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './actionTypes';

export const fetchPostComments = postId => dispatch => {
  dispatch({ type: FETCH_COMMENTS_START });
  return axios
    .get(`posts/${postId}/comments`)
    .then(response => {
      dispatch(reducersHandler(FETCH_COMMENTS_SUCCESS, response));
    })
    .catch(err => dispatch(reducersHandler(FETCH_COMMENTS_FAILURE, err)));
};

export const dd = '';
