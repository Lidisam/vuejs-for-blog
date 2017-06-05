// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Layout from '@/components/layout'
import '@/assets/thirdparty/bootstrap/css/bootstrap.min.css'
import '@/assets/thirdparty/font-awesome/css/font-awesome.min.css'
require('./assets/thirdparty/jquery/jquery-3.2.1.min.js');
require('./assets/thirdparty/bootstrap/js/bootstrap.min.js');


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
});

