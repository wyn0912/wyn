<template>
  <div class="detail">
    <div class="car">
      <router-link :to="{
        path:'/picture', 
        query:{ SerialID:detail.SerialID }
         }">
        <img :src="detail.CoverPhoto" alt="">
      </router-link>
      <div class="detail_price">
        <div class="left">
          <p class="pri">{{detail.market_attribute && detail.market_attribute.dealer_price}}</p>
          <h6 class="guide">指导价{{detail.market_attribute && detail.market_attribute.official_refer_price}}</h6>
        </div>
        <button>
          <router-link :to="{
                  path:'/Quotation',
                  query:{
                    id:(detail.BottomEntranceLink).slice(-6)
                  }
                }">{{detail.BottomEntranceTitle}}
          </router-link>
        </button>
      </div>
      <div class="year-con">
        <ul class="year">
          <li :class="id == item?'active':''" v-for="(item,index) in year" :key="index" @click="clickType(index,item)">{{item}}</li>
        </ul>
        <div class="year-content">
          <div class="data" v-for="(value,key) in yearList" :key="key">
            <p>{{key}}</p>
            <ul>
              <li v-for="(item,index) in value" :key="index">
                <p>{{item.market_attribute.year}}款 {{ item.car_name}}</p>
                <p>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type }}</p>
                <p>
                  <span>
                    指导价{{item.market_attribute.official_refer_price}}
                  </span>
                  <span>
                    {{item.market_attribute.dealer_price_min}}起
                  </span>
                </p>
                <router-link :to="{
                  path:'/Quotation',
                  query:{
                    id:(detail.BottomEntranceLink).slice(-6)
                  }
                }">
                  <button>{{detail.BottomEntranceTitle}}</button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <router-link :to="{
                  path:'/Quotation',
                  query:{
                    id:(detail.BottomEntranceLink).slice(-6)
                  }
                }">
        <p>{{detail.BottomEntranceTitle}}</p>
        <p>本地经销商为你报价</p>
      </router-link>
    </div>
  </div>
</template>


<script>
  // .market_attribute.year
  import {
    mapState,
    mapActions,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    name: 'detail',
    data() {
      return {
        id: '全部'
      }
    },
    computed: {
      ...mapState({
        detail: state => state.detail.detail,
        year: state => state.detail.year,
        list: state => state.detail.list,
        yearList: state => state.detail.yearList
      })
    },
    methods: {
      ...mapActions({
        getDeatilList: 'detail/getDeatilList',
        getYear: 'detail/getYear'

      }),
      clickType(index, item) {
        this.id = item
        this.getYear(item)
      }
    },
    mounted(e) {
      this.getDeatilList(this.$route.query.id)
    }
  }

</script>

<style scoped>
  a {
    text-decoration: none;
    color: #fff;
  }

  .detail {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }

  .car {
    width: 100%;
    height: 100%;
  }

  .detail .car img {
    display: block;
    width: 100%;
    height: 4.76rem;
  }

  .detail_price {
    width: 100%;
    padding: 0.36rem 0.2rem 0.3rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-bottom: 0.2rem;
  }

  .detail_price .left {
    width: 49%;
  }

  .detail_price button {
    flex: 1;
  }

  .detail_price .left .pri {
    font-size: 0.36rem;
    color: #f00;
    font-weight: 500;
  }

  .detail_price .left .guide {
    font-size: 0.28rem;
    color: #ccc;
    font-weight: 500;
  }

  .detail_price button {
    width: 100%;
    height: 0.8rem;
    color: #fff;
    border: none;
    background: #00afff;
    font-size: 0.36rem;
    border-radius: 0.1rem;
  }

  .year {
    width: 100%;
    background: #fff;
    padding: 0.2rem;
    display: flex;
    box-sizing: border-box;
    font-size: 0.34rem;
  }

  .year li {
    padding-right: 0.46rem;
  }

  .year .active {
    color: #00afff;
  }

  .year-con {
    padding-bottom: 1rem;
  }

  .year-content .data {
    width: 100%;
    height: 100%;
  }

  .year-content .data>p {
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.26rem;
    color: #999;
    background: #f4f4f4;
  }

  .year-content .data>ul {
    width: 100%;
  }

  .year-content .data>ul li {
    background: #fff;
    padding: 0 0.2rem;
    border-bottom: 0.18rem solid #f4f4f4;
  }

  .year-content .data>ul>li>p:nth-child(1) {
    font-size: 0.3rem;
    padding: 0.1rem 0;
    color: #3d3d3d;
  }

  .year-content .data>ul>li>p:nth-child(2) {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #999;
  }

  .year-content .data>ul>li>p:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .year-content .data>ul>li>p:nth-child(3)>span:nth-child(1) {
    font-size: 0.26rem;
    color: #333;
  }

  .year-content .data>ul>li>p:nth-child(3)>span:nth-child(2) {
    font-size: 0.3rem;
    color: #f00;
    margin-left: 0.2rem;
  }

  .year-content .data>ul>li button {
    width: 100%;
    background: none;
    color: #00afff;
    text-align: center;
    border: none;
    border-top: 1px solid #eee;
    font-size: 0.32rem;
    height: 0.8rem;
  }

  .bottom {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1rem;
    background: #3aacff;
  }

  .bottom a>p:nth-child(1) {
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    margin-top: 0.18rem;
    font-weight: 500;
  }

  .bottom a>p:nth-child(2) {
    font-size: 0.24rem;
    color: #fff;
    text-align: center;
    font-weight: 500;
  }

</style>
