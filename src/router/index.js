import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/auth',
    redirect: '/auth/login'
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
