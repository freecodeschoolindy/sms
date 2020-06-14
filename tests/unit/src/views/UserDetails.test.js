import UserDetails from '@/views/UserDetails.vue';

import testHelpers from '@@/testHelpers.js';

describe('UserDetails.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(UserDetails, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
