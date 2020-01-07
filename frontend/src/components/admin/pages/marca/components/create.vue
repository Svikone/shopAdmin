<template lang="html">

  <section class="create">
    <h1>Добавить марку автомобиля</h1>
    <div class="">
      <!-- <form id="uploadForm" name="uploadForm" enctype="multipart/form-data"> -->
        Добавьте марку авто
        <input  type="text" id="marc" name="marc"  v-model="marc">
        <input type="file"  id="file" name="file" >
        <div @click="addMarc()">Добавить</div>
      <!-- </form> -->
    </div>
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
        marc:''
      }
    },
    methods: {
      addMarc() {
        var data = new FormData();
        var imagefile = document.querySelector('#file')

        data.append('file', imagefile.files[0])
        data.append('marca', this.marc)


        
        axios.post(this.api_url+'/admin/marca/add', data,{ 
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
  .create {

  }
</style>
