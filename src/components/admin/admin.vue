<template lang="html">

  <section class="admin">
    <syste-menu></syste-menu>
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
      min-width: 197px;
      background: #607D8B;
      height: 100%;
      position: fixed;
    }
    .content {
      width: 100%;
      padding: 10px;
      margin-left: 197px;
    }
  }
</style>
