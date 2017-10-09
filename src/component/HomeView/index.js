import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../api';
import Heading from '../Heading';
import PostLister from '../PostLister';
import { showPosts } from '../../action/creators';
import Sorter from '../Sorter';

const HEADING = 'Readable is the place for discussing code snippets';
const SUBHEADING = '- Anonymously -';

class HomeView extends Component {
  componentDidMount() {
    getPosts().then(posts => this.props.dispatch(showPosts(posts)));
  }

  render() {
    const { comments, posts } = this.props;

    return (
      <div>
        <Heading mainText={HEADING} subText={SUBHEADING} />
        <Sorter sorterType="post" />
        <PostLister posts={posts} comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(postId => state.posts[postId]),
  comments: state.comments,
});

export default connect(mapStateToProps)(HomeView);
