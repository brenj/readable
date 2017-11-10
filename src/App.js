import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'skeleton-css-webpack'; // eslint-disable-line import/extensions
import HomeView from './component/HomeView';
import LanguageView from './component/LanguageView';
import NavBar from './component/NavBar';
import PostForm from './component/PostForm';
import PostView from './component/PostView';

import './App.css';

function App() {
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

export default App;
