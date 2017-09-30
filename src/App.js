import React, { Component } from 'react';

import { LANGUAGES } from './languages';
import LinkList from './component/LinkList';

import './App.css';
import 'skeleton-css-webpack';

class App extends Component {
  render() {
    const links = [];

    LANGUAGES.forEach((lang) => {
      links.push([`/${lang}`.toLowerCase(), lang]);
    })

    return (
      <div className="container">
        <div className="row">
          <div className="two columns">Readable</div>
          <div className="ten columns">
            <LinkList links={links} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
