import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
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
    case CREATE_COMMENT_START:
      return { ...state, isLoading: true };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: [...state.data, payload.data],
      };
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
