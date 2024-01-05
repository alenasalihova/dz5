import React, { Component } from 'react';


export class Sidebar extends Component {
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

//export default Sidebar;