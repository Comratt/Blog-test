import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actionTypes';

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_START:
      return initialState;
    case FETCH_POSTS_SUCCESS:
      return {
        isError: false,
        isLoading: false,
        data: payload.data,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...initialState,
        isError: true,
      };
    default:
      return state;
  }
};
