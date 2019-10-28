import qs from 'query-string';
// API
import axios from '../../API';

// Helpers
import { reducersHandler } from '../../Helpers';

// Action Types
import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actionTypes';

export const fetchUserPosts = userId => dispatch => {
  dispatch({ type: FETCH_POSTS_START });
  const stringified = qs.stringify({ userId });
  return axios
    .get(`posts?${stringified}`)
    .then(response => {
      dispatch(reducersHandler(FETCH_POSTS_SUCCESS, response));
    })
    .catch(err => dispatch(reducersHandler(FETCH_POSTS_FAILURE, err)));
};

export const dd = '';
