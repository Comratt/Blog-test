import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import users from './users/usersReducer';
import posts from './posts/postsReducer';
import comments from './comments/commentsReducer';

export default combineReducers({
  users,
  posts,
  comments,
  loadingBar: loadingBarReducer,
});
