import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

const API_URL = 'http://localhost:8000/api/v1';

export default new Vuex.Store({
  state: {
    currentUser: {},
    lastURLRequested: null
  },
  mutations: {
    setCurrentUser: function (state, user) {
      state.currentUser = user;
    },
    setLastURLRequested: function (state, url) {
      state.lastURLRequested = url;
    }
  },
  actions: {
    async login ({ commit }, payload) {
      const { data } = await axios.post(`${API_URL}/users/login`, payload)
      commit('setCurrentUser', data);
      router.replace('/profile')
    }
  },
  modules: {
  }
});
