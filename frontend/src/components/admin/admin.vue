<template lang="html">

  <section class="admin">
    <syste-menu></syste-menu>
    <!-- <div class="menu">
    </div> -->
    <div class="content">
      <router-view></router-view>

    </div>
  </section>

</template>

<script lang="js">
import menu from './menu/menu'

  export default  {
    name: 'admin',
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

    },
    components: {
      'syste-menu': menu
    }
}


</script>

<style scoped lang="scss">
  .admin {
    display: flex;
    height: 100%;
    .menu {
      display: flex;
      flex-direction: column;
      // position: fixed;
      // width: 300px;
      min-width: 197px;
      background: #607D8B;
      height: 100%;
      padding-left: 10px;
      
    }
    .content {
      width: 100%;
    }
  }
</style>
