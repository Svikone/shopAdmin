<template lang="html">

  <section class="btn">
   
    <h1>{{title}}</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'btn',
    props: ['title'],
    mounted () {

    },
    data () {
      return {
        // route: this.$route.path
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .btn {
    h1 {
      padding: 5px;
      background: #5151fb;
      width: 120px;
      text-align: center;
      border-radius: 5px;
      color: white;
      font-family: sans-serif;
      font-weight: 100;
      cursor: pointer;
      width: 200px;
      &:hover {
        background: blue;
      }
    }
  }
</style>
