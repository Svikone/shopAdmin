<template lang="html">

  <section class="marca">
    <h1>Добавить марку автомобиля</h1>
    <div class="">
      Добавьте марку авто
      <input v-model="marc" type="text" name="" id="">
      <button @click="addMarc()">Добавить</button>
    </div>
  </section>

</template>

<script lang="js">
  import axios from 'axios'


  export default  {
    name: 'marca',
    props: [],
    mounted () {

    },
    data () {
      return {
         api_url: 'http://localhost:9000/api',
         marc:""
      }
    },
    methods: {
      addMarc() {
        axios.post(this.api_url+'/admin/marca/add',{marca: this.marc
        }).then(() => {

        }).catch(() => {

        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .marca {

  }
</style>
