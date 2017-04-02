// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * Created by:  Dinca Roberto
 * On:          30/03/17
 * For project: File-Manager
 * Description:
 */


import Vue from 'vue'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon.vue'

import 'vue-awesome/icons'

import App from './App.vue'
import router from './router'

import './i18n/translate'
import './display/display-date/script'


Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.component('icon', Icon);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});






