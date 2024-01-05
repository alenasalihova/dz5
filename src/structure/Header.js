import React, { Component } from 'react';

export class Header extends Component {
  render() {
    const { info } = this.props;

    if (!info) {
      return null;
    }

    return (
      <header>
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
      </header>
    );
  }
}

//export default Header;