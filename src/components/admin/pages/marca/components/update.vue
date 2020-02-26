<template lang="html">

  <section class="update">
    <div class="container">
      <div>Измените нужные вам данные</div>
      <md-button class="md-raised md-primary " @click="back()">back</md-button>
    </div>

    <md-field>
      <label>Измените марку авто</label>
      <md-input  type="text" id="marc" name="marc"  v-model="marc"></md-input>
    </md-field>
    <div class="wrapper">
      <img v-if="!this.imageSrc" v-bind:src="this.api_url.url+'/file/uploads/'+data.url_img" />
      <img  :src="this.imageSrc"/>

      <md-field>
        <label>Выберите изображение</label>
        <md-file ref="fileupload" id="file" v-model="file" @change="sync"/>
      </md-field>
    </div>
    <md-button class="md-raised md-primary"  @click="updateMarc()">Добавить</md-button>

  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../../../app.config.js'

  export default  {
    name: 'update',
    props: [],
    mounted () {
      this.getMarcsId()
    },
    data () {
      return {
        marc: '',
        file: null,
        api_url: api.config,
        data:[],
        imageSrc: '',
        id: this.$route.params.id,
      }
    },
    methods: {
      getMarcsId() {
        axios.post(this.api_url.url+this.api_url.api+'/admin/get/marcs/id',{id: this.id}).then(result => {
          this.data = result.data[0]
          this.marc = this.data.name
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
      
      updateMarc() {
        var data = new FormData();
        var imagefile = document.querySelector('#file')
        data.append('file', imagefile.files[0])
        data.append('name', this.marc)
        data.append('id', this.id)

        axios.post(this.api_url.url+this.api_url.api+'/admin/marca/update', data,{ 
        }).then(() => {
        }).catch(() => {
        })
        this.$router.go(-1)
      },

      back() {
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
