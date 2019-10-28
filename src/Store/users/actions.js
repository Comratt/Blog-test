// API
import axios from '../../API';

// Helpers
import { reducersHandler } from '../../Helpers';

// Action Types
import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  return axios
    .get('users')
    .then(response => {
      dispatch(reducersHandler(FETCH_USERS_SUCCESS, response));
    })
    .catch(err => dispatch(reducersHandler(FETCH_USERS_FAILURE, err)));
};

export const fetchUser = (userId = '') => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  return axios
    .get(`users/${userId}`)
    .then(response => {
      dispatch(reducersHandler(FETCH_USERS_SUCCESS, { data: [response.data] }));
    })
    .catch(err => dispatch(reducersHandler(FETCH_USERS_FAILURE, err)));
};

export const dd = '';
