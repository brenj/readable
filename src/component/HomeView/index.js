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
        <Post
          post={{
            title: 'This is a really long message and this is to test what happens when you have a really long message like this.',
            creator: 'dude',
            timestamp: 'June 21',
            language: 'C#',
            voteScore: '125',
          }}
          totalComments="15"
        />
        <Post
          post={{
            title: 'Check out this destructuring',
            creator: 'brenj',
            timestamp: 'June 10',
            language: 'JavaScript',
            voteScore: '19',
          }}
          totalComments="11"
        />
        <Post
          post={{
            title: 'And this is why I love Python',
            creator: 'dude',
            timestamp: 'June 21',
            language: 'Python',
            voteScore: '7',
          }}
          totalComments="15"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(postId => state.posts[postId]),
});

export default connect(mapStateToProps)(HomeView);
