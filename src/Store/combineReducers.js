import { combineReducers } from 'redux';

import users from './users/usersReducer';
import posts from './posts/postsReducer';
import comments from './comments/commentsReducer';

export default combineReducers({
  users,
  posts,
  comments,
});
