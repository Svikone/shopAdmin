<template lang="html">

  <section class="create">

    <app-select :items='marcs' :message="'Выберети марку'" ></app-select>
    <app-select :items='models' :message="'Выберети  модель'" ></app-select>
    <app-select :items='category' :message="'Выберети  категорию'" ></app-select>


    <div class="" @click="select()">sdsf</div>
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
        this.select(data)
      })
    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        marcs: [],
        models: [],
        category: []
      }
    },
    methods: {
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
          console.log(this.category)
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
