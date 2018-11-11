import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import $ from 'jquery'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import * as filters from './util/filter'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
require('./directives');
Vue.use(iView);
Vue.use(MuseUI)
Vue.config.productionTip = false
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
