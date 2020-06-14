import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/sass/style.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
