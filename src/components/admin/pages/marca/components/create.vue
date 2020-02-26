<template lang="html">

  <section class="create">
    <h1>Добавить марку автомобиля</h1>
    <div class="">
      <md-field>
        <label>Добавьте марку авто</label>
        <md-input  type="text" id="marc" name="marc"  v-model="marc"></md-input>
      </md-field>
      <md-field>
        <label>Добавьте изображение</label>
        <md-file ref="fileupload" id="file" v-model="file"/>
      </md-field>
      <md-button class="md-raised md-primary"  @click="addMarc()">Добавить</md-button>
    </div>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../../../app.config.js'

  export default  {
    name: 'create',
    props: [],
    mounted () {

    },
    data () {
      return {
        api_url: api.config,
        marc:'',
        file: null
      }
    },
    methods: {
      addMarc() {
        var data = new FormData();
        var imagefile = document.querySelector('#file')
        data.append('file', imagefile.files[0])
        data.append('marca', this.marc)
        axios.post(this.api_url.url+this.api_url.api+'/admin/marca/add', data,{ 
        }).then(() => {
         
        }).catch(() => {

        })
        this.marc = null
        this.file = null;

      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .create {

  }
</style>
