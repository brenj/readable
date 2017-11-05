import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './sorter.css';

class Sorter extends Component {
  render() {
    const { sorterType } = this.props;

    return (
      <div className="row sorter">
        <div className="one column" />
        <div className="eleven columns sorter__heading">
          <span>
            Sort {`${sorterType}s`} by&nbsp;
            <Link to="/">Popularity</Link>
            &nbsp;or&nbsp;
            <Link to="/">Date</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Sorter;
