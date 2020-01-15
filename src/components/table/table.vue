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
          <div v-else-if="field.type == 'img'">
            <img v-bind:src="api_url.url+'/file/uploads/'+item.url_img" />
          </div>    
          <div v-else-if="field.type == 'Boolean'" >
            <input type="checkbox" @click="changeStatusConfirm(item, field.field)"  class="md-primary"> 
            
          </div>                
          <div v-else>{{item[field.field]}}</div>
        </md-table-cell>
      </md-table-row>
    </md-table>


            <input type="checkbox" @click="qwe(data[0])"  v-model="test" class="md-primary"> 

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
  import api from '../../app.config.js'


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
        api_url: api.config,
        data:[],
        api:'',
        route: this.$route.path,
        btn:'',
        
        bulcks: [],
        test: false

      }
    },
    methods: {
      qwe(item) {
        console.log(item)
      },
      changeStatusConfirm(item, mode) {
        for(let status of this.data) {
          if(status._id == item._id) {
          console.log(status)
            const temp = !status[mode]
            status[mode] ='! status[mode]'
            console.log(temp)

            let foundIndex = this.bulcks.findIndex(x => x._id == item._id)
            if(foundIndex != -1)
              this.bulcks.push(status)
            else
              this.bulcks[foundIndex] = status
            
          }
        }
        console.log(item,mode)
      },
      getDataTable() {
        axios.post(this.api_url.url+this.api_url.api+'/'+this.api,{}).then(result => {
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
    img {
      max-width: 45px;
    }
  }
</style>
