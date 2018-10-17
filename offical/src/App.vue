<template>
  <div id="app">
    <router-view></router-view>
    <!-- <loading /> -->
  </div>
</template>

<script>
  import loading from './components/Loading'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'app',
    computed: {

    },
    components: {
      loading
    },
    mounted() {
      // getBrandList().then(res => {
      //   console.log('first..', res)
      // })
      // getMakeList(92).then(res => {
      //   console.log('makeList...', res)
      // })
      // getDeatilList(4985).then(res => {
      //   console.log('detail...', res)
      // })
    }
  }

</script>

<style>
  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 0.34rem;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  } */

  html,
  body {
    width: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app {
    width: 100%;
    height: 100%;
  }

</style>
