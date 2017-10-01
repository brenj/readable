import React, { Component } from 'react';

import './heading.css';

class Heading extends Component {
  render() {
    const { mainText, subText } = this.props;

    return (
      <div className="row">
        <div className="twelve columns heading">
          <h4>{mainText}</h4>
          <h6>{subText}</h6>
        </div>
      </div>
    );
  }
}

export default Heading;
