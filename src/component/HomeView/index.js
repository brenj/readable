import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../api';
import Heading from '../Heading';
import Post from '../Post';
import { showPosts } from '../../action';
import Sorter from '../Sorter';

const HEADING = 'Readable is the place for discussing code snippets';
const SUBHEADING = '- Anonymously -';

class HomeView extends Component {
  componentDidMount() {
    getPosts().then(posts => this.props.dispatch(showPosts(posts)));
  }

  render() {
    return (
      <div>
        <Heading mainText={HEADING} subText={SUBHEADING} />
        <Sorter sorterType="post" />
        {this.props.posts.map(post => (
          <Post post={post} totalComments={10} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(postId => state.posts[postId]),
});

export default connect(mapStateToProps)(HomeView);
