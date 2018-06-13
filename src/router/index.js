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
      path: '/project',
      name: 'project_list',
      component: (resolve, reject) => import('@/pages/project_list').then(resolve, reject),
    },
    {
      path: '/project/create',
      name: 'project_create',
      component: (resolve, reject) => import('@/pages/project_edit').then(resolve, reject),
    },
    {
      path: '/project/:id',
      name: 'project_edit',
      component: (resolve, reject) => import('@/pages/project_edit').then(resolve, reject),
    },
    {
      path: '/component',
      name: 'component_list',
      component: (resolve, reject) => import('@/pages/component_list').then(resolve, reject),
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
