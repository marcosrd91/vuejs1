<template>
    <v-row>
       <v-tabs fixed-tabs=""
          align-with-title
          background-color="white"
          color="black"
        >
          <v-tab>Inquilino</v-tab>
          <v-tab-item>
            <v-tabs align-with-title>
              <v-tab>Mi Perfil</v-tab>
              <v-tab-item></v-tab-item>
                <v-tab>Reserva Activa</v-tab>
              <v-tab-item></v-tab-item>
                <v-tab>Historial de alquileres</v-tab>
              <v-tab-item></v-tab-item>
             </v-tabs>
          </v-tab-item>
         <v-tab>Propietario</v-tab>
          <v-tab-item>
            <v-tabs align-with-title>
               <v-tab>Agregar/Modificar Casa</v-tab>
              <v-tab-item>
                <v-container fluid>
                <v-row class="mb-6">
                    <v-col sm="6" ><CreateHouse></CreateHouse></v-col>
                 </v-row>
                   </v-container>
              </v-tab-item>
                <v-tab>Casa Ocupada</v-tab>
              <v-tab-item></v-tab-item>
             <v-tab>Historial de Inquilinos</v-tab>
              <v-tab-item></v-tab-item>
                <v-tab>Mi Perfil</v-tab>
              <v-tab-item></v-tab-item>
            </v-tabs>
          </v-tab-item>
          <v-tab>Configuracion General</v-tab>
        </v-tabs>
    </v-row>
</template>

<script>

import CreateHouse from '../components/CreateHouse'
// import History from '../components/History'

export default {
  components: {
    CreateHouse
    // History
  }
}
</script>
