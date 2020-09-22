import axios from 'axios';

import Authenticating from '@/views/auth/Authenticating.vue';

import testHelpers from '@@/testHelpers.js';
const urlMapper = testHelpers.urlMapper;

describe('Authenticating.vue', () => {
  let localVue;
  let store;
  let setup;

  let permissions = ['student'];

  beforeEach(() => {
    setup = testHelpers.setupTestVariables(permissions);
    localVue = setup.localVue;
    store = setup.store;

    axios.post = jest.fn((url) => {
      const urlMap = {
        '/auth/login/': { data: { access_token: '1234' } }
      };
      return urlMapper(url, urlMap);
    });

    axios.get = jest.fn((url) => {
      const urlMap = {
        'https://api.github.com/user?access_token=1234': { data: { id: 20, name: 'TEST' } }
      };
      return urlMapper(url, urlMap);
    });
  });

  test('Renders correctly', async () => {
    const wrapper = await testHelpers.mountWrapper(Authenticating, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
