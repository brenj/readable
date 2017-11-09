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
                activeSort === 'VOTE' ?
                  'sorter__sort--inactive' :
                  'sorter__sort--active'
              }
              onClick={() => {
                if (activeSort !== 'VOTE') {
                  activeSortHandler('VOTE');
                }
              }}
            >
              Vote
            </span>
            &nbsp;or&nbsp;
            <span
              role="button"
              className={
                activeSort === 'DATE' ?
                  'sorter__sort--inactive' :
                  'sorter__sort--active'
              }
              onClick={() => {
                if (activeSort !== 'DATE') {
                  activeSortHandler('DATE');
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
