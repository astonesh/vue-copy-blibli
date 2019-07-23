// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import myDirects  from './vDirective/vDirective';
import myMix from './vDirective/vMin'
import myTool from './tool/tool';
import myAlert from './common/alert';
import myFilter from './tool/vFitler';
import App from './App';
import router from './router';


Vue.use(myTool);
Vue.use(myMix);
Vue.use(myDirects);
Vue.use(myAlert);

//全局引入过滤器
Object.keys(myFilter).forEach(key => Vue.filter(key, myFilter[key]));

Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>'
})