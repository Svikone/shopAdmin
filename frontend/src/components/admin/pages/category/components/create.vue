<template lang="html">

  <section class="create">
     Добавить категорию
    <input v-model="category" type="text" name="" id="">
    Категорию на руском
    <input v-model="category_ru" type="text" name="" id="">
    <input type="file" name="file" id="file">
    <button @click="addCategory()">Добавить</button>
  </section>

</template>

<script lang="js">
  import axios from 'axios'


  export default  {
    name: 'create',
    props: [],
    mounted () {

    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        category:'',
        category_ru:''
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
        axios.post(this.api_url+'/category/add',data).then(result => {
          // this.marcs = result.data
          // console.log(result.data)
          console.log(result)
        }).catch(() => {

        })
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
