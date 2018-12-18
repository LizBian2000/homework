import React, { Component } from 'react';
import styles from './messages.less';
import mock from './mock';

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  renderMsgItems = () => mock.MsgListData.map((item, index) => {
    const isImgType = item.type === 'img';
    const itemStyle = isImgType ? 'messages__item_img' : `messages__item_${item.mode}`;
    const content = isImgType ? <img src={item.url} /> : item.info;

    return (
        <div className={`${styles.messages__item} ${styles[itemStyle]} ${isImgType && styles[`messages__item_img_${item.mode}`]}`} key={index}>
          {content}
        </div>
    );
  })

  render() {
    return (
      <div className={styles.messages}>
        <div className={styles.messages__list}>
          {this.renderMsgItems()}
        </div>
        <div className={styles.textarea__wrapper}><input placeholder="请输入内容..." /></div>
      </div>
    );
  }
}

export default Messages;
