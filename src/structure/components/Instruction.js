import React, { Component } from 'react';
import style from '../../css/HomeworkPage.module.css'

export class Instruction extends Component {
    state = {
      showImage1: false,
      showImage2: false,
      showImage3: false,
    };
  
  handleToggleImage = (imageNumber) => {
    this.setState((prevState) => ({
      [`showImage${imageNumber}`]: !prevState[`showImage${imageNumber}`],
    }));
  };

  render() {
    const { showImage1, showImage2, showImage3 } = this.state;

    return (
        <div className={style.imgeButton}>
            <button onClick={() => this.handleToggleImage(1)}>Image 1</button>
            <button onClick={() => this.handleToggleImage(2)}>Image 2</button>
            <button onClick={() => this.handleToggleImage(3)}>Image 3</button>
            {showImage1 && <img src="./img/images1.jpg" alt="" />}
            {showImage2 && <img src="./img/images2.jpg" alt="" />}
            {showImage3 && <img src="./img/images3.jpg" alt="" />}
        </div>
    );
  }
}