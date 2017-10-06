import React, { Component } from 'react';

import './vote-box.css';

class VoteBox extends Component {
  render() {
    return (
      <div className="row vote-box">
        <div className="three columns vote-box__votes">
          <span>
            <a className="vote-box__downvote" href="/">-</a>
          </span>
          <span>{this.props.votes}</span>
          <span>
            <a className="vote-box__upvote" href="/">+</a>
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default VoteBox;
