import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../api/methods';
import Heading from '../Heading';
import { getLanguage } from '../../languages';
import PostLister from '../PostLister';
import { showPostsByLang } from '../../action/creators';
import Sorter from '../Sorter';

class LanguageView extends Component {
  componentDidMount() {
    // TODO: Add redirect to 404 if unknown language was passed as parameter
    const { lang, postsByLangDispatcher } = this.props;
    getPosts().then(posts => postsByLangDispatcher(posts, lang.path));
  }

  render() {
    const { lang, posts } = this.props;

    return (
      <div>
        <Heading
          mainText={lang.displayName}
          subText={lang.tagLine}
        />
        <Sorter sorterType="post" />
        <PostLister posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  lang: getLanguage(ownProps.match.params.lang),
  posts: Object.keys(state.posts).map(postId => state.posts[postId]),
  comments: state.comments,
});

export default connect(
  mapStateToProps, { postsByLangDispatcher: showPostsByLang })(LanguageView);
