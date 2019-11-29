<template lang="html">

  <section class="menu">
    <router-link class="item" to="/marca">Добавить марку авто</router-link>
    <!-- <router-link class="item" to="/marca">Добавить марку авто</router-link> -->

  </section>

</template>

<script lang="js">
    
  export default  {
    name: 'menu',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .menu {
    .item {
        border-top: 1px solid #607d8b;
        text-decoration: none;
        color: black;
        padding: 10px;
        background:#8BC34A;
        font-family: sans-serif;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
  }
</style>
