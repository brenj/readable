import React, { Component } from 'react';

import './link.css';

class Link extends Component {
  render() {
    const { text, href } = this.props;

    return (
      <a href={href}>{text}</a>
    );
  }
}

export default Link;
