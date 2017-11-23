import React from 'react';
import ReactDOM from 'react-dom';

import { creators } from './action';
import Root from './component/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

import './index.css';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

store.dispatch(creators.loadPosts());
registerServiceWorker();
