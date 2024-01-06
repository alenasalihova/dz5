import React, { Component } from 'react';

export class MyEvents extends Component {
  constructor() {
    super();
    this.state = {
      eventText: '',
    };
  }

  handleClick = () => {
    this.setState({ eventText: 'Clicked!' });
    console.log('Clicked!');
  };

  handleMouseDown = () => {
    this.setState({ eventText: 'Mouse Down!' });
    console.log('Mouse Down!');
  };

  handleMouseUp = () => {
    this.setState({ eventText: 'Mouse Up!' });
    console.log('Mouse Up!');
  };

  handleMouseMove = () => {
    this.setState({ eventText: 'Mouse Move!' });
    console.log('Mouse Move!');
  };

  handleCut = () => {
    this.setState({ eventText: 'Cut!' });
    console.log('Cut!');
  };

  handleCopy = () => {
    this.setState({ eventText: 'Copy!' });
    console.log('Copy!');
  };

  handleMouseWheel = () => {
    this.setState({ eventText: 'Mouse Wheel!' });
    console.log('Mouse Wheel!');
  };

  render() {
    const { eventText } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <div
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          onCut={this.handleCut}
          onCopy={this.handleCopy}
          onWheel={this.handleMouseWheel}
          style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}
        >
          Hover over me
        </div>
        <p>{eventText}</p>
      </div>
    );
  }
}
