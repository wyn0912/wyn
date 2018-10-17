<template>
  <div class="detail">
    <p>全部车款</p>
    <div class="car">
      <div class="year-con">
        <ul class="year">
          <li :class="id == index?'active':''" v-for="(item,index) in year" :key="index" @click="clickType(index,item)">{{item}}</li>
        </ul>
        <div class="year-content">
          <div class="data" v-for="(value,key) in yearList" :key="key">
            <p>{{key}}</p>
            <ul>
              <li v-for="(item,index) in value" :key="index" @click="carStyle(item.car_id)">
                <p>
                  <span>{{item.market_attribute.year}}款 {{ item.car_name}}</span>
                  <span>
                    {{item.market_attribute.dealer_price_min}}起
                  </span></p>
                <p><span>
                    {{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type }}
                  </span>
                  <span>
                    指导价{{item.market_attribute.official_refer_price}}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
        id: 0
      }
    },
    computed: {
      ...mapState({
        detail: state => state.detail.detail,
        year: state => state.detail.carYear,
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
        this.id = index
        this.getYear(item)
      },
      carStyle(carId) {
        console.log(this.$route.query)
        this.$router.push({
          path: '/picture',
          query: Object.assign(this.$route.query, {
            CarID: carId
          })
        })
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

  .detail>p {
    font-size: .34rem;
    color: #00afff;
    background: #fff;
    text-align: center;
    line-height: .8rem;
    height: .8rem;
    margin-top: .15rem;
  }

  .car {
    width: 100%;
    height: 100%;
    margin-top: .25rem;
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

  .year-content .data>ul>li>p {
    display: flex;
    justify-content: space-between;
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

  .year-content .data>ul>li>p:nth-child(1)>span:nth-child(2) {
    color: #f00;
    font-size: 0.3rem;

  }

  .year-content .data>ul>li>p:nth-child(2)>span:nth-child(2) {
    color: #333;
    font-size: 0.26rem;
    margin-left: 0.2rem;
  }

</style>
