const SHOW_POSTS = 'SHOW_POSTS';
const SHOW_POSTS_BY_LANG = 'SHOW_POSTS_BY_LANG';

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

export { SHOW_POSTS, SHOW_POSTS_BY_LANG, showPosts, showPostsByLang };
