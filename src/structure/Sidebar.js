import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Sidebar extends Component {
  static propTypes = {
    info: PropTypes.shape({
      menu: PropTypes.string,
    }),
  };
  
  render() {
    const { info } = this.props;
    const menu = info ? info.menu : null;

    return (
      <aside>
        <h2>Sidebar</h2>
        <p>{menu}</p>
      </aside>
    );
  }
}
