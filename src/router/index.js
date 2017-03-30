import Vue from 'vue'
import Router from 'vue-router'
import FmContainer from '@/components/fm-container/fm-container';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fmContainer',
      component: FmContainer
    }
  ]
})
