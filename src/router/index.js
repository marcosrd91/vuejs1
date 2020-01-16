import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeDetail from '../views/HomeDetail.vue'
import Nuevas from '../views/Nuevas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  }
]

const router = new VueRouter({
  routes
})

export default router
