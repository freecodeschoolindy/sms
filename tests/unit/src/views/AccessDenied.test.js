import AccessDenied from '@/views/AccessDenied.vue';

import testHelpers from '@@/testHelpers.js';

describe('AccessDenied.vue', () => {
  let localVue;
  let store;
  let setup;

  let permissions = ['unassigned'];

  beforeEach(() => {
    setup = testHelpers.setupTestVariables(permissions);
    localVue = setup.localVue;
    store = setup.store;
  });

  test('Renders correctly', async () => {
    const wrapper = await testHelpers.shallowMountWrapper(AccessDenied, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
