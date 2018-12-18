import React, { Component } from 'react';
import styles from './tab.less';
import mock from './mock';

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  renderToolbar = () => {
    const length = mock.TabsData.length;
    const tabItems = mock.TabsData.map((item, index) => {
      const key = `tab${index}`;
      const tabStyle = `tab_${item.type}`;
      const zindexStyle = length - index;

      return (
        <div className={styles.tab_wrapper} key={key} style={{ zIndex: zindexStyle}}>
          <input id={key} type="radio" name="tab" value={index} hidden />
          <label className={`${styles.tab} ${styles[tabStyle]}`} htmlFor={key}>
            <div className={styles.tab__name}>{item.name}</div>
            <div className={styles.tab__info}>{item.type} <span>{item.increase}</span></div>
          </label>
        </div>
      );
    });

    return (
      <div className={styles.toolbar}>
        {tabItems}
        <span className={styles.add_btn}><span>+</span></span>
        <span className={styles.bell}></span>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.tabs}>
        {this.renderToolbar()}
        <div className={styles.content}>
          <div className={`${styles.item} ${styles.item__main}`}>main box</div>
          <div className={styles.item__wrapper1}>
            <div className={`${styles.item} ${styles.item__side}`}>sidebar box</div>
            <div className={`${styles.item} ${styles.item__list3}`}>list3</div>
            <div className={`${styles.item} ${styles.item__list4}`}>list4</div>
          </div>
          <div className={styles.item__wrapper2}>
            <div className={`${styles.item} ${styles.item__list2}`}>list2</div>
            <div className={`${styles.item} ${styles.item__list1}`}>list1</div>
        </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
