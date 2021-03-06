import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import Messages from './components/Messages';
import Tabs from './components/Tabs';

import styles from './index.less';

function HomePage() {
  return (
    <div className={styles.home}>
      <Messages />
      <Tabs />
    </div>
  );
}

export default HomePage;
