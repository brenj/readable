import React, { Component } from 'react';

import './sorter.css';

class Sorter extends Component {
  render() {
    const { sorterType } = this.props;

    return (
      <div className="row sorter">
        <div className="one columns" />
        <div className="nine columns sorter__heading">
          <span>
            Sort {sorterType + 's'} by&nbsp;
            <a href="#">Popularity</a>
            &nbsp;or&nbsp;
            <a href="#">Date</a>
          </span>
        </div>
        <div className="two columns">
          <a className="button button-primary" href="#">
            New {sorterType}
          </a>
        </div>
      </div>
    );
  }
}

export default Sorter;
