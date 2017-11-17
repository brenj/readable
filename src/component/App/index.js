import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'skeleton-css-webpack'; // eslint-disable-line import/extensions
import ErrorView from '../../view/Error';
import HomeView from '../../view/Home';
import LanguageView from '../../view/Language';
import NavBar from '../../component/NavBar';
import PostForm from '../../component/PostForm';
import PostView from '../../view/Post';

import './app.css';

function App() {
  return (
    <div className="container app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/language/:language" component={LanguageView} />
        <Route
          exact
          path="/post/new"
          render={props => (
            <PostForm
              {...props}
              formType="add"
              heading="Post a new snippet"
            />
          )}
        />
        <Route
          exact
          path="/post/edit/:id"
          render={props => (
            <PostForm {...props} formType="edit" heading="Edit a snippet" />)}
        />
        <Route exact path="/post/:id" component={PostView} />
        <Route render={() => (
          <ErrorView code="404" message="Page not found" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
