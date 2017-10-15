import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './component/HomeView';
import LanguageView from './component/LanguageView';
import NavBar from './component/NavBar';
import PostForm from './component/PostForm';
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
          <Route exact path="/language/:lang" component={LanguageView} />
          <Route
            exact
            path="/post/new"
            render={props => (
              <PostForm {...props} formType="add" heading="Add a post" />)}
          />
          <Route
            exact
            path="/post/edit/:id"
            render={props => (
              <PostForm {...props} formType="edit" heading="Edit a post" />)}
          />
          <Route exact path="/post/:id" component={PostView} />
        </Switch>
      </div>
    );
  }
}

export default App;
