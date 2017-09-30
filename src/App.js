import React, { Component } from 'react';

import NavBar from './component/NavBar';

import './App.css';
import 'skeleton-css-webpack';

class App extends Component {
  render() {
    return (
      <div className="container app">
        <NavBar />
      </div>
    );
  }
}

export default App;
