import React, { Component } from 'react';

import '../css/Content.css';
import { Counter, MyEvents, Instruction, Users, Posts, Comments  } from './components';

//import Counter from '../components/Counter';
//import MyEvents from '../components/MyEvents';
//import Instruction from '../components/Instruction'; 
//import Users from '../components/User';
//import Posts from '../components/Posts';
//import Comments from '../components/Comments';


export class Content extends Component {
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
        <h1>{title}</h1>
        <p className='p-content'>{describe}</p>
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

//export default Content;