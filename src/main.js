// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import myDirects  from './vDirective/vDirective';
import myMix from './vDirective/vMin'
import myTool from './tool/tool';
import App from './App';
import router from './router';


Vue.use(myTool);
Vue.use(myMix);
Vue.use(myDirects);

console.log(Vue.prototype)
Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>'
})