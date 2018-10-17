import Vue from 'vue'
import vuex from 'vuex'

import index from './modules/index'
import detail from './modules/detail'
import quotation from './modules/quotation'
import adress from './modules/adress'
import img from './modules/img'

import Logger from 'vuex/dist/logger'

Vue.use(vuex)

export default new vuex.Store({

  modules: {
    index,
    detail,
    quotation,
    adress,
    img
  },
  plugins: [Logger()]
})
