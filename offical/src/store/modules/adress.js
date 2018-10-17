import {
  getAddressList,
  getProvince
} from '../../api/index'

const state = {
  address: [],
  province: [],
  city: '北京'
}

const mutations = {
  updateAddressList(state, payload) {
    state.address = payload.data
  },
  updategetProvince(state, payload) {
    state.province = payload.data
  },
  updateCity(state, payload) {
    state.city = payload
    // console.log(payload)
  }
}

const actions = {
  getAddressList({
    commit
  }) {
    getAddressList().then(res => {
      // console.log(res)
      commit('updateAddressList', res)
    })
  },
  getProvince({
    commit
  }, payload) {
    getProvince(payload).then(res => {
      commit('updategetProvince', res)
    })
  },
  getCity({
    commit
  }, payload) {
    commit('updateCity', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
