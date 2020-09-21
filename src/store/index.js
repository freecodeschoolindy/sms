import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import router from '../router/index.js';

Vue.use(Vuex);

const github = {
  url: 'http://localhost:8000/api/v1/auth/login/',
  clientId: 'b1566423c56583f16eb0',
  redirectUri: 'http://localhost:8080/auth/callback'
};

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
    login: async function ({ commit }, payload) {
      const { authCode } = payload;
      const { data } = await axios.post(github.url, {
        code: authCode
      });
      const accessToken = JSON.parse(data).access_token;
      
      const { data: userData } = await axios.get(`https://api.github.com/user?access_token=${accessToken}`);

      // call api to save user
      // const userRes = await axios.post(`${API_URL}/users/`, {
      //   email: userData.email
      // });

      // call api to save user's profile
      // await axios.post(`${API_URL}/users/${userId}/profile/`, {
      //   email: data.email
      // }); 

      commit('setCurrentUser', userData);

      router.push({ name: 'Profile' });
    }
  },
  modules: {}
});
