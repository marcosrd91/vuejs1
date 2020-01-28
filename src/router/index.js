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
    path: '/Registration/',
    name: 'registration',
    component: Registration
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (this.store.getters.isLoggedIn) {
      next()
      return
    }
    next('/Login')
  } else {
    next()
  }
})

export default router
