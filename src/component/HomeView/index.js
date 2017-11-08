import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../../api/methods';
import Heading from '../Heading';
import PostLister from '../PostLister';
import { showPosts, sortBy } from '../../action/creators';
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
    const { posts } = this.props;

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
        <Sorter sorterType="post" />
        <PostLister posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(postId => state.posts[postId]),
  comments: state.comments,
});

export default connect(
  mapStateToProps,
  {
    postsDispatcher: showPosts,
    sortByDispatcher: sortBy,
  }
)(HomeView);
