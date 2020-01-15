<template lang="html">

  <section class="create">

    <app-select :items='marcs' :message="'Выберети марку'" ></app-select>
    <app-select :items='category' :message="'Выберети  категорию'" ></app-select>
    <app-select :items='models' :message="'Выберети  модель'" ></app-select>
    <input v-model="name" type="text" name="" id="" placeholder="Название детали">
    <input v-model="price" type="number" name="" id="" placeholder="Цена детали">
    <input v-model="country" type="text" name="" id="" placeholder="Страна изготовитель">
    <input type="file" name="file" id="file">

    <div class="btn" @click="addCatalog()">Отправить</div>
    <h1>create Component</h1>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import select from './select.vue'
  import {eventBus} from '../../../../../main.js'
  import api from '../../../../../app.config.js'




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
        api_url: api.config,
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
        var data = new FormData();
        var imagefile = document.querySelector('#file')

        data.append('file', imagefile.files[0])
        data.append('marca', this.selected)
        data.append('model', this.selectedModel)
        data.append('category', this.selectedCategory)
        data.append('name', this.name)
        data.append('price', this.price)
        data.append('country', this.country)

        axios.post(this.api_url.url+this.api_url.api+'/catalog/add',data).then(result => {
          this.models = result.data
        }).catch(() => {

        })
      },

      select(event) {
        console.log(event)
        
        axios.post(this.api_url.url+this.api_url.api+'/model/marc',{id: event}).then(result => {
          this.models = result.data
        }).catch(() => {

        })
      },

      getMarc() {
        axios.post(this.api_url.url+this.api_url.api+'/admin/get/marcs',{}).then(result => {
          this.marcs = result.data
        }).catch(() => {

        })
      },

      getCategory() {
        axios.post(this.api_url.url+this.api_url.api+'/category/get/all',{}).then(result => {
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
