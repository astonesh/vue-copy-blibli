import Vue from 'vue';
import Router from 'vue-router';
import MainContent from '@/components/ContentBody/ContentBody';
import MainContentSec from '@/components/ContentBody/ContentBodySec';
import SwiperContain from '@/components/for/SwiperContain';
import SwiperContainSec from '@/components/for/SwiperContainSec';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/one',
      name: 'MainContent',
      component: MainContent,
      children: [
        { path: '', component: SwiperContain },
        { path: 'one', component: SwiperContain },
        { path: 'sec', component: SwiperContainSec }
      ]
    },
    {
      path: '/sec',
      name: 'MainContentSec',
      component: MainContentSec
    }
  ]
})
