import React, { Component } from 'react';

//import Header from './structure/Header';
//import Footer from './structure/Footer';
//import Sidebar from './structure/Sidebar';
//import Content from './structure/Content';

import './css/HomeworkPage.css';
import { Content, Footer, Header, Sidebar } from './structure';

class HomeworkPage extends Component {
  render() {
    const headerInfo = { title: 'Заголовок', subtitle: 'Подзаголовок' };
    const footerInfo = { text: '© 2023 Мой подвал приложения' };
    const sidebarInfo = { menu: 'Меню сайта' };
    const contentData = {
      title: 'Заголовок контента',
      describe: 'Описание контента',
    };

    return (
      <div className="homework-page">
        <div className="sidebar">
          <Sidebar info={sidebarInfo} />
        </div>

        <div className='homework-page-container'>
          <div className="header">
            <Header info={headerInfo} />
          </div>
          
          <div className="content">
            <Content contentData={contentData} />
          </div>

          <div className="footer">
            <Footer info={footerInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeworkPage;