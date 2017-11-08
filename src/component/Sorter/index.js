import React, { Component } from 'react';

import './sorter.css';

class Sorter extends Component {
  render() {
    const { activeSort, activeSortHandler, sorterType } = this.props;

    return (
      <div className="row sorter">
        <div className="one column" />
        <div className="eleven columns">
          <span>
            Sort {`${sorterType}s`} by&nbsp;
            <span
              role="button"
              className={
                activeSort === 'vote' ?
                  "sorter__sort--inactive" :
                  "sorter__sort--active"
              }
              onClick={() => {
                if (activeSort !== "vote") {
                  activeSortHandler('vote');
                }
              }}
            >
              Vote
            </span>
            &nbsp;or&nbsp;
            <span
              role="button"
              className={
                activeSort === 'date' ?
                  "sorter__sort--inactive" :
                  "sorter__sort--active"
              }
              onClick={() => {
                if (activeSort !== "date") {
                  activeSortHandler('date');
                }
              }}
            >
              Date
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Sorter;
