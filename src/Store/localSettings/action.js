import { PAGE_LOADING_START, PAGE_LOADING_FINISH } from './actionTypes';

export const showPageLoading = () => dispatch => dispatch(PAGE_LOADING_START);

export const hidePageLoading = () => dispatch => dispatch(PAGE_LOADING_FINISH);
