import axios from 'axios';
import Vue from 'vue';

Vue.config.productionTip = false;

// Prevents console log message to install Vue DevTools
Vue.config.devtools = false;

// Jest's setTimeout defaults to 5 seconds.
// Sometimes things take longer on Jenkins fail.
// Bump the timeout to 60 seconds.
jest.setTimeout(60 * 1000);

const error = {
  response: {
    data: {
      message: 'There was an error'
    }
  }
};

global.beforeEach(() => {
  axios.get = jest.fn(() => Promise.reject(error));
  axios.put = jest.fn(() => Promise.reject(error));
  axios.post = jest.fn(() => Promise.reject(error));
  axios.patch = jest.fn(() => Promise.reject(error));
  axios.delete = jest.fn(() => Promise.reject(error));
});

global.afterEach(() => {
  axios.get.mockClear();
  axios.put.mockClear();
  axios.post.mockClear();
  axios.patch.mockClear();
  axios.delete.mockClear();
});
