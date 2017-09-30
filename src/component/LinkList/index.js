import React, { Component } from 'react';

import Link from '../../component/Link';

class LinkList extends Component {
  render() {
    const { links } = this.props;

    return (
      <ul>
        {links.map(([href, text]) => (
          <Link key={href} text={text} href={href} />
        ))}
      </ul>
    );
  }
}

export default LinkList;
