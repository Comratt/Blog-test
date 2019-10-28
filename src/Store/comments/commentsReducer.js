import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './actionTypes';

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS_START:
      return initialState;
    case FETCH_COMMENTS_SUCCESS:
      return {
        isError: false,
        isLoading: false,
        data: payload.data,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...initialState,
        isError: true,
      };
    default:
      return state;
  }
};
