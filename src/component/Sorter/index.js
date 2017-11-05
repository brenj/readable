import React, { Component } from 'react';

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
            <a href="/">Popularity</a>
            &nbsp;or&nbsp;
            <a href="/">Date</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Sorter;
