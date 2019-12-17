<template lang="html">

  <section class="table">
    <div v-if="btn.url">
      <router-link :to="btn.url">
        <btn v-bind:title="btn.title" ></btn>
      </router-link>
    </div>

    <md-table>
      <md-table-row>
        <md-table-head md-numeric v-for="(field, i) in fields" v-bind:key="i">{{field.name}} </md-table-head>
      </md-table-row>

      <md-table-row  v-for="(item, j) in data" v-bind:key="j">
          <md-table-cell md-numeric  v-for="(field, i) in fields" v-bind:key="i" >
            <div v-if="field.type == 'link'"> 
              <router-link :to="field.url+'/'+item._id">
                  {{item[field.field]}}
              </router-link>
            </div>
            <div v-else>{{item[field.field]}}</div>
          </md-table-cell>
      </md-table-row>
    </md-table>
  </section>

</template>

<script lang="js">
  import catalogConfig from './configs/catalogConfig.js'
  import modelConfig from './configs/modelConfig.js'
  import marcConfig from './configs/marcConfig.js'
  import categoryConfig from './configs/categoryConfig.js'
  import orderConfig from './configs/orderConfig.js'
  import btn from '../admin/pages/btnCreate/btn.vue'
  import axios from 'axios'

  export default  {

    name: 'table',
    props: [],
    mounted () {
      // this.fields = catalogConfig.fields,
      this.switchConfig() 
    },
    data () {
      return {
        fields:[],
        api_url:'http://localhost:9000/api/',
        data:[],
        api:'',
        route: this.$route.path,
        btn:''

      }
    },
    methods: {
      getDataTable() {
        axios.post(this.api_url+this.api,{}).then(result => {
          console.log(result)
          this.data = result.data
        }).catch(() => {

        })
      }, 

      switchConfig() {
        switch(this.$router.currentRoute.path) {
          case '/catalog':
            this.setConfig(catalogConfig)
          break

          case '/model':
            this.setConfig(modelConfig)
          break

          case '/marca':
            this.setConfig(marcConfig)
          break

          case '/category':
            this.setConfig(categoryConfig)
          break

          case '/order':
            this.setConfig(orderConfig)
          break

        }
      },

      setConfig(config) {
        this.fields = config.fields;
        this.api = config.api.url;
        this.btn = config.btn;

        console.log(this.$router.currentRoute.path)
        this.getDataTable()
      }
    },
    computed: {

    },
    components: {
      'btn': btn
    }
}


</script>

<style scoped lang="scss">
  .table {

  }
</style>
