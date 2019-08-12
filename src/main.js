// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import store from './store/index';
import myDirects from './vDirective/vDirective';
import myMix from './vDirective/vMin'
import myTool from './tool/tool';
import myAlert from './common/alert';
import myMask from './common/mask';
import myFilter from './tool/vFitler';
import App from './App';
import router from './router';
import VueLazyload from 'vue-lazyload';
import axios from './tool/httpAdapt';
import globalData from './tool/globalData';

Vue.use(myTool);
Vue.use(myMix);
Vue.use(myDirects);
Vue.use(myAlert);

Vue.use(myMask);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/swiper-right-six.jpg',
  loading: '../static/img/swiper-right-six.jpg',
  attempt: 1
})

Vue.prototype.$http = axios;
Vue.prototype.$window = window;
Vue.prototype.globalData = globalData;

// 全局引入过滤器
Object.keys(myFilter).forEach(key => Vue.filter(key, myFilter[key]));

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
