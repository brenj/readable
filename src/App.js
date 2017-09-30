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
      <LinkList links={links} />
    );
  }
}

export default App;
