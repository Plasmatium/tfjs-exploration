import Vue from 'vue';
import Router from 'vue-router';
import Tfjs from './views/Tfjs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Tfjs,
    },
  ],
});
