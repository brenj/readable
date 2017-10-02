import React, { Component } from 'react';

import Heading from './component/Heading';
import NavBar from './component/NavBar';
import Post from './component/Post';
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
        <Post
          post={{
            title: 'Check out this destructuring',
            creator: 'brenj',
            timestamp: 'June 10',
            language: 'JavaScript',
            votes: '9'
          }}
          totalComments="11"
        />
        <Post
          post={{
            title: 'And this is why I love Python',
            creator: 'dude',
            timestamp: 'June 21',
            language: 'Python',
            votes: '7'
          }}
          totalComments="15"
        />
      </div>
    );
  }
}

export default App;
