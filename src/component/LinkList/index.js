import React, { Component } from 'react';

import Link from '../../component/Link';

import './link-list.css';

class LinkList extends Component {
  render() {
    const { links } = this.props;

    return (
      <ul className="linklist">
        {links.map(([href, text]) => (
          <li key={href} className="linklist__li">
            <Link key={href} text={text} href={href} />
          </li>
        ))}
      </ul>
    );
  }
}

export default LinkList;
