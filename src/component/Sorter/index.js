import PropTypes from 'prop-types';
import React from 'react';

import './sorter.css';

const propTypes = {
  activeSort: PropTypes.string.isRequired,
  activeSortHandler: PropTypes.func.isRequired,
  sorterType: PropTypes.string.isRequired,
};

function Sorter(props) {
  const { activeSort, activeSortHandler, sorterType } = props;

  return (
    <div className="row sorter">
      <div className="one column" />
      <div className="eleven columns">
        <span>
          Sort {`${sorterType}s`} by&nbsp;
          <span
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
            role="button"
            tabIndex="0"
          >
            Vote
          </span>
          &nbsp;or&nbsp;
          <span
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
            role="button"
            tabIndex="-1"
          >
            Date
          </span>
        </span>
      </div>
    </div>
  );
}

Sorter.propTypes = propTypes;

export default Sorter;
