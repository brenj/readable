import PropTypes from 'prop-types';
import React from 'react';

import './nav-links.css';

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

function NavLinks({ links }) {
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

NavLinks.propTypes = propTypes;

export default NavLinks;
