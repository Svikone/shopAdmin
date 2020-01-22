<template lang="html">

  <section class="menu">
    <div>Shop admin</div>
    <router-link class="item" to="/marca">Работа с маркой авто</router-link>
    <router-link class="item" to="/model">Работа с моделью авто</router-link>
    <router-link class="item" to="/category">Категории</router-link>
    <router-link class="item" to="/catalog">Детали</router-link>
    <router-link class="item" to="/order">Заказы</router-link>

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
        border-left: 20px solid #607d8b;
        cursor: pointer;
        &:hover {
          color: white;
          border-left: 20px solid #24d82c;
        }
      }
  }
</style>
