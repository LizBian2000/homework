const msg1Url = require("../../asset/images/img1.png");
const msg2Url = require("../../asset/images/img2.png");

const MsgListData = [
  {type: 'msg', mode: 'receive', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
  {type: 'msg', mode: 'send', info: 'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte' },
  {type: 'img', mode: 'receive', url: msg1Url},
  {type: 'msg', mode: 'receive', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
  {type: 'msg', mode: 'send', info: 'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte' },
  {type: 'msg', mode: 'receive', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
  {type: 'img', mode: 'send', url: msg2Url},
  {type: 'msg', mode: 'receive', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
  {type: 'msg', mode: 'send', info: 'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte' },
  {type: 'msg', mode: 'receive', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
];

const TabsData = [
  {name: 'tab1', type: 'btc', increase: '-12.34%'},
  {name: 'tab2', type: 'eth', increase: '-12.34%'},
  {name: 'tab3', type: 'xbt', increase: '-12.34%'},
  {name: 'tab4', type: 'xbt', increase: '-12.34%'},
];

export default {
  MsgListData,
  TabsData,
};