import Vue from 'vue';
/**
 * MouseEvent事件核心属性：
 * event.clientX、event.clientY:鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性
 * event.pageX、event.pageY:类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。这2个属性不是标准属性，但得到了广泛支持。IE事件中没有这2个属性。
 * event.offsetX、event.offsetY:鼠标相对于事件源元素（srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性。
 * event.screenX、event.screenY:鼠标相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性
 */
Vue.directive('drag', (el, binding) => {
  //按下鼠标事件
  el.style.position = "absolute";
  el.onmousedown = function (me) {
    var disX = me.clientX - el.offsetLeft;
    var disY = me.clientY - el.offsetTop;
    //鼠标指针移动事件,绑定给document，主要是为了解决鼠标移动过快超出目标元素时onmousemove就不会触发了！
    document.onmousemove = function (me) {
      var l = me.clientX - disX;
      var t = me.clientY - disY;
      el.style.left = l + 'px';
      el.style.top = t + 'px';
    };
    //鼠标松开事件
    el.onmouseup = function () {
      document.onmousemove = null;
    };
  };
})
