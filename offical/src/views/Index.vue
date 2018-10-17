<template>
  <div class="index">
    <div class="BrandList" ref="BrandList">
      <div class="BrandList-scroll">
        <div class="list" v-for="(value,key,index) in BrandList" :key="key">
          <p :ref="'a'+index">{{key}}</p>
          <ul class="con">
            <li v-for="(item,index) in value" :key="index">
              <dl @click="asideList(item.MasterID)">
                <dt>
                  <img :src="item.CoverPhoto" alt="">
                </dt>
                <dd>{{item.Name}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="adise">
      <p>#</p>
      <p v-for="(value,key,index) in BrandList" :key="key" @touchstart="touchstart(index,$event,key)" @touchmove="touchmove($event,key)"
        @touchend="touchend" :ref="key">
        {{key}}
      </p>
    </div>
    <div :class="showAside?'carType showCar':' carType'" @click="asdie">
      <div class="typeCon" v-for="(item,index) in MakeList" :key="index">
        <p class="GroupName">{{item.GroupName}}</p>
        <ul class="con">
          <li v-for="(item,index) in item.GroupList" :key="index">
            <router-link :to="{
                      path:'/detail',
                      query:{
                        id:item.SerialID
                      }
                    }">
              <dl>
                <dt>
                  <img :src="item.Picture" alt="">
                </dt>
                <dd>
                  <p class="name">{{item.AliasName}}</p>
                  <p class="price">{{item.DealerPrice}}</p>
                </dd>
              </dl>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="center" v-if="showCenter">
      {{key}}
    </div>
    <!-- <Loading v-if="showLoading" /> -->
  </div>
</template>

<script>
  import {
    mapActions,
    mapState,
    mapMutations
  } from 'vuex'
  import Loading from '../components/Loading'
  import BScroll from 'better-scroll'
  import {
    lazyLoad
  } from '../utils/lazyLoad.js'

  export default {
    data() {
      return {
        showLoading: true,
        showAside: false,
        id: 0,
        start: 0,
        scroll: '',
        key: '',
        showCenter: false
      }
    },
    computed: {
      ...mapState({
        BrandList: state => state.index.BrandList,
        MakeList: state => state.index.MakeList
      })
    },
    methods: {
      ...mapActions({
        getBrandListData: 'index/getBrandListData',
        getMakeListData: 'index/getMakeListData'
      }),
      useBScroll() {
        this.scroll = new BScroll(this.$refs.BrandList, {
          click: true
        })
      },
      touchstart(id, e, val) {
        // console.log('touchstart...', e)
        // console.log(this.$refs[val][0].getBoundingClientRect())
        // .adiselist.getBoundingClientRect()
        this.id = id
        this.start = e.changedTouches[0].clientY
        this.scroll.scrollToElement(this.$refs['a' + id][0])
      },
      touchmove(e) {
        this.showCenter = true
        let newID = this.id + parseInt((e.changedTouches[0].clientY - this.start) / e.target.clientHeight)
        let arr = Object.keys(this.BrandList);
        arr.map((item, index) => {
          if (newID == index) {
            this.key = item
          }
        })
        // console.log(key)
        if (newID < 0) {
          newID = 0
        }
        if (newID > 20) {
          newID = 20
        }
        this.scroll.scrollToElement(this.$refs['a' + newID][0])
      },
      touchend() {
        this.showCenter = false
      },
      asideList(id) {
        this.getMakeListData(id)
        this.showAside = true
      },
      asdie() {
        this.showAside = false

      },
      typeClick(id) {
        // console.log(id)

      }
    },
    components: {
      Loading
    },
    updated() {
      this.showLoading = false
    },
    mounted() {
      this.getBrandListData()
      this.useBScroll()
      lazyLoad('.BrandList');
    }
  }

</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .index {
    width: 100%;
    height: 100%;
  }

  .BrandList {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .list {
    width: 100%;
  }

  .list p {
    height: 0.4rem;
    line-height: 0.4rem;
    background: #f4f4f4;
    font-size: 0.28rem;
    color: #aaa;
    padding-left: 0.3rem;
  }

  .list .con {
    margin: 0 0.3rem;
  }

  .list .con li {
    width: 100%;
    border-bottom: 1px solid #ccc;
  }

  .list .con li:last-child {
    border-bottom: none;
  }

  .list .con li dl {
    width: 100%;
    display: flex;
    height: 1rem;
    padding: 0.1rem 0;
    box-sizing: border-box;
    line-height: 0.8rem;
  }

  .list .con li dl dt img {
    display: block;
    height: 0.8rem;
  }

  .list .con li dl dd {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }

  .adise {
    position: fixed;
    right: 0.2rem;
    top: 20%;
  }

  .adise p {
    font-size: 0.24rem;
    color: #666;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
  }

  .carType {
    position: fixed;
    right: 0;
    top: 0;
    background: #fff;
    height: 100%;
    overflow-y: scroll;
    width: 75%;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.5s ease;
  }

  .showCar {
    transition: all 0.5s ease;
    transform: translate3d(0, 0, 0);
  }

  .carType .typeCon .GroupName {
    height: 0.5rem;
    line-height: 0.5rem;
    background: #f4f4f4;
    font-size: 0.28rem;
    color: #aaa;
    padding-left: 0.3rem;
  }

  .typeCon .con {
    margin-left: 0.1rem;
  }

  .typeCon .con li {
    width: 100%;
    border-bottom: 1px solid #ccc;
    height: 1.4rem;
  }

  .typeCon .con li dl dd {
    margin-left: 0;
  }

  .typeCon .con li dl dd .name {
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.34rem;
    color: #5f687a;
    overflow: hidden;
  }

  .typeCon .con li dl dd .price {
    color: #f00;
    font-size: 0.34rem;
    margin-top: 0.1rem;
  }

  .typeCon .con li dl img {
    margin: 0 0.1rem 0 0.2rem;
    width: 1.8rem;
    height: 1.2rem;
  }

  .typeCon .con li:last-child {
    border-bottom: none;
  }

  .typeCon .con li dl {
    width: 100%;
    display: flex;
    padding: 0.1rem 0;
    box-sizing: border-box;
  }

  .center {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -6%;
    text-align: center;
    width: 1rem;
    height: 1rem;
    background: #eee;
    color: #3a3a3a;
    font-size: .3rem;
    line-height: 1rem;
  }

</style>
