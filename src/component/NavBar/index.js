import React from 'react';

import { getLanguage, getLanguages } from '../../languages';
import NavLinks from '../../component/NavLinks';

import './navbar.css';

function NavBar() {
  const links = [];

  getLanguages().forEach((langKey) => {
    const { displayName, path } = getLanguage(langKey);
    links.push(
      { href: `/language/${path}`.toLowerCase(), text: displayName });
  });

  return (
    <div className="row navbar">
      <div className="two columns">
        <strong className="navbar__strong">Readable</strong>
        <span className="navbar__span">&nbsp;&lt;code&gt;</span>
      </div>
      <div className="ten columns">
        <NavLinks links={links} />
      </div>
    </div>
  );
}

export default NavBar;
