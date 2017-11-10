import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../../api/methods';
import Heading from '../Heading';
import { getLanguage } from '../../languages';
import { getSortedPosts } from '../../selectors';
import PostLister from '../PostLister';
import { showPostsByLang, sortBy } from '../../action/creators';
import Sorter from '../Sorter';

const propTypes = {
  activeSort: PropTypes.string.isRequired,
  lang: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tagLine: PropTypes.string.isRequired,
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  postsByLangDispatcher: PropTypes.func.isRequired,
  sortByDispatcher: PropTypes.func.isRequired,
};

class LanguageView extends Component {
  componentDidMount() {
    // TODO: Add redirect to 404 if unknown language was passed as parameter
    const { lang, postsByLangDispatcher } = this.props;
    getPosts().then(posts => postsByLangDispatcher(posts, lang.path));
  }

  handleSort = (sortType) => {
    this.props.sortByDispatcher(sortType);
  };

  render() {
    const { activeSort, lang, posts } = this.props;

    return (
      <div>
        <Heading
          mainText={lang.displayName}
          subText={lang.tagLine}
        />
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

LanguageView.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  activeSort: state.activeSort,
  lang: getLanguage(ownProps.match.params.lang),
  posts: getSortedPosts(state),
});

export default connect(
  mapStateToProps,
  {
    postsByLangDispatcher: showPostsByLang,
    sortByDispatcher: sortBy,
  },
)(LanguageView);
