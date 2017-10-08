const SHOW_POSTS = 'SHOW_POSTS';
const SHOW_POSTS_BY_LANG = 'SHOW_POSTS_BY_LANG';
const SHOW_POST_DETAILS = 'SHOW_POST_DETAILS';

const showPosts = (posts) => {
  return {
    type: SHOW_POSTS,
    posts,
  };
};

const showPostsByLang = (posts, language) => {
  return {
    type: SHOW_POSTS_BY_LANG,
    payload: { language, posts },
  };
};

const showPostDetails = (post, comments) => {
  return {
    type: SHOW_POST_DETAILS,
    payload: { comments, post },
  };
};

export { SHOW_POSTS, SHOW_POSTS_BY_LANG, SHOW_POST_DETAILS,  showPosts, showPostsByLang, showPostDetails };
