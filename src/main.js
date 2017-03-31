// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import './components/i18n/translate';
import './components/date-display/script';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)


Vue.config.productionTip = false;
Vue.use(VueResource);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

});






