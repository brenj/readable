import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './sorter.css';

class Sorter extends Component {
  render() {
    const { sorterType } = this.props;

    return (
      <div className="row sorter">
        <div className="one column" />
        <div className="nine columns sorter__heading">
          <span>
            Sort {`${sorterType}s`} by&nbsp;
            <Link to="/">Popularity</Link>
            &nbsp;or&nbsp;
            <Link to="/">Date</Link>
          </span>
        </div>
        <div className="two columns">
          <Link
            className="button button-primary sorter__button"
            to="/post/new"
          >
            {sorterType}
          </Link>
        </div>
      </div>
    );
  }
}

export default Sorter;
