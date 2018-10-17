import {
  getBrandList,
  getMakeList,
  getDeatilList
} from '../../api/index';


// 初始数据
const state = {
  BrandList: [],
  MakeList: [],
  Loading: true,
  year: []
}

// 同步改变
const mutations = {
  updataBrandList(state, payload) {
    state.BrandList = payload
    state.Loading = false

  },
  hideLoading(state) {
    cosnole.log(state)
  },
  updateMakeList(state, payload) {
    state.MakeList = payload.data
  }
}

// 异步改变
const actions = {
  getBrandListData({
    commit
  }) {
    getBrandList().then(res => {
      let obj = {}
      res.data.forEach(item => {
        if (obj[item.Spelling.slice(0, 1)] == undefined) {
          obj[item.Spelling.slice(0, 1)] = []
          obj[item.Spelling.slice(0, 1)].push(item)
        } else {
          obj[item.Spelling.slice(0, 1)].push(item)
        }
      })
      commit('updataBrandList', obj)
    })
  },
  getMakeListData({
    commit
  }, payload) {
    getMakeList(payload).then(res => {
      commit('updateMakeList', res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
