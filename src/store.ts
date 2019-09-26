import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storedstring: ''
  },
  mutations: {
    change(state, storedstring: string) {
      state.storedstring = storedstring
    }
  },
  actions: {
    change({ commit }, data: string) {
      commit('change', data)
    }
  },
  getters: {
    storedstring: state => state.storedstring
  }
})
