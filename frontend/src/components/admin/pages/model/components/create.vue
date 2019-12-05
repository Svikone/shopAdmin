<template lang="html">

  <section class="create">
    <div class="">
      <div class="md-layout-item">
        <md-field>
          <label>Выберети марку авто</label>
          <md-select  v-model="selected" >
            <!-- <option disabled value="">Выберите один из вариантов</option> -->
            <md-option  v-for="(item, i) in marcs" v-bind:key="i" v-bind:value="item.name">{{item.name}}</md-option>
          </md-select>
        </md-field>
      </div>
      Добавьте модель авто
      <input v-model="model" type="text" name="" id="">
      <button @click="addModel()">Добавить</button>
    </div>
  </section>

</template>

<script lang="js">
  import axios from 'axios'


  export default  {
    name: 'create',
    props: [],
    mounted () {
      this.getMarc()
    },
    data () {
      return {
        api_url: 'http://localhost:9000/api',
        marcs: [],
        selected: '',
        model:''
      }
    },
    methods: {
      getMarc() {
        axios.post(this.api_url+'/admin/get/marcs',{}).then(result => {
          this.marcs = result.data
          console.log(result.data)
        }).catch(() => {

        })
      },

      addModel() {
        axios.post(this.api_url+'/model/add',{marc: this.selected, model: this.model}).then(result => {
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
