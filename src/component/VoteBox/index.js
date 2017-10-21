import React, { Component } from 'react';

import './vote-box.css';

class VoteBox extends Component {
  render() {
    const { handleVote } = this.props;

    return (
      <div className="row vote-box">
        <div className="three columns vote-box__votes">
          <span
            role="button"
            className="vote-box__downvote"
            onClick={() => handleVote('downVote')}
          >
            -
          </span>
          <span>{this.props.votes}</span>
          <span
            role="button"
            className="vote-box__upvote"
            onClick={() => handleVote('upVote')}
          >
            +
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default VoteBox;
