import { combineReducers } from 'redux';

import { SHOW_POSTS, SHOW_POSTS_BY_LANG } from '../action';

function comments(state = {}, action) {
  return state;
}

function reducePosts(posts) {
  return posts.reduce((newPostsState, post) => (
    { ...newPostsState, [post.id]: post }), {});
}

function posts(state = {}, action) {
  switch (action.type) {
    case SHOW_POSTS:
      return reducePosts(action.posts);
    case SHOW_POSTS_BY_LANG:
      const { language, posts } = action.payload;
      return reducePosts(posts.filter(post => post.category === language));
    default:
      return state;
  }
}

export default combineReducers({
  comments,
  posts,
});
