import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: (resolve, reject) => import('@/pages/home').then(resolve, reject),
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
