import React, { Component } from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import style from '../css/Content.module.css';
import { Counter, MyEvents, Instruction, Users, Posts, Comments  } from '../components';


export class Content extends Component {
  static propTypes = {
    contentData: PropTypes.shape({
      title: PropTypes.string,
      describe: PropTypes.string,
    }),
  }; 

  state = {
    showText1: false,
    showText2: false,
    showText3: false,
  };

  handleToggleImage = (imageNumber) => {
    this.setState((prevState) => ({
      [`showText${imageNumber}`]: !prevState[`showText${imageNumber}`],
    }));
  };
  render() {
    const { contentData } = this.props;
    const { title, describe } = contentData || {};
    const { showText1, showText2, showText3 } = this.state;

    return (
      <div>
        <h1 className={cn(style.h1)}>{title}</h1>
        <p className={cn(style.p_content)}>{describe}</p>
        <hr></hr>
        <Counter />
        <hr></hr>
        <MyEvents />
        <hr></hr>
        <Instruction />
        <hr></hr>
        <button onClick={() => this.handleToggleImage(1)}>Users</button>
        <button onClick={() => this.handleToggleImage(2)}>Posts</button>
        <button onClick={() => this.handleToggleImage(3)}>Comments</button>
        {showText1 && <Users />}
        {showText2 && <Posts />}
        {showText3 && <Comments />} 
      </div>
    );
  }
}
