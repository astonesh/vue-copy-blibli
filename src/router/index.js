import Vue from 'vue'
import Router from 'vue-router'
import TopBar from '@/components/banner/TopBar'
// import ContentBody from '@/components/ContentBody/ContentBody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopBar',
      component: TopBar
    }
  ]
})
