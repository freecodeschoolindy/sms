import axios from 'axios';
import Vue from 'vue';

import error from '@@/mockResponses/error.js';

Vue.config.productionTip = false;

// Prevents console log message to install Vue DevTools
Vue.config.devtools = false;

// Jest's setTimeout defaults to 5 seconds.
// Sometimes things take longer on Jenkins fail.
// Bump the timeout to 60 seconds.
jest.setTimeout(60 * 1000);

global.beforeEach(() => {
  axios.get = jest.fn(() => Promise.reject(error));
  axios.put = jest.fn(() => Promise.reject(error));
  axios.post = jest.fn(() => Promise.reject(error));
  axios.patch = jest.fn(() => Promise.reject(error));
  axios.delete = jest.fn(() => Promise.reject(error));
  Object.defineProperty(window, 'location', {
    value: new URL('http://localhost:8080')
  });
});

global.afterEach(() => {
  axios.get.mockClear();
  axios.put.mockClear();
  axios.post.mockClear();
  axios.patch.mockClear();
  axios.delete.mockClear();
});
