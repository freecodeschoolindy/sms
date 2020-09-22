import Vuex, { Store } from 'vuex';
import VueRouter from 'vue-router';
import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import _cloneDeep from 'lodash.clonedeep';
import flushPromises from 'flush-promises';

import { storeConfig } from '@/store/index.js';
import { routerConfig } from '@/router/index.js';

import error from '@@/mockResponses/error.js';

const helpers = {
  setupTestVariables: function (permissions) {
    const setupToReturn = {
      localVue: this.setupLocalVue(),
      store: this.setupStore()
    };

    if (permissions) {
      this.setupPermissions(setupToReturn.store, permissions);
    }

    return setupToReturn;
  },
  setupLocalVue: function () {
    let localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);

    return localVue;
  },
  setupStore: function () {
    return new Store(_cloneDeep(storeConfig));
  },
  setupPermissions: function (store, permission) {
    store.state.currentUser = store.state.currentUser || {};
    store.state.currentUser.groups = permission;
  },
  mountWrapper: async function (component, wrapperOptions, options) {
    const stubs = wrapperOptions?.stubs;
    const mocks = wrapperOptions?.mocks;

    if (wrapperOptions) {
      delete wrapperOptions.stubs;
      delete wrapperOptions.mocks;
    }

    routerConfig.scrollBehavior = jest.fn();
    const router = new VueRouter(routerConfig);
    if (options?.currentRoute) {
      router.push(options.currentRoute);
    }

    let wrapper = mount(component, {
      mocks: {
        ...mocks
      },
      stubs: {
        ...stubs
      },
      router,
      ...wrapperOptions
    });

    await flushPromises();
    if (options?.runAllTimers) {
      jest.runAllTimers();
    }

    return wrapper;
  },
  shallowMountWrapper: async function (component, options) {
    let wrapper = shallowMount(component, {
      stubs: { 'router-link': RouterLinkStub },
      ...options
    });

    await flushPromises();

    return wrapper;
  },
  urlMapper: function (url, urlMap) {
    url = url.replace('http://localhost:8000/api/v1', '');

    if (urlMap[url]) {
      return Promise.resolve(_cloneDeep(urlMap[url]));
    }
    return Promise.reject(error);
  }
};

export default helpers;
