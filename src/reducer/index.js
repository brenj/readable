import { combineReducers } from 'redux';

import activeSortReducer from './activeSort';
import commentsReducer from './comments';
import postsReducer from './posts';

export default combineReducers({
  activeSort: activeSortReducer,
  comments: commentsReducer,
  posts: postsReducer,
});
