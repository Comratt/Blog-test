import { PAGE_LOADING_START, PAGE_LOADING_FINISH } from './actionTypes';

const initialState = {
  isPageLoading: true,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case PAGE_LOADING_START:
      return {
        ...state,
        isPageLoading: true,
      };
    case PAGE_LOADING_FINISH:
      return {
        ...state,
        isPageLoading: false,
      };
    default:
      return state;
  }
};
