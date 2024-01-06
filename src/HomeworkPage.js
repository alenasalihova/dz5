import React, { Component } from 'react';

import style from './css/HomeworkPage.module.css';
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
      <div className={style.homework_page}>
        <div className={style.sidebar}>
          <Sidebar info={sidebarInfo} />
        </div>

        <div className={style.homework_page_container}>
          <div className={style.header}>
            <Header info={headerInfo} />
          </div>
          
          <div className={style.content}>
            <Content contentData={contentData} />
          </div>

          <div className={style.footer}>
            <Footer info={footerInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeworkPage;