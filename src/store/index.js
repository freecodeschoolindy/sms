import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
  },
  modules: {
  }
});
