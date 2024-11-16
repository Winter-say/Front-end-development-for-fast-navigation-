import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true
  },
  getters: {
  },
  mutations: {
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
