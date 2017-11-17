import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="nav-links__link" to={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
}

NavLinks.propTypes = propTypes;

export default NavLinks;
