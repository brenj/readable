import PropTypes from 'prop-types';
import React from 'react';

import './alert.css';

const propTypes = {
  content: PropTypes.string.isRequired,
};

function Alert({ content }) {
  return (
    <div className="row alert">
      <div className="twelve columns">
        <span className="alert__content">{content}</span>
      </div>
    </div>
  );
}

Alert.propTypes = propTypes;

export default Alert;
