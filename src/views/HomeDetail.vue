<template>
  <div class="userProfile">

      <v-layout wrap>
        <v-flex>
          <v-row
              class="mb-6"
            >
          <v-col  sm="8">
            <v-carousel >
                <v-carousel-item
                  v-for="(item,i) in houses.image"
                  :key="i"
                  :src="item.url"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            </v-col>

            <v-col  sm="4">
              <v-card
                  class="mx-auto"
                  max-width="500"
                >
                <div class="text-center">
                  <v-card-text>
                    <div>{{ houses.rating }}</div>
                    <p class="display-1 text--primary">
                     {{ houses.description }}
                    </p>
                    <p>adjective</p>
                    <div class="text--primary">
                       <p> precio por noche  $ {{ houses.price }}</p>
                    </div>
                    <v-rating></v-rating>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                    >
                      Alquilar
                    </v-btn>
                  </v-card-actions>
                  </div>
            </v-card>
             </v-col>
         </v-row>

          <v-row>

          <v-col sm="12">
            <v-btn x-large color="success" dark>Ver comentarios</v-btn>
          </v-col>

          </v-row>

          </v-flex>
          </v-layout>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'GetHouseData'
    ]),

    houses () {
      let id = parseInt(this.$route.params.id)
      return this.GetHouseData(id)
    }
  }
}
</script>
