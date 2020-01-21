<template lang="html">

  <section class="create">
    <md-field>
      <label>Добавить категорию en</label>
      <md-input v-model="category" type="text" name="" id=""></md-input>
    </md-field>

    <md-field>
      <label>Категорию на руском</label>
      <md-input v-model="category_ru" type="text"></md-input>
    </md-field>

    <md-field>
      <label>Добавьте изображение</label>
      <md-file  ref="fileupload" id="file" v-model="file"/>
    </md-field>
    
    <md-button class="md-raised md-primary"  @click="addCategory()">Добавить</md-button>
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
        category:'',
        category_ru:'',
        file: null
      }
    },
    methods: {
      addCategory() {
        // console.log(this.category_ru,this.category)
        var data = new FormData();
        var imagefile = document.querySelector('#file')

        data.append('file', imagefile.files[0])
        data.append('category', this.category)
        data.append('category_ru', this.category_ru)
        axios.post(this.api_url.url+this.api_url.api+'/category/add',data).then(result => {
          // this.marcs = result.data
          // console.log(result.data)
          console.log(result)
        }).catch(() => {

        })

        this.category = null
        this.category_ru = null;
        this.file = null
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
