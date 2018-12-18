import React, { Component } from 'react';

import styles from './messages.less';

import mock from './mock';

import somethingwrong from './mock';

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  renderMsgItems = () => {
    return mock.MsgListData.map((item, index) => {
      const isImgType = item.type === 'img';
      const itemStyle = isImgType ? 'messages__item_img' : `messages__item_${item.mode}`;
      const content = isImgType ? <img src={item.url} /> : item.info;

      return (
        <div className={`${styles.messages__item} ${styles[itemStyle]} ${isImgType && styles[`messages__item_img_${item.mode}`]}`} key={index}>
          {content}
        </div>
      );
    });
  }

  render() {
    var bb = 123;

    return (
      <div className={styles.messages}>
        <div className={styles.messages__list}>
          {this.renderMsgItems()}
        </div>
        <div className={styles.textarea__wrapper}><textarea placeholder="请输入内容..."/></div>
      </div>
    );
  }
}

export default Messages;
