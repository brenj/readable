import { actions } from '.';

export const showPosts = (posts) => {
  return {
    type: actions.SHOW_POSTS,
    posts,
  };
};

export const showPostsByLang = (posts, language) => {
  return {
    type: actions.SHOW_POSTS_BY_LANG,
    payload: { language, posts },
  };
};

export const showPostDetails = (post, comments) => {
  return {
    type: actions.SHOW_POST_DETAILS,
    payload: { comments, post },
  };
};
