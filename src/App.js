import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './component/HomeView';
import LanguageView from './component/LanguageView';
import NavBar from './component/NavBar';
import PostView from './component/PostView';

import './App.css';
import 'skeleton-css-webpack';

class App extends Component {
  render() {
    return (
      <div className="container app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/:lang" component={LanguageView} />
          <Route exact path="/:lang/:id" component={PostView} />
        </Switch>
      </div>
    );
  }
}

export default App;
