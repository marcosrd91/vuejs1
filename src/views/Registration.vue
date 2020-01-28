<template>
 <v-container fluid>
        <v-layout wrap>
          <v-flex>
          <v-row justify="center" >
              <v-col sm="8" >
              <form @submit.prevent="Create">
              <v-text-field
                v-model="Userdata.Email"
                label="E-mail"
                required
              ></v-text-field>
            <v-text-field
                v-model="Userdata.Password"
                label="Password"
                required
              ></v-text-field>
              <v-btn class="mr-4" type="submit">Registrarse</v-btn>
              <!-- <v-btn @click="clear">clear</v-btn> -->
            </form>
             </v-col>
          </v-row>
          </v-flex>
        </v-layout>
 </v-container>
</template>

<script>
import { mapActions } from 'vuex'
// import { required, minLength } from 'vuelidate'

export default {

  data: () => ({
    dialog: false,
    succes: false,
    Userdata: {
      Email: '',
      Password: ''
    }
  }),
  methods: {
    ...mapActions([
      'CreateUser'
    ]),
    Create () {
      this.CreateUser(this.Userdata).then(
        this.$router.push('/Login')
      )
    }
  }
}
</script>
