import React, { Component } from 'react';

import Link from '../../component/Link';

import './sorter.css';

class Sorter extends Component {
  render() {
    const { sorterType } = this.props;

    return (
      <div className="row sorter">
        <div className="one column" />
        <div className="nine columns sorter__heading">
          <span>
            Sort {sorterType + 's'} by&nbsp;
            <Link href="#" text="Popularity" />
            &nbsp;or&nbsp;
            <Link href="#" text="Date" />
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
