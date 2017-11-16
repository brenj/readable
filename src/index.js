import React from 'react';
import ReactDOM from 'react-dom';

import Root from './component/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

import './index.css';

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root'),
);

registerServiceWorker();
