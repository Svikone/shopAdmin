<template lang="html">

  <section class="select">
    <md-field>
      <label>{{message}}</label>
      <md-select  @md-selected="select(selected)" v-model="selected">
        <!-- <option disabled value="">Выберите один из вариантов</option> -->
        <md-option  v-for="(item, i) in items" v-bind:key="i" v-bind:value="item.name">{{item.name}}</md-option>
      </md-select>

    </md-field>
  </section>

</template>

<script lang="js">
import {eventBus} from '../../../../../main.js'

  export default  {
    name: 'select',
    props: ['items','message'],
    mounted () {

    },
    data () {
      return {
        selected: ''

      }
    },
    methods: {
      select(event) {
        eventBus.$emit('select', 
          event
        )
      }
      
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .select {

  }
</style>
