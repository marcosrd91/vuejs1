<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped>
      <v-list>
        <v-list-item >
          <v-list-item-action>
            <i aria-hidden="true" class="v-icon notranslate mdi mdi-contacts theme--light"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/">Valoradas</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-list-item >
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/Nuevas">Nuevas</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-toolbar-title>Vacas</v-toolbar-title>
      <!-- clase que envia de izq a derecha -->
      <!-- <div class="spacer"></div>
        <router-link v-if="isLoggedIn"  to="/Propietario"><v-btn>Soy Propietario</v-btn></router-link> |
        <router-link v-if="isLoggedIn"  to="/Registration"><v-btn>Soy Inquilino</v-btn></router-link> -->
      <div class="spacer"></div>
      <router-link to="/UserBag"><v-btn v-if="isLoggedIn">{{ UserData }}</v-btn></router-link>
      <router-link v-if="!isLoggedIn"  to="/Registration">Registrarse</router-link>
      <router-link v-if="!isLoggedIn" to="/Login">Ingresar</router-link><span v-if="isLoggedIn"> | <a @click="logOut">salir</a></span>
    </v-app-bar>
     <!-- <UserBag></UserBag> -->
    <v-content>
          <router-view/>
    </v-content>
    <!-- <v-footer app>
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</div>
</template>

<script>
// import Registration from './components/Registration.vue'
// import Login from './components/Login.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'UserData'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    logOut () {
      this.logout()
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(this.logout)
          }
          throw err
        })
      })
    }
  }
}
</script>
