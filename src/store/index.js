import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || ""
  },
  mutations: {
    SET_TOKEN(state, payload) {
      localStorage.setItem('token', payload)
    }
  },
  actions: {
    setToken(state, payload) {
      state.commit('SET_TOKEN', payload)
    }
  },
  modules: {},
  getters: {
    getToken: (state) => state.token
  }
})
