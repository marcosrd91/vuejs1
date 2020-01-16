<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped>
      <v-list >
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
      <div class="spacer"></div>
      <v-avatar color="red">
          <span class="white--text headline">CJ</span>
        </v-avatar>
    </v-app-bar>
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

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  })
}
</script>
