import {
  getImg,
  getModelImageYearColor,
  getCategoryImgList
} from '../../api/index'

const state = {
  getImg: [],
  getColor: [],
  imgList: [],
  Page: 1,
  isFetching: false,
  current: 0,
  showSwiper: false
}

const mutations = {
  updategetImg(state, payload) {
    state.getImg = payload.data
  },
  updateYearColor(state, payload) {
    state.getColor = payload.data
  },
  updateImgList(state, payload) {
    state.imgList = state.imgList.concat(payload.List);
    state.Page++;
    state.isFetching = false;
  },
  startFetching(state) {
    state.isFetching = true;
  },
}


const actions = {
  getImgList({
    commit
  }, payload) {
    getImg(payload).then(res => {
      commit('updategetImg', res)
    })
  },
  getModelImageYearColor({
    commit
  }, payload) {
    console.log(payload)
    getModelImageYearColor(payload).then(res => {
      commit('updateYearColor', res)
    })
  },
  getCategoryImgList({
    commit,
    state
  }, payload) {
    console.log('payload...', payload);
    payload.Page = state.Page;
    if (state.isFetching) {
      return;
    }
    commit('startFetching');
    getCategoryImgList(payload).then(res => {
      console.log('res..', res);
      commit('updateImgList', res.data);
    })
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
