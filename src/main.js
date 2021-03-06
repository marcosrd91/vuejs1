import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Toasted from 'vue-toasted'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
