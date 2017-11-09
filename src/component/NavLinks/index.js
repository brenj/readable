import React, { Component } from 'react';

import './nav-links.css';

class NavLinks extends Component {
  render() {
    const { links } = this.props;

    return (
      <ul className="linklist">
        {links.map(({ href, text }) => (
          <li key={href} className="linklist__li">
            <a className="link" href={href}>{text}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavLinks;
