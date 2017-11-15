import PropTypes from 'prop-types';
import React from 'react';

import './vote-box.css';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleVote: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
};

function VoteBox({ children, handleVote, votes }) {
  return (
    <div className="row vote-box">
      <div className="three columns vote-box__votes">
        <span
          className="vote-box__downvote"
          onClick={() => handleVote('downVote')}
          role="button"
          tabIndex="0"
        >
          -
        </span>
        <span>{votes}</span>
        <span
          className="vote-box__upvote"
          onClick={() => handleVote('upVote')}
          role="button"
          tabIndex="-1"
        >
          +
        </span>
      </div>
      {children}
    </div>
  );
}

VoteBox.propTypes = propTypes;

export default VoteBox;
