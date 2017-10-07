const SHOW_POSTS = 'SHOW_POSTS';

const showPosts = (posts) => {
  return {
    type: SHOW_POSTS,
    posts,
  };
};

export { SHOW_POSTS, showPosts };
