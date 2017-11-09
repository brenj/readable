import { createSelector } from 'reselect';
import sortBy from 'sort-by';

const getActiveSort = state => state.activeSort;
const getPosts = state => state.posts;

export const getSortedPosts = createSelector(
  [getActiveSort, getPosts],
  (activeSort, posts) => {
    const postsToSort = Object.keys(posts).map(postId => posts[postId]);

    switch (activeSort) {
      case 'DATE':
        return postsToSort.sort(sortBy('-timestamp'));
      case 'VOTE':
        return postsToSort.sort(sortBy('-voteScore'));
      default:
        return postsToSort;
    }
  },
);
