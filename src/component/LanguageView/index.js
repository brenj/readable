import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Heading from '../Heading';
import { LANGUAGES } from '../../languages';
import Post from '../Post';
import Sorter from '../Sorter';

class LanguageView extends Component {
  render() {
    const language = LANGUAGES[this.props.match.params.lang];

    return (
      <div>
        <Heading
          mainText={language.displayName}
          subText={language.tagLine}
        />
        <Sorter sorterType='post' />
        <Post
          post={{
            title: 'And this is why I love Python',
            creator: 'dude',
            timestamp: 'June 21',
            language: 'Python',
            voteScore: '7'
          }}
          totalComments="15"
        />
      </div>
    );
  }
}

export default LanguageView;
