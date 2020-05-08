import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import Home from '../../src/pages/home/index.vue'
import Login from '../../src/pages/login/index.vue'
export default new Router({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/login",
      component: Login
    }
  ]
})

