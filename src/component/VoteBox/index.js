import React, { Component } from 'react';

import './vote-box.css';

class VoteBox extends Component {
  render() {
    return (
      <div className="row vote-box">
        <div className="two columns vote-box__votes">
          <span>{this.props.votes}</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default VoteBox;
