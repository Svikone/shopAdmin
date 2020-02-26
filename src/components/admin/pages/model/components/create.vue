<template lang="html">

  <section class="create">
    <div class="">
      <div class="md-layout-item">
        <md-field>
          <label>Выберети марку авто</label>
          <md-select  v-model="selected" >
            <md-option  v-for="(item, i) in marcs" v-bind:key="i" v-bind:value="item.name">{{item.name}}</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label>Добавьте модель авто</label>
          <md-input v-model="model" type="text" name="" id=""></md-input>
        </md-field>

        <md-field>
          <label>Добавьте изображение</label>
          <md-file  ref="fileupload" id="file" v-model="file"/>
        </md-field>
      </div>

      <md-button class="md-raised md-primary"  @click="addModel()">Добавить</md-button>

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
      this.getMarc()
    },
    data () {
      return {
        api_url: api.config,
        marcs: [],
        selected: '',
        model:'',
        file: null
      }
    },
    methods: {
      getMarc() {
        axios.post(this.api_url.url+this.api_url.api+'/admin/get/marcs',{}).then(result => {
          this.marcs = result.data
        }).catch(() => {

        })
        
      },

      addModel() {
        var data = new FormData();
        var imagefile = document.querySelector('#file')

        data.append('file', imagefile.files[0])
        data.append('model', this.model)
        data.append('marc', this.selected)

        axios.post(this.api_url.url+this.api_url.api+'/model/add',data).then(() => {
         
        }).catch(() => {

        })
        this.model = null
        this.file = null;
        this.selected = null
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
