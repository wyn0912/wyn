import {
  getQuoList
} from '../../api/index'

const state = {
  QuoList: []
}

const mutations = {
  updateQuoList(state, payload) {
    state.QuoList = payload.data
    // console.log(payload.data)
  }
}


const actions = {
  getQuoList({
    commit
  }, payload) {
    // console.log(payload.cityId)
    getQuoList(payload.id, payload.cityId).then(res => {
      commit('updateQuoList', res)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
