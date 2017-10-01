import React, { Component } from 'react';

import Heading from './component/Heading';
import NavBar from './component/NavBar';
import Sorter from './component/Sorter';

import './App.css';
import 'skeleton-css-webpack';

const HEADING_MAIN = "Readable is the place for discussing code snippets";
const HEADING_SUB = "- Anonymously -";

class App extends Component {
  render() {
    return (
      <div className="container app">
        <NavBar />
        <Heading mainText={HEADING_MAIN} subText={HEADING_SUB} />
        <Sorter sorterType='post' />
      </div>
    );
  }
}

export default App;
