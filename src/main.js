import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import './style/common.scss';

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})