import PropTypes from 'prop-types';
import React from 'react';

import './heading.css';

const propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

function Heading(props) {
  const { mainText, subText } = props;

  return (
    <div className="row">
      <div className="twelve columns heading">
        <h4>{mainText}</h4>
        <h6>{subText}</h6>
      </div>
    </div>
  );
}

Heading.propTypes = propTypes;

export default Heading;
