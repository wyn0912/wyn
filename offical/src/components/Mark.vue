<template>
  <div class="mark">
    <div class="rightCity">
      <ul>
        <li>安庆</li>
        <li>亳州</li>
        <li>蚌埠</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .mark {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 200;
  }

  .mark .rightCity {
    width: 75%;
    height: 100%;
    background: #fff;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 201;
  }

  .mark .rightCity ul li {
    padding-left: .3rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    margin-left: .1rem;
  }

</style>
