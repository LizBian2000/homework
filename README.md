#### 项目启动
1、使用 npm 安装相关依赖

``` bash
npm install
```

2、执行 `npm run start`

### 完成情况说明
1.所有交互效果请使用CSS实现；✅
2.注意两个屏幕宽度界限下，tab box区域布局的变化；✅
3.注意tab box list1 在不同布局下的位置关系；✅
说明：flex-flows实现流布局，考虑到大屏幕上大区域块main box的自适应，以限定小区域高度（list3， list4）和宽度（list1， list2）
缺点：需要动态计算宽度/高度
4.左下角输入内容框旁边，右下角三角区域是可以左右拖动的，可以使右侧整个tab区域横向宽度发生改变；❌
说明：考虑css实现， 利用了textarea的可编辑性和resize特性，可以做到，但覆盖了右下角resize样式后，无法拖动
5.每个tab box区域，鼠标hover，右上角有个折纸效果；✅

### 待优化
由于时间有限，来不及做， 故列出来：
1.less尽可能设定color变量， 函数抽取公用样式，例如用的比较多的三角形
2.Model读取mock数据
3.html语义化
4.简单交互功能，例如：输入内容， 增加tab页等