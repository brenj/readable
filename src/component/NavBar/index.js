import React, { Component } from 'react';

import { LANGUAGES } from '../../languages';
import LinkList from '../../component/LinkList';

import './navbar.css';

class NavBar extends Component {
  render() {
    const links = [];

    LANGUAGES.forEach((lang) => {
      links.push([`/${lang}`.toLowerCase(), lang]);
    });

    return (
      <div className="row navbar">
        <div className="two columns">
          <strong className="navbar__strong">Readable</strong>
          <span className="navbar__span">&nbsp;&lt;code&gt;</span>
        </div>
        <div className="ten columns">
          <LinkList links={links} />
        </div>
      </div>
    );
  }
}

export default NavBar;

