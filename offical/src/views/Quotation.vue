<template>
  <div class="quotation">
    <header>
      <p>可向多个商家咨询最低价,商家及时回复</p>
    </header>
    <div class="content">
      <div class="car">
        <router-link :to="{
          path:'/type',
        query:{
          id:QuoList.details.serial.SerialID
        }}">
          <dl>
            <dt>
              <img :src=" QuoList.details.serial && QuoList.details.serial.Picture" alt="">
            </dt>
            <dd>
              <p>{{QuoList.details.serial && QuoList.details.serial.AliasName}}</p>
              <p>{{QuoList.details.market_attribute.year}}款 {{QuoList.details.car_name}}</p>
            </dd>
          </dl>
        </router-link>
      </div>
      <div class="from">
        <p>个人信息</p>
        <p><span>姓名</span><input type="text" placeholder="输入你的真实中文姓名" maxlength="4"></p>
        <p><span>手机</span><input type="text" placeholder="输入你的真实手机号码" maxlength="4"></p>
        <p><span>城市</span><span @click="city">{{cityl}}></span></p>
        <h6 class="quot">
          <button>询问低价</button>
        </h6>
      </div>
      <div class="adress">
        <p>选择报价经销商</p>
        <ul>
          <li v-for="(item,index) in QuoList.list" :key="index">
            <input type="checkbox">
            <div>
              <p>
                <span>{{item.dealerShortName}}</span><span>{{Math.floor(item.promotePrice)}}万</span>
              </p>
              <p><span>{{item.address}}</span><span>售{{item.saleRange}}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <p>询最低价</p>
    </div>
    <Address :class="cityShow?'city-show':''" @select-type="onSelectType" />

  </div>
</template>
<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'

  import Address from '../components/Address'
  import Mark from '../components/Mark'
  export default {
    data() {
      return {
        cityShow: false,
        type: 201,
        id: ''
      }
    },
    computed: {
      ...mapState({
        QuoList: state => state.quotation.QuoList,
        cityl: state => state.adress.city
      })
    },
    methods: {
      ...mapActions({
        getQuoList: 'quotation/getQuoList'
      }),
      city(e) {
        this.cityShow = true
        // console.log(this.cityShow)

      },
      onSelectType(type) {
        this.cityShow = false
        this.type = type
        this.getQuoList({
          id: this.id,
          cityId: this.type
        })
      }
    },
    components: {
      Address,
      Mark
    },
    mounted() {
      // console.log(this.$route.query.SerialID)
      this.id = this.$route.query.id
      this.getQuoList({
        id: this.id,
        cityId: this.type
      })
      // console.log(this.$route.query.id)
      // this.getQuoList({
      //   id: this.$route.query.id,
      //   cityId: this.type
      // })
      // this.getQuoList(this.$route.query.id)
      // console.log(this.$route.query.id)
    },

  }

</script>
<style scoped>
  input {
    border: none;
    font-size: 0.32rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .quotation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .city-show {
    transform: translate3d(0, 0, 0) !important;
    transition: transform 0.5s ease;
  }

  .quotation header {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #79cd92;
  }

  .quotation header p {
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
  }

  .content {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }

  .content .car {
    width: 100%;
    padding: 0.3rem;
    box-sizing: border-box;
  }

  .content .car dl {
    width: 100%;
    display: flex;
  }

  .content .car dl dt {
    width: 30%;
  }

  .content .car dl dt img {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
  }

  .content .car dl dd {
    flex: 1;
    width: 100%;
    margin-left: 0.2rem;
  }

  .content .car dl dd p:nth-child(1) {
    font-size: 0.36rem;
    font-weight: 500;
  }

  .content .car dl dd p:nth-child(2) {
    font-size: 0.32rem;
  }

  .from {
    width: 100%;
  }

  .from p {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }

  .from p input {
    width: 88%;
    text-align: right;
  }

  .from p:nth-child(1) {
    height: 0.5rem;
    line-height: 0.5rem;
    color: #666;
    background: #eee;
    font-size: 0.24rem;
  }

  .from p:nth-child(2),
  .from p:nth-child(3),
  .from p:nth-child(4) {
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.32rem;
    color: #000;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    text-align: right;
  }

  .from p:nth-child(4) {
    display: flex;
  }

  .from>.quot {
    background: #fff;
    text-align: center;
    padding-bottom: 0.2rem;
  }

  .from>.quot>button {
    font-size: 0.32rem;
    color: #fff;
    width: 80%;
    background: #3aacff;
    height: 0.7rem;
    border-radius: 0.1rem;
    border: 0;
  }

  .adress {
    width: 100%;
    box-sizing: border-box;
  }

  .adress>p {
    height: 0.5rem;
    padding: 0 0.2rem;
    line-height: 0.5rem;
    color: #666;
    background: #eee;
    font-size: 0.24rem;
  }

  .adress ul {
    padding: 0 0.2rem;
  }

  .adress ul li {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0.2rem 0;
    border-bottom: 1px solid #eee;
  }

  .adress ul li input {
    width: 10%;
  }

  .adress ul li div {
    flex: 1;
  }

  .adress ul li div p {
    margin-left: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .adress ul li p:nth-of-type(1)>span:nth-of-type(1) {
    font-size: 0.3rem;
  }

  .adress ul li p:nth-of-type(1)>span:nth-of-type(2) {
    font-size: 0.24rem;
    color: #f00;
  }

  .adress ul li p:nth-of-type(2) {
    margin-top: 0.1rem;
  }

  .adress ul li p:nth-of-type(2)>span:nth-of-type(1) {
    font-size: 0.24rem;
    color: #a2a2a2;
    width: 77%;
  }

  .adress ul li p:nth-of-type(2)>span:nth-of-type(2) {
    font-size: 0.24rem;
    color: #a2a2a2;
  }

  .bottom {
    width: 100%;
    /* position: fixed;
    left: 0;
    bottom: 0; */
    height: 1rem;
    background: #3aacff;
  }

  .bottom p {
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    font-weight: 500;
    line-height: 1rem;
  }

</style>
