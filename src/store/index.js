import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    isDetailShow: true
  },
  getters: {
  },
  mutations: {
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    },
    ShowDetail(state){
      state.isDetailShow = true
    },
    HideDetail(state){
      state.isDetailShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
