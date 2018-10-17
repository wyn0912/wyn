import {
  getDeatilList
} from '../../api/index'

import {
  mergeCar,
  sortCar,
  filter
} from '../../utils/index'

// 初始化
const state = {
  detail: [],
  year: ['全部'],
  list: {},
  yearData: '',
  yearList: [],
  carYear: []
}



// 同步
const mutations = {
  updatedDtail(state, payload) {
    state.detail = payload
    state.yearList = mergeCar(sortCar(payload.list))
    // mergeCar(sortCar(filter(state.yearData, payload.list)))
    payload.list.forEach((item) => {
      if (state.year.indexOf(item.market_attribute.year) == -1) {
        state.year.push(item.market_attribute.year)
      }
    })

    payload.list.forEach((item) => {
      if (state.carYear.indexOf(item.market_attribute.year) == -1) {
        state.carYear.push(item.market_attribute.year)
      }
    })

  },
  updategetYear(state, payload) {
    if (payload == '全部') {
      state.yearList = mergeCar(sortCar(state.detail.list))
    } else {
      state.yearList = mergeCar(sortCar(filter(payload, state.detail.list)))
    }
  }
}

// 异步
const actions = {
  // 详情页
  getDeatilList({
    commit
  }, payload) {
    getDeatilList(payload).then(res => {
      commit('updatedDtail', res.data)
    })
  },
  // 年份
  getYear({
    commit
  }, payload) {
    commit('updategetYear', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
