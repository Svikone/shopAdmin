<template lang="html">

  <section class="select">
    <md-field>
      <label>{{message}}</label>

      <!-- <md-select v-if="items.length == 0 " @md-selected="select(selected)" v-model="selected">
        <md-option  v-for="(item, i) in items" v-bind:key="i" v-bind:value="item.name">{{item.name}}</md-option>
      </md-select> -->
      <div class="selectContainer" v-if="items.length > 0">


        <md-select v-if="items[0].selector === 'category'"  @md-selected="selectCategory(selectedCategory)" v-model="selectedCategory">
          <md-option  v-for="(item, i) in items" v-bind:key="i" v-bind:value="item.category">{{item.category}}</md-option>
        </md-select>

        <md-select v-else-if="items[0].selector === 'models'" @md-selected="selectModel(selectedModel)" v-model="selectedModel">
          <md-option  v-for="(item, i) in items" v-bind:key="i" v-bind:value="item.name">{{item.name}}</md-option>
        </md-select>

        <md-select v-else-if="items[0].selector === 'marcs'" @md-selected="select(selected)" v-model="selected">
          <md-option  v-for="(item, i) in items" v-bind:key="i" v-bind:value="item.name">{{item.name}}</md-option>
        </md-select>
      </div>

     


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
        selected: '',
        selectedCategory: '',
        selectedModel: '',



      }
    },
    methods: {
      select(event) {
        eventBus.$emit('select', 
          event
        )
      },

      selectModel(event) {
        eventBus.$emit('selectModel', 
          event
        )
      },

      selectCategory(event) {
        eventBus.$emit('selectCategory', 
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
    .selectContainer {
      width: 100%;    
    }
  }
</style>
