<template lang="html">

  <section class="order-view-table">
    <md-table>
      <md-table-row>
        <md-table-head md-numeric v-for="(field, i) in fields" v-bind:key="i">{{field.name}} </md-table-head>
      </md-table-row>
    </md-table>
  </section>

</template>

<script lang="js">
  import orderItemConfig from'../../../../table/configs/orderItemsConfig.js'
  export default  {
    name: 'order-view-table',
    props: [],

    mounted () {
      this.fields = orderItemConfig.fields
    },
    data () {
      return {
        fields:[]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .order-view-table {

  }
</style>
