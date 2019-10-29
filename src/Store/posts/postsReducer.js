import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from './actionTypes';

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
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        data: state.data.filter(post => post.id !== payload.data),
        isLoading: false,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case CREATE_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload.data],
        isLoading: false,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
