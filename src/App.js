import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './component/HomeView';
import NavBar from './component/NavBar';

import './App.css';
import 'skeleton-css-webpack';

class App extends Component {
  render() {
    return (
      <div className="container app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
        </Switch>
      </div>
    );
  }
}

export default App;
