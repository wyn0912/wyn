<template>
  <div class='mock' v-show="loading">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539168927986&di=37a8e2bc79152776bc64caac416448e3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e44156d13ee532f875520f14e2a4.gif"
      alt="">
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  export default {
    computed: {
      ...mapState({
        loading: state => state.index.Loading
      })
    }
  }

</script>


<style scoped>
  .mock {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }


  img {
    position: absolute;
    width: 46%;
    top: 27%;
    margin: 0 auto;
    left: 30%;
  }

</style>
