import Login from '@/views/auth/Login.vue';

import testHelpers from '@@/testHelpers.js';

describe('Login.vue', () => {
  let localVue;
  let store;
  let setup;

  let permissions = ['student'];

  beforeEach(() => {
    setup = testHelpers.setupTestVariables(permissions);
    localVue = setup.localVue;
    store = setup.store;
  });

  test('Renders correctly', async () => {
    const wrapper = await testHelpers.shallowMountWrapper(Login, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
