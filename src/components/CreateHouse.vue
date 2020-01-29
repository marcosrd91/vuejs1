<template>
      <v-container fluid>
            <v-form>
              <P>{{ UserData }} </P>
             <v-text-field
                v-model="House.Name"
                label="Nombre"
                required
              ></v-text-field>
            <v-textarea
                v-model="House.Description"
                label="Descripcion"
                required
              ></v-textarea>
                  <v-text-field
                v-model="House.Price"
                label="Precio"
                required
              ></v-text-field>
              <v-file-input type="file" @change="onChange" multiple />
              <div id="preview" v-if="urls" >
                <img v-for="img in urls" :src="img" height="150px" :key="img" @click="remove(this)"/>
             </div>
             <hr>
              <v-btn class="mr-4" type="submit" @click="sendform">Agregar</v-btn>
        </v-form>
     </v-container>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
  },
  data: function () {
    return {
      Isvisible: false,
      House: {
        User: '',
        Name: '',
        Description: '',
        Img: [],
        allfiles: []
      },
      //   allfiles: [],
      urls: []
    }
  },
  computed: {
    ...mapGetters([
      'UserData'
    ])
  },
  methods: {
    ...mapActions([
      'CreateHouse'
    ]),

    onChange (e) {
      e = event.currentTarget.files
      // get the files
      let files = e

      // console.log(files)
      // Process each file
      // var allFiles = []
      if (files !== undefined) {
        for (var i = 0; i < files.length; i++) {
          let file = files[i]

          if (!file) {
            // e.preventDefault()
            alert('No file chosen')
            return
          }

          if (file.size > 1024 * 1024) {
            // e.preventDefault()
            alert('File too big (> 1MB)')
            return
          }
          // Make new FileReader
          let reader = new FileReader()
          // Convert the file to base64 text
          reader.readAsDataURL(file)
          let urlimage = URL.createObjectURL(file)
          // on reader load somthing...
          reader.onload = () => {
          // Make a fileInfo Object
            let fileInfo = {
              name: file.name,
              type: file.type,
              size: Math.round(file.size / 1000) + ' kB',
              base64: reader.result,
              file: file,
              fileUrl: urlimage
            }
            // Push it to the state
            // this.House.Img.push(fileInfo.base64)
            this.House.allfiles.push(fileInfo)
            this.urls.push(urlimage)
            console.log(this.House.allfiles)
          // // If all files have been proceed
          // if (allFiles.length === files.length) {
          //   // Apply Callback function
          //   if (this.multiple) this.done(allFiles)
          //   else this.done(allFiles[0])
          // }
          } // reader.onload
        } // for
      }
    }, // onChange()
    remove (img) {
      let imgToRemove = event.currentTarget.src
      for (var i = 0; i < this.House.allfiles.length; i++) {
        if (this.House.allfiles[i].fileUrl === imgToRemove) {
          this.House.allfiles.splice(i, 1)
        }
      }
      console.log(this.House.allfiles)
      event.currentTarget.remove()
    },
    sendform () {
      var data = new FormData()
      data.append('User', this.UserData)
      data.append('Name', this.House.Name)
      data.append('Description', this.House.Description)
      for (var i = 0; i < this.House.allfiles.length; i++) {
        data.append('ImgUrl', this.House.allfiles[i].base64)
      }
      // console.log(data)
      this.CreateHouse(data)
      data = null
    }
  }
}
</script>
