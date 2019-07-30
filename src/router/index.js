import Vue from 'vue';
import Router from 'vue-router';
// import ContentBody from '@/components/ContentBody/ContentBody';
// import ContentBodySec from '@/components/ContentBody/ContentBodySec';
// import SwiperContain from '@/components/for/SwiperContain';
// import SwiperContainSec from '@/components/for/SwiperContainSec';

Vue.use(Router)

const ContentBody = (resolve) => {
  require(['@/components/ContentBody/ContentBody'], resolve);
};
const ContentBodySec = (resolve) => {
  require(['@/components/ContentBody/ContentBodySec'], resolve);
};
const SwiperContain = (resolve) => {
  require(['@/components/for/SwiperContain'], resolve);
};
const SwiperContainSec = (resolve) => {
  require(['@/components/for/SwiperContainSec'], resolve);
};

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      name: 'ContentBody',
      component: ContentBody,
      children: [
        { path: '/one', component: SwiperContain },
        { path: '/one/one', component: SwiperContain },
        { path: '/one/sec', component: SwiperContainSec }
      ]
    },
    {
      path: '/sec',
      name: 'ContentBodySec',
      component: ContentBodySec
    },
    {
      path: '*',
      redirect: '/one'
    }
  ]
})
router.beforeEach((to, from, next) => {
  // todo
  next();
});
router.afterEach((to, from) => {
  // todo
});
export default router;
