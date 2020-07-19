import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import router from '../router/index.js';

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
    login: function (state, payload) {
      try {
        const { data } = await axios.post(`${API_URL}/users/login`, payload)
        commit('setCurrentUser', data);
        router.replace('/profile')
      } catch (err) {
        // TODO
        console.log('TODO: Handle error catching', err);
      }
    }
  },
  modules: {
  }
});
