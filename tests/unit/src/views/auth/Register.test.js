import Register from '@/views/auth/Register.vue';

import testHelpers from '@@/testHelpers.js';

describe('Register.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(Register, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
