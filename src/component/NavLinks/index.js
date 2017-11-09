import React, { Component } from 'react';

import './nav-links.css';

class NavLinks extends Component {
  render() {
    const { links } = this.props;

    return (
      <ul className="nav-links">
        {links.map(({ href, text }) => (
          <li key={href} className="nav-links__links">
            <a className="nav-links__link" href={href}>{text}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavLinks;
