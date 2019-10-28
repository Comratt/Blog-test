import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_START:
      return initialState;
    case FETCH_USERS_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: payload.data,
      };
    case FETCH_USERS_FAILURE:
      return {
        isLoading: false,
        isError: true,
        data: [],
      };
    default:
      return state;
  }
};
