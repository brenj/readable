import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { creators } from '../../action';
import Alert from '../../component/Alert';
import Heading from '../../component/Heading';
import PostLister from '../../component/PostLister';
import { getSortedPosts } from '../../selector';
import Sorter from '../../component/Sorter';

import './home-view.css';

const HEADING = 'Post and discuss code snippets';
const SUBHEADING = '- Anonymously -';

const propTypes = {
  activeSort: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class HomeView extends Component {
  handleSort = (sortType) => {
    this.props.dispatch(creators.sortBy(sortType));
  };

  render() {
    const { activeSort, posts } = this.props;

    return (
      <div>
        <Heading
          mainText={HEADING}
          subText={SUBHEADING}
          subTextStyle="heading__subtext--barcode"
        />
        <Link to="/post/new">
          <button className="button-primary home-view__button--comment">
            New Snippet
          </button>
        </Link>
        {
          posts.length !== 0 &&
            <div>
              <Sorter
                activeSort={activeSort}
                activeSortHandler={this.handleSort}
                sorterType="snippet"
              />
              <PostLister posts={posts} />
            </div>
        }
        { posts.length === 0 && <Alert content="No snippets" /> }
      </div>
    );
  }
}

HomeView.propTypes = propTypes;

const mapStateToProps = state => ({
  activeSort: state.activeSort,
  posts: getSortedPosts(state),
});

export default connect(
  mapStateToProps,
)(HomeView);
