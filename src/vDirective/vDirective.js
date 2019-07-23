// export default (Vue)=>{
//   Vue.directive("focus",{
//       inserted: function(el){
//           el.focus();
//       }
//   })
//   Vue.directive('testme', {
//     // 当被绑定的元素插入到 DOM 中时……
//     // inserted: function (el, binding) {
//     //   // 聚焦元素
//     //   console.log(el)
//     // }
//     bind: function(el, binding,vnode) {
//       var that = vnode.context;
//       console.log(vnode.data.attrs['data-direction']);
//       console.log(binding.arg('1'));
//       // that[binding.arg](binding.value);
//     }
//   })
// }

export default{
  install(Vue, options) {
    Vue.directive("focus",{
      inserted: function(el){
          el.focus();
      }
    }),
    Vue.directive('testme', {
      bind: function(el, binding,vnode) {
        var that = vnode.context;
        console.log(vnode.data.attrs['data-direction']);
        console.log(binding.arg('1'));
      }
    })
  }
}
