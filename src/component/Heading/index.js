import PropTypes from 'prop-types';
import React from 'react';

import './heading.css';

const propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  subTextStyle: PropTypes.string,
};

function Heading({ mainText, subText, subTextStyle }) {
  return (
    <div className="row">
      <div className="twelve columns heading">
        <h2>{mainText}</h2>
        <h5 className={subTextStyle}>{subText}</h5>
      </div>
    </div>
  );
}

Heading.defaultProps = {
  subTextStyle: 'heading__subtext--default',
  subText: '',
};

Heading.propTypes = propTypes;

export default Heading;
