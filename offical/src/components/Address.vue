<template>
  <div class="address">
    <div class="localcity">
      <div class="loaction">
        <p>自动定位</p>
        <p>北京</p>
      </div>
      <div class="list">
        <p>省市</p>
        <ul class="listCity">
          <!-- {{address}} -->
          <li v-for="(item,index) in address" :key="index" @click="cityList(item.CityID)">
            <span>{{item.CityName}}</span><span>&gt;</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- {{province}} -->
    <div class="mark" :class="provinceCity?'active':''">
      <ul class="rightCity">
        <li v-for="(item,index) in province" :key="index" @click="cityName(item.CityName,item.CityID)">{{item.CityName}}</li>
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
        provinceCity: false,
        cityname: name,
        showCity: true
      }
    },
    computed: {
      ...mapState({
        address: state => state.adress.address,
        province: state => state.adress.province
      })
    },
    methods: {
      ...mapActions({
        getAddressList: 'adress/getAddressList',
        getProvince: 'adress/getProvince',
        getCity: 'adress/getCity',
        getQuoList: 'quotation/getQuoList'
      }),
      cityList(id) {
        this.provinceCity = true
        this.getProvince(id)
      },
      // cancel() {
      //   this.provinceCity = false
      // },
      cityName(name, cityId) {
        this.provinceCity = false
        // this.getQuoList(cityId)
        this.$emit('select-type', cityId)
        this.getCity(name)
      }
    },
    mounted() {
      this.getAddressList()
    }
  }

</script>

<style scoped>
  .address {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: #fff;
    transform: translate3d(0, 100%, 0);
    transition: transform 0.5s ease;
  }

  .address .loaction {
    width: 100%;
  }

  .localcity {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .address .loaction p:nth-child(1),
  .list>p {
    background: #f4f4f4;
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
  }

  .address .loaction p:nth-child(2) {
    padding-left: .4rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
  }

  .listCity {
    width: 100%;
  }

  .listCity li {
    width: 98%;
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    margin-left: .1rem;
    color: #333;
  }

  .listCity li span:nth-child(2) {
    font-size: .28rem;

    color: #999;
  }

  .mark {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 200;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.2s ease;
  }

  .active {
    transform: translate3d(0, 0, 0) !important;
    transition: transform 0.2s ease;
  }

  .mark .rightCity {
    width: 75%;
    height: 100%;
    background: #fff;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 201;
    overflow-y: auto;
  }

  .mark .rightCity li {
    padding-left: .3rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    margin-left: .1rem;
  }

</style>
