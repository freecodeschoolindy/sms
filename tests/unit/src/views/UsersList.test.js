import UsersList from '@/views/UsersList.vue';

import testHelpers from '@@/testHelpers.js';

describe('UsersList.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(UsersList, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
