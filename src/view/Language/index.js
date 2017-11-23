import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { creators } from '../../action';
import Alert from '../../component/Alert';
import Heading from '../../component/Heading';
import { getLanguage } from '../../util/languages';
import PostLister from '../../component/PostLister';
import { getSortedPostsByLanguage } from '../../selector';
import Sorter from '../../component/Sorter';

const propTypes = {
  activeSort: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  language: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tagLine: PropTypes.string.isRequired,
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class LanguageView extends Component {
  handleSort = (sortType) => {
    this.props.dispatch(creators.sortBy(sortType));
  };

  render() {
    const { activeSort, language, posts } = this.props;

    return (
      <div>
        <Heading
          mainText={language.displayName}
          subText={language.tagLine}
        />
        <Link to={`/post/${language.path}/new`}>
          <button className="button-primary home-view__button--comment">
            New Snippet
          </button>
        </Link>
        {
          posts.length !== 0 ?
            <div>
              <Sorter
                activeSort={activeSort}
                activeSortHandler={this.handleSort}
                sorterType="post"
              />
              <PostLister posts={posts} />
            </div> :
            <Alert content="No snippets" />
        }
      </div>
    );
  }
}

LanguageView.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  const language = getLanguage(ownProps.match.params.language);

  return {
    activeSort: state.activeSort,
    language,
    posts: getSortedPostsByLanguage(state, language.path),
  };
};

export default connect(
  mapStateToProps,
)(LanguageView);
