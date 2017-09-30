import React, { Component } from 'react';

class Link extends Component {
  render() {
    const { text, href } = this.props;

    return (
      <li><a href={href}>{text}</a></li>
    );
  }
}

export default Link;
