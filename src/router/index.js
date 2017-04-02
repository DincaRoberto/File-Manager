/**
 * Created by:  Dinca Roberto
 * On:          30/03/17
 * For project: File-Manager
 * Description:
 */

import Vue from 'vue'
import Router from 'vue-router'
import FmContainer from '@/fm-container/fm-container';

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
