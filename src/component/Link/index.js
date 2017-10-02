import React, { Component } from 'react';

import './link.css';

class Link extends Component {
  render() {
    const { text, href } = this.props;

    return (
      <a className="link" href={href}>{text}</a>
    );
  }
}

export default Link;
