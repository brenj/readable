import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../../api/methods';
import Heading from '../Heading';
import PostLister from '../PostLister';
import { showPosts, sortBy } from '../../action/creators';
import { getSortedPosts } from '../../selectors/index.js';
import Sorter from '../Sorter';

import './home-view.css';

const HEADING = 'Readable is the place for discussing code snippets';
const SUBHEADING = '- Anonymously -';

class HomeView extends Component {
  componentDidMount() {
    getPosts().then(posts => this.props.postsDispatcher(posts));
  }

  handleSort = (sortType) => {
    this.props.sortByDispatcher(sortType)
  };

  render() {
    const { activeSort, posts } = this.props;

    return (
      <div>
        <Heading mainText={HEADING} subText={SUBHEADING} />
        <Link to="/post/new">
          <button
            className="button-primary home-view__button--comment"
          >
            Add Post
          </button>
        </Link>
        <Sorter
          activeSort={activeSort}
          activeSortHandler={this.handleSort}
          sorterType="post"
        />
        <PostLister posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeSort: state.activeSort,
    posts: getSortedPosts(state),
  };
};

export default connect(
  mapStateToProps,
  {
    postsDispatcher: showPosts,
    sortByDispatcher: sortBy,
  }
)(HomeView);
