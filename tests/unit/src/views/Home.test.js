import Home from '@/views/Home.vue';

import testHelpers from '@@/testHelpers.js';

describe('Home.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(Home, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
