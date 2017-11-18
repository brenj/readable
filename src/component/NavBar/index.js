import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import { getLanguage, getLanguages } from '../../util/languages';
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
        <Link className="navbar__sitename" to="/">
          Readable
        </Link>
        <span className="navbar__span">&nbsp;&lt;code&gt;</span>
      </div>
      <div className="eight columns">
        <NavLinks links={links} />
      </div>
      <div className="two columns">
        <span>
          <a href="https://github.com/brenj/readable">
            <FontAwesome className="navbar__github" name="github" />
          </a>
          <a href="https://www.linkedin.com/in/brenj/">
            <FontAwesome className="navbar__linkedin" name="linkedin" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
