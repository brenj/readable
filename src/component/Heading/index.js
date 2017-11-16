import PropTypes from 'prop-types';
import React from 'react';

import './heading.css';

const propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

function Heading({ mainText, subText }) {
  return (
    <div className="row">
      <div className="twelve columns heading">
        <h3>{mainText}</h3>
        <h5>{subText}</h5>
      </div>
    </div>
  );
}

Heading.defaultProps = { subText: '' };
Heading.propTypes = propTypes;

export default Heading;
