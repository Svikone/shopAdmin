<template lang="html">

  <section class="update">
    <div class="container">
      <div>Измените нужные вам данные</div>
      <md-button class="md-raised md-primary " @click="back()">back</md-button>
    </div>

    <md-field>
      <label>Измените модель авто</label>
      <md-input  type="text" id="model" name="model"  v-model="model"></md-input>
    </md-field>
    <div class="wrapper">
      <img v-if="!this.imageSrc" v-bind:src="this.api_url.url+'/file/uploads/'+data.url_img" />
      <img  :src="this.imageSrc"/>

      <md-field>
        <label>Выберите изображение</label>
        <md-file ref="fileupload" id="file" v-model="file" @change="sync"/>
      </md-field>
    </div>
    <md-button class="md-raised md-primary"  @click="updateModel()">Добавить</md-button>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../../../app.config.js'

  export default  {
    name: 'update',
    props: [],
    mounted () {
      this.getModelsId()
    },
    data () {
      return {
        model: '',
        file: null,
        api_url: api.config,
        data:[],
        imageSrc: '',
        id: this.$route.params.id,
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },

      getModelsId() {
        axios.post(this.api_url.url+this.api_url.api+'/model/get/id',{id: this.id}).then(result => {
          this.data = result.data[0]
          this.model = this.data.name
        }).catch(() => {

        })
      },
      
      //Предпросмотр изображения//
      sync (e) {
        e.preventDefault();
        this.file = e.target.files[0]
        let reader = new FileReader()
        let vm = this;
        reader.onload = function(event) {
          vm.imageSrc = event.target.result;
        }
        reader.readAsDataURL(this.file);
      },

      updateModel() {
        var data = new FormData();
        var imagefile = document.querySelector('#file')
        data.append('file', imagefile.files[0])
        data.append('name', this.model)
        data.append('id', this.id)

        axios.post(this.api_url.url+this.api_url.api+'/model/update/id', data,{ 
        }).then(() => {
        }).catch(() => {
        })
        this.$router.go(-1)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .update {
    .container {
      display: flex;
      justify-content: space-between;
      padding: 6px;
      font-weight: bold;
      font-family: sans-serif;
    }
    .wrapper {
      display: flex;
      img {
        height: auto;
        max-width: 76px;  
      }
    }
  }
</style>
