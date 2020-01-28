import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeDetail from '../views/HomeDetail.vue'
import Nuevas from '../views/Nuevas.vue'
import Registration from '../views/Registration'
import Login from '../views/Login'
import UserBag from '../views/UserBag'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Nuevas/',
    name: 'nuevas',
    component: Nuevas
  },
  {
    path: '/Registration/',
    name: 'registration',
    component: Registration
  },
  {
    path: '/HomeDetail/:id',
    name: 'homeDetail',
    props: true,
    component: HomeDetail
  },
  {
    path: '/Nuevas/',
    name: 'nuevas',
    component: Nuevas
  },
  {
    path: '/Login/',
    name: 'login',
    component: Login
  },
  {
    path: '/UserBag/',
    name: 'userbag',
    component: UserBag
  }
]

const router = new VueRouter({
  routes
})

export default router
