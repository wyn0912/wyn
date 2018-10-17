<template>
  <div class="color">
    <p>全部颜色</p>
    <div>
      <div class="top">
        <span v-for="(value,key,index) in getColor" :key="index" @click="tabColor(index)" :class="idx == index?'active':''">{{key}}</span>
      </div>
      <ul v-for="(value,key,index) in getColor" :key="key" v-if="idx == index">
        <li v-for="(item,index) in value" :key="index" @click="color(item.ColorId)"><span :style="`background:${item.Value}`"></span>{{item.Name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        idx: 0,
        SerialID: ''
      }
    },
    computed: {
      ...mapState({
        getColor: state => state.img.getColor
      })
    },
    methods: {
      ...mapActions({
        getModelImageYearColor: 'img/getModelImageYearColor'
      }),
      tabColor(index) {
        this.idx = index
      },
      color(ColorId) {
        console.log(this.$route.query)
        this.$router.push({
          path: '/picture',
          query: Object.assign(this.$route.query, {
            ColorId: ColorId * 1
          })
        })
      }
    },
    mounted() {
      console.log(this.$route.query.SerialID)
      // https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=2593&_1539689513750
      this.SerialID = this.$route.query.SerialID
      this.getModelImageYearColor(this.$route.query.SerialID)
    }
  }

</script>

<style scoped>
  .color {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }

  .color>p {
    font-size: .34rem;
    color: #00afff;
    background: #fff;
    text-align: center;
    line-height: .8rem;
    height: .8rem;
    margin-top: .15rem;
  }

  .top {
    margin-top: .15rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: .76rem;
    height: .76rem;
    background: #fff;
    overflow-x: scroll;
  }

  .top span {
    padding-right: .42rem;
  }

  .top .active {
    color: #00afff;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: .15rem;
    padding: 0 .2rem;
    overflow: hidden;
    background: #fff;
  }

  ul li {
    width: 50%;
    width: 3.45rem;
    font-size: .32rem;
    line-height: .68rem;
    border: 1px solid #3aacff;
    box-sizing: border-box;
    margin: .2rem 0;
    border-radius: .05rem;
  }

  ul li:nth-child(odd) {
    margin-right: .2rem;
  }

  ul li span {
    display: inline-block;
    width: .4rem;
    height: .4rem;
    margin-left: .2rem;
    vertical-align: -12%;
    background: #fe9210;
    box-sizing: border-box;
    border: 1px solid #818181;
    margin-right: .2rem;
  }

</style>
