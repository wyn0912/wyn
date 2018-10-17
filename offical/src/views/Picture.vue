<template>
  <div class="img" ref="wrap">
    <div class="header">
      <span>
        <router-link :to="{
          path:'/colorType',
          query:{
            SerialID:this.id
          }
        }">颜色
          ∨</router-link>
      </span>
      <span>
        <router-link :to="{
          path:'/carType',
          query:{
            SerialID:this.id
          }
        }">
          车款 ∨
        </router-link>
      </span>
    </div>
    <div class="imgcity">
      <ul class="imglist" v-for="(item,index) in getImg" :key="index" @click="moreImg(item.Id)">
        <li v-for="(key,value) in item.List" :key="value">
          <img :src="`${key.Url.replace('{0}', key.LowSize)}`" alt="">
          <div v-if="value == 0">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张&gt;</p>
          </div>
        </li>
      </ul>
    </div>
    <ul class="mark" v-if="showImg" ref="section" @scroll="scrolls">
      <!-- {{imgList}} -->
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="`${item.Url.replace('{0}', item.LowSize)}`" :data-id="index" />
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        id: '',
        ColorId: '',
        showImg: false
      }
    },
    computed: {
      ...mapState({
        getImg: state => state.img.getImg,
        imgList: state => state.img.imgList
      })
    },
    methods: {
      ...mapActions({
        getImgList: 'img/getImgList',
        getImglist: 'img/getCategoryImgList'
      }),
      moreImg(ID) {
        console.log(ID)
        this.showImg = true
        this.getImglist({
          SerialID: this.id,
          ImageID: ID
        });
        // https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=6&Page=1&PageSize=30&_1539692867132
      },
      scrolls() {
        console.log(1)
        let scrollTop = this.$refs.wrap.scrollTop;
        let height = this.$refs.section.getBoundingClientRect().height;
        console.log(scrollTop, (height - window.innerHeight));
        if ((scrollTop > ((height - window.innerHeight) - 20)) && !this.isFetching) {
          // 执行加载下一页的逻辑
          console.log('加载下一页');
          this.getImglist({
            SerialID: 2593,
            ImageID: 6
          })
        }
      }
    },
    mounted(e) {
      this.id = this.$route.query.SerialID
      this.getImgList(this.$route.query)
      let func = debounce(this.scroll, 100);
      this.$refs.wrap.addEventListener('scroll', func);
    }

  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .img {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .header {
    width: 100%;
    display: flex;
    position: fixed;
    background: #fff;
    top: 0;
    height: 1.2rem;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    border-bottom: 0.2rem solid #f4f4f4;
  }

  .header span {
    width: 50%;
    display: inline-block;
    line-height: 1.25;
    font-size: 0.28rem;
    text-align: center;
  }

  .header span:nth-child(1) {
    border-right: 1px solid #ccc;
  }

  img {
    width: 2.46rem;
    height: 2.46rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .imgcity {
    flex: 1;
    width: 100%;
    overflow-y: scroll;
    margin-top: 1rem;
  }

  .imglist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .imglist li {
    position: relative;
    float: left;
    margin-right: 0.03rem;
    margin-bottom: 0.06rem;
    width: 2.46rem;
    height: 2.46rem;
    padding: 0;
  }

  .imglist li div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(56, 90, 130, 0.5);
  }

  .imglist li div p:nth-child(1) {
    font-size: 0.28rem;
    margin-top: 0.8rem;
    color: #fff;
  }

  .imglist li div p:nth-child(2) {
    font-size: 0.26rem;
    color: #fff;
  }

  .mark {
    background: #f4f4f4;
    top: 0;
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    overflow-y: scroll;
  }

  .mark li {
    float: left;
    margin-right: 0.03rem;
    margin-bottom: 0.06rem;
    width: 2.46rem;
    height: 2.46rem;
    padding: 0;
  }

</style>
