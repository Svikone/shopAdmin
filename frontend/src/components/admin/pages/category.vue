<template lang="html">

  <section class="category">
    Добавить категорию
    <input v-model="category" type="text" name="" id="">
    Категорию на руском
    <input v-model="category_ru" type="text" name="" id="">

    <button @click="addCategory()">Добавить</button>
  </section>

</template>

<script lang="js">
  import axios from 'axios'


  export default  {
    name: 'category',
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
        console.log(this.category_ru,this.category)
        axios.post(this.api_url+'/category/add',{category: this.category, category_ru: this.category_ru}).then(result => {
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
  .category {

  }
</style>
