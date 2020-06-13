import App from '@/App.vue';

import testHelpers from '@@/testHelpers.js';

describe('App.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(App, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
