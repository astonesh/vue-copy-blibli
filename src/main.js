// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Vue } from './vDirective/vDirective';
import { tool } from './tool/tool';
import App from './App';
import router from './router';

// tool.forEach(function(item, key) {
// 	Vue.prototype[key] = item;
// })
for(let i in tool) {
	Vue.prototype[i] = tool[i];
}

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>'
})

console.log(Vue.prototype)