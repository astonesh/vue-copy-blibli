import Vue from 'vue'

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
Vue.directive('testme', {
  // 当被绑定的元素插入到 DOM 中时……
  // inserted: function (el, binding) {
  //   // 聚焦元素
  //   console.log(el)
  // }
  bind: function(el, binding,vnode) {
    var that = vnode.context;
    console.log(vnode.data.attrs['data-direction']);
    console.log(binding.arg('1'));
    // that[binding.arg](binding.value);
  }
})
export { Vue }
