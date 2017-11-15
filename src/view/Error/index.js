import PropTypes from 'prop-types';
import React from 'react';

import './error-view.css';

const propTypes = {
  code: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

function ErrorView({ code, message }) {
  return (
    <div className="row error-view__heading">
      <h1>{`Error ${code}`}</h1>
      <h4>{message}</h4>
    </div>
  );
}

ErrorView.propTypes = propTypes;

export default ErrorView;
