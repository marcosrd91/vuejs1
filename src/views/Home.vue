<template>
  <div class="home">

      <v-container fluid>
        <v-layout wrap>
          <v-flex>
          <v-row>
            <v-col v-for="house in GetallHouses" :key="house.id" cols="12" md="3">

              <v-item>
                  <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="374"
                  >
                  <v-img
                    height="250"
                    :src= house.image[0].url
                  ></v-img>
                        <v-card-title>{{ house.name }}</v-card-title>

                        <v-card-text>
                          <v-row
                            align="center"
                            class="mx-0"
                          >
                            <v-rating
                              :value="4.5"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"
                            ></v-rating>

                            <div class="grey--text ml-4">4.5 (413)</div>
                          </v-row>

                          <div class="my-4 subtitle-1 blue--text">
                           <p>$ {{ house.price }} x noche</p>
                          </div>

                          <div>{{ house.description }}</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <!-- <v-card-title>Fechas disponibles</v-card-title>

                        <v-card-text>

                        </v-card-text> -->

                          <v-card-actions>
                                  <v-btn @click="GetMoreData(house)"
                                    color="blue"
                                    text
                                  >
                                    Mas detalles
                                  </v-btn>

                          </v-card-actions>

                      </v-card>

              </v-item>
            </v-col>
            </v-row>
         </v-flex>
        </v-layout>
      </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  alluser: [],
  data () {
    return {
      item: []
    }
  },

  computed: {
    ...mapGetters([
      'GetallHouses'
    ])
  },
  methods: {
    ...mapActions([
      'GetHouses',
      'GetHouseDetails'
    ]),

    GetMoreData (house) {
      // this.GetHouseDetails(id)
      this.$router.push('/HomeDetail/' + house.id)
    }

  },

  mounted () {
    this.GetHouses()
  }

}
</script>
