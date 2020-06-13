import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      name: undefined,
      permissions: {}
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
