<template lang="html">

  <section class="create">

    <app-select :items='marcs' :message="'Выберети марку'" ></app-select>
    <app-select :items='category' :message="'Выберети  категорию'" ></app-select>
    <app-select :items='models' :message="'Выберети  модель'" ></app-select>
    <input v-model="name" type="text" name="" id="" placeholder="Название детали">
    <input v-model="price" type="number" name="" id="" placeholder="Цена детали">
    <input v-model="country" type="text" name="" id="" placeholder="Страна изготовитель">


    <div class="btn" @click="addCatalog()">Отправить</div>
    <h1>create Component</h1>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import select from './select.vue'
  import {eventBus} from '../../../../../main.js'



  export default  {
    name: 'create',
    props: [],
    mounted () {
      this.getMarc(),
      this.getCategory(),
      eventBus.$on('select', data => {
        this.selected = data,
        this.select(data)
      }),
      eventBus.$on('selectModel', data => {
        this.selectedModel = data
      }),
      eventBus.$on('selectCategory', data => {
        this.selectedCategory = data
        
      })
    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        marcs: [],
        models: [],
        category: [],
        selected: '',
        selectedCategory: '',
        selectedModel: '',
        name: '',
        price: '',
        country: ''
      }
    },
    methods: {
      addCatalog() {
        console.log(this.selectedModel,this.selected, this.selectedCategory,this.price)
        
        axios.post(this.api_url+'/catalog/add',{
          marca: this.selected,
          model: this.selectedModel,
          category: this.selectedCategory,
          name: this.name,
          price: this.price,
          country: this.country

        }).then(result => {
          this.models = result.data
        }).catch(() => {

        })
      },

      select(event) {
        console.log(event)
        
        axios.post(this.api_url+'/model/marc',{id: event}).then(result => {
          this.models = result.data
        }).catch(() => {

        })
      },

      getMarc() {
        axios.post(this.api_url+'/admin/get/marcs',{}).then(result => {
          this.marcs = result.data
        }).catch(() => {

        })
      },

      getCategory() {
        axios.post(this.api_url+'/category/get/all',{}).then(result => {
          this.category = result.data
          console.log(this.category[0].selector)
        }).catch(() => {

        })
      }
    },
    computed: {

    },
    components: {
      'app-select': select
    }
}


</script>

<style scoped lang="scss">
  .create {

  }
</style>
