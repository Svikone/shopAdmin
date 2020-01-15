<template lang="html">

  <section class="order-view-table">
    <md-table>
      <md-table-row>
        <md-table-head md-numeric v-for="(field, i) in fields" v-bind:key="i">{{field.name}} </md-table-head>
      </md-table-row>

      <md-table-row v-for="(item, j) in data" v-bind:key="j">
        <md-table-cell md-numeric v-for="(field, i) in fields" v-bind:key="i" >
          <div >
            {{item[field.field]}}

          </div>
        </md-table-cell>
      </md-table-row>

      
    </md-table>
  </section>

</template>

<script lang="js">
  import orderItemConfig from'../../../../table/configs/orderItemsConfig.js'
  import axios from 'axios'
  import api from '../../../../../app.config.js'



  export default  {
    name: 'order-view-table',
    props: [],

    mounted () {
      this.fields = orderItemConfig.fields,
      this.getOrderItems()
    },
    data () {
      return {
        fields:[],
        api_url: api.config,
        url: this.$router.currentRoute.params.id,
        data:[]


      }
    },
    methods: {
      getOrderItems() {
        axios.post(this.api_url.url+this.api_url.api+'/order/by/id',{id: this.url}).then(result => {
          console.log(result)
          this.data = result.data
        }).catch(() => {

        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .order-view-table {
    
  }
</style>
