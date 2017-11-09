import { createSelector } from 'reselect';

const getActiveSort = state => state.activeSort;
const getPosts = state => state.posts;

export const getSortedPosts = createSelector(
  [getActiveSort, getPosts],
  (activeSort, posts) => {
    const postsToSort = Object.keys(posts).map(postId => posts[postId]);

    switch (activeSort) {
      case 'DATE':
        return postsToSort;
      case 'VOTE':
        return postsToSort.filter(t => t.voteScore === -5);
      default:
        return postsToSort;
    }
  },
);
