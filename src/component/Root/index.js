import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

const propTypes = {
  store: PropTypes.PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

function Root({ store }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

Root.propTypes = propTypes;

export default Root;
