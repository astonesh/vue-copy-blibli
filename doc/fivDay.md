对应fivDay
1 router
简单使用  嵌套  404  动画  还有 拦截  重定向  异步加载
2 两种模式 hash 和 history
3 人为强加popStatus
4 动态添加路由 addRoutes 与 404
5 源码 addRoutes

node-modules  对应的文件是  vue-router.esm.js

install 方法里定义了两个全局组件

view  和 link 

install mixin 获取了router 的实例  挂在原型链上的  this._routerRoot._route

定义一个 vueRouter
通过 createMatcher 进行router 的初始化  包括 record  map  解析name

createRouteMap  进行路由的初始化

addRoutes 就是 又调了一次 进行 routeMap 的更新 




