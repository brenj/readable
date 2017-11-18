import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';

import './vote-box.css';

const propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
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
          <FontAwesome name='chevron-left' />
        </span>
        <span>{votes}</span>
        <span
          className="vote-box__upvote"
          onClick={() => handleVote('upVote')}
          role="button"
          tabIndex="-1"
        >
          <FontAwesome name='chevron-right' />
        </span>
      </div>
      {children}
    </div>
  );
}

VoteBox.propTypes = propTypes;

export default VoteBox;
