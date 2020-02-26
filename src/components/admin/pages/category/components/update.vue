<template lang="html">

  <section class="update">
    <div class="container">
      <div>Измените нужные вам данные</div>
      <md-button class="md-raised md-primary " @click="back()">back</md-button>
    </div>

    <md-field>
      <label>Измените категорию</label>
      <md-input  type="text" id="category" name="category"  v-model="category"></md-input>
    </md-field>

    <md-field>
      <label>Измените категорию на руском</label>
      <md-input  type="text" id="category_ru" name="category_ru"  v-model="category_ru"></md-input>
    </md-field>

    <div class="wrapper">
      <img v-if="!this.imageSrc" v-bind:src="this.api_url.url+'/file/uploads/'+data.url_img" />
      <img  :src="this.imageSrc"/>

      <md-field>
        <label>Выберите изображение</label>
        <md-file ref="fileupload" id="file" v-model="file" @change="sync"/>
      </md-field>
    </div>
    <md-button class="md-raised md-primary"  @click="updateCategory()">Добавить</md-button>

  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import api from '../../../../../app.config.js'

  export default  {
    name: 'update',
    props: [],
    mounted () {
      this.getCategoryId()
    },
    data () {
      return {
        category: '',
        category_ru: '',
        file: null,
        api_url: api.config,
        data:[],
        imageSrc: '',
        id: this.$route.params.id,
      }
    },
    methods: {
      getCategoryId() {
        axios.post(this.api_url.url+this.api_url.api+'/category/get/id',{id: this.id}).then(result => {
          this.data = result.data[0]
          this.category = this.data.category
          this.category_ru = this.data.category_ru

        }).catch(() => {

        })
      },

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

      updateCategory() {
        var data = new FormData();
        var imagefile = document.querySelector('#file')
        data.append('file', imagefile.files[0])
        data.append('name', this.category)
        data.append('name_ru', this.category_ru)
        data.append('id', this.id)

        axios.post(this.api_url.url+this.api_url.api+'/category/update/id', data,{ 
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
